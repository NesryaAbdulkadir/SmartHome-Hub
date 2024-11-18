import { useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage/Index";
import Features from "./pages/Features";
import ContactUs from "./pages/ContactUs";

export default function CustomRoutes() {
  const element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/features",
      element: <Features />,
    },
    {
      path: "/contact",
      element: <ContactUs />,
    },
  ]);
  return element;
}
