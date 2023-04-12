import React from "react";
import Topbar from "@/components/shared/Topbar/Default.jsx";
import Footer from "@/components/shared/Footer/Default.jsx";

function MainLayout({children}) {
  return (
    <div className="wrapper">
      <Topbar/>
      <main className="flex-full">{children}</main>
      <Footer/>
    </div>
  );
}

export default MainLayout;
