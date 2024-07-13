import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>Main 화면</h1>
      <ul>
        <li>
          <Link to="/sample-component">sample components</Link>
        </li>
        <li>
          <Link to="/sample-login">sample login</Link>
        </li>
        <li>
          <Link to="/sample-query">sample retreive</Link>
        </li>
      </ul>
    </div>
  );
};

export default Main;
