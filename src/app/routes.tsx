import { createBrowserRouter } from "react-router";
import { MobileLayout } from "./components/MobileLayout";
import { AggregatorLayout } from "./components/AggregatorLayout";
import { AdminLayout } from "./components/AdminLayout";
import { Login } from "./pages/Login";
import { Verifying } from "./pages/Verifying";
import { Home } from "./pages/Home";
import { Sensors } from "./pages/Sensors";
import { Settings } from "./pages/Settings";
import { Alerts } from "./pages/Alerts";
import { YieldHistory } from "./pages/YieldHistory";
import { AggregatorDashboard } from "./pages/aggregator/Dashboard";
import { AdminDashboard } from "./pages/admin/Dashboard";

export const router = createBrowserRouter([
  { path: "/", Component: Login },
  { path: "/verifying", Component: Verifying },
  {
    path: "/farmer",
    Component: MobileLayout,
    children: [
      { index: true, Component: Home },
      { path: "sensors", Component: Sensors },
      { path: "yield", Component: YieldHistory },
      { path: "settings", Component: Settings },
      { path: "alerts", Component: Alerts },
    ],
  },
  {
    path: "/aggregator",
    Component: AggregatorLayout,
    children: [
      { index: true, Component: AggregatorDashboard },
      { path: "*", Component: AggregatorDashboard },
    ],
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminDashboard },
      { path: "*", Component: AdminDashboard },
    ],
  },
]);
