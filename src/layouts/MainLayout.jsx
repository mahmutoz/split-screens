import React from "react";
import Topbar from "@/components/shared/topbar/Default.jsx";
import Footer from "@/components/shared/footer/Default.jsx";

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
