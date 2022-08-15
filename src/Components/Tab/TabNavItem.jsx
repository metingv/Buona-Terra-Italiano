import React from "react";

const TabNavItem = ({ id, title, title1, activeTab, setActiveTab }) => {
  return (
    <li  className={activeTab  === id ? "active" : ""}>
      {title} <br />
      <div className="title1">
      {title1}
      </div>
 
    </li>
  );
};
export default TabNavItem;
