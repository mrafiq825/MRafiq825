import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("blog", "routes/blog.tsx"),
  route("blog/:slug", "routes/blog-detail.tsx"),
  route("prompts", "routes/prompts.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;

