import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Component/NavBar";
import SideBar from "../Component/SideBar";


const drawerWidth = 240;



export default function Root() {
  return (
    <div>
      <NavBar drawerWidth={drawerWidth} />

      <SideBar drawerWidth={drawerWidth} />

      <Outlet/>
    </div>
  );
}
