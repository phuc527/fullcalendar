import React from "react";

// Style
import { StyledListSidebar } from "./style";

const Sidebar = ({ listSidebar }) => {

  return (
    <StyledListSidebar
      id="list-sidebar"
      className="list-sidebar"
    >
      {listSidebar.map((evtSidebar, index) => (
        <div
          className="item"
          itemID={evtSidebar.id}
          key={index}
          draggable={true}
        >
          <div className="title">{evtSidebar.title}</div>
        </div>
      ))}
    </StyledListSidebar>
  );
};

export default Sidebar;
