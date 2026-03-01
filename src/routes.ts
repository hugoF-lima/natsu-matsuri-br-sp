import { createBrowserRouter } from "react-router";
import { Layout } from "./components/app/Layout";
import { Home } from "./components/app/Home";
import { History } from "./components/app/History";
import { Museum } from "./components/app/Museum";
import { AboutMascot } from "./components/app/AboutMascot";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "history", Component: History },
      { path: "museum", Component: Museum },
      { path: "aboutmascot", Component: AboutMascot}
    ],
  },
]);