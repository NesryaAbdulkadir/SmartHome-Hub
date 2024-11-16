import { useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage/Index";

export default function CustomRoutes() {
  const element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);
  return element;
}
