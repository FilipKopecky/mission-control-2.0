import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, matchPath, useLocation } from "react-router-dom";

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

const NavigationTab = () => {
  const routeMatch = useRouteMatch(["/", "/projects/*", "/vocabularies"]);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab}>
      <Tab label="Home" value="/" to="/" component={Link} />
      <Tab
        label="Projects"
        value="/projects/*"
        to="/projects"
        component={Link}
      />
      <Tab
        label="Vocabularies"
        value="/vocabularies"
        to="/vocabularies"
        component={Link}
      />
    </Tabs>
  );
};

export default NavigationTab;
