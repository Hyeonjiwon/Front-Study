import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Main = () => {
  return (
    <>
      <Header></Header>
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
            <Link to="/sample-search">sample search</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Main;
