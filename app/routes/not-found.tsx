import type { Route } from "./+types/not-found";

import Navbar from "~/components/layout/Navbar";
import NotFoundPage from "~/components/feedback/NotFoundPage";

export const meta: Route.MetaFunction = () => [
  { title: "404 | Rafiq Portfolio" },
  {
    name: "description",
    content:
      "The page you are trying to access does not exist in this portfolio.",
  },
];

const NotFoundRoute = () => {
  return (
    <>
      <Navbar />
      <NotFoundPage />
    </>
  );
};

export default NotFoundRoute;
