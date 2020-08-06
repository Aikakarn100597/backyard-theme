import React from "react";
import Sidebar from "./Sidebar";
import Headerbar from "./Headerbar";

const TheLayout = () => {
  return (
    <>
      <div className="c-app c-default-layout">
        <Sidebar />
        <div className="c-wrapper">
          <Headerbar/>
          <div className="c-body">{/* <TheContent/> */}</div>
          {/* <TheFooter/> */}
        </div>
      </div>
    </>
  );
};

export default TheLayout;
