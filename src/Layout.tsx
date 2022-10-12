import React from "react";
import NavigationTab from "./components/NavigationTab";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  return (
    <div>
      <NavigationTab />
      <hr />
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above.
          For now it is removed
          TODO: Return outlet
          */}

      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
