import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../shared-pages/Footer";
import Navbar from "../shared-pages/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className=" min-h-[calc(100vh-136px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ScrollRestoration></ScrollRestoration>
    </>
  );
};

export default MainLayout;
