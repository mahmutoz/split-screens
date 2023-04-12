import React from "react";
import "@/pages/dashboard/Dashboard.scss";
import MainLayout from "@/layouts/MainLayout.jsx";
import MainPanel from "@/pages/dashboard/panels/MainPanel.jsx";

function Dashboard() {
  return (
    <MainLayout>
      <MainPanel/>
    </MainLayout>
  );
}

export default Dashboard;
