import Topbar from "@/components/Topbar/Default.jsx";
import Footer from "@/components/Footer/Default.jsx";

function MainLayout({ children }) {
  return (
    <div className="wrapper">
      <Topbar />
      <main className="flex-full">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
