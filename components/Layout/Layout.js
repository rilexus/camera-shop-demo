import React from "react";

const Layout = ({ main, navigation, footer }) => {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          zIndex: 100,
          width: "100%",
        }}
      >
        {navigation}
      </div>
      <div>{main}</div>
      <div>{footer}</div>
    </div>
  );
};

export default Layout;
