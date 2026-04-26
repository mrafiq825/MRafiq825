FROM node:20-alpine AS base
WORKDIR /app

FROM base AS dev-deps
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS prod-deps
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

FROM base AS builder
ARG VITE_GEMINI_API_KEY
ARG VITE_GEMINI_MODEL
ARG VITE_FORMSPREE_ID
ENV VITE_GEMINI_API_KEY=$VITE_GEMINI_API_KEY
ENV VITE_GEMINI_MODEL=$VITE_GEMINI_MODEL
ENV VITE_FORMSPREE_ID=$VITE_FORMSPREE_ID
COPY --from=dev-deps /app/node_modules /app/node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

COPY --chown=node:node package.json package-lock.json ./
COPY --chown=node:node --from=prod-deps /app/node_modules ./node_modules
COPY --chown=node:node --from=builder /app/build ./build

USER node
EXPOSE 3000

CMD ["npm", "run", "start"]