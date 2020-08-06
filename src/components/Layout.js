import React from "react";
import Sidebar from "./Sidebar";
import Content from './Content'

const TheLayout = () => {
  return (
    <>
      <div className="c-app c-default-layout">
        <Sidebar />
        <div className="c-wrapper">
          {/* <TheHeader/> */}
          <div className="c-body">
            <Content />
          </div>
          {/* <TheFooter/> */}
        </div>
      </div>
    </>
  );
};

export default TheLayout;
