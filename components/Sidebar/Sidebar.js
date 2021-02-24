import React from "react";
import LinkList from "../LinkList/LinkList";
import { SidebarWrapper } from "./Sidebar.css";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <LinkList />
    </SidebarWrapper>
  );
};

export default Sidebar;
