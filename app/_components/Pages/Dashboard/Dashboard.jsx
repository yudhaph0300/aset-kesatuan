"use client";

import DashboardActivities from "./DashboardComponents/DashboardActivities/DashboardActivities";
import DashboardChart from "./DashboardComponents/DashboardChart/DashboardChart";
import DashboardOverview from "./DashboardComponents/DashboardOverview/DashboardOverview";

export default function Dashboard() {
  return (
    <>
      <DashboardOverview />
      <DashboardChart />
      <DashboardActivities />
    </>
  );
}
