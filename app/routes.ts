import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/api/chat", "routes/api.chat.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
