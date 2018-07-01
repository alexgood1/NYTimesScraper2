import React from "react";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
      NYT-React
    </a>
    <a className="navbar-brand" href="/articles">
      Search
    </a>
    <a className="navbar-brand" href="/saved/">
      Saved Articles
    </a>
  </nav>
);

export default Nav;
