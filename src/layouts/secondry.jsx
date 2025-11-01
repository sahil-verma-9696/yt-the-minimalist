import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

function SecondryLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default SecondryLayout;
