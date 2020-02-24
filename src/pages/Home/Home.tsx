import React from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";
import { ICONS } from "../../configs";
import { Button } from "../../components";
import { documentTitle } from "../../utils";

const Home = () => {
  documentTitle("Home");
  const history = useHistory();

  return (
    <div className="home-container">
      <header className="home-header">
        <img src={ICONS.logo} className="home-logo" alt="logo" />
        <p>
          {"Edit "}
          <code>src/App.tsx</code>
          {" and save to reload."}
        </p>
        <Button onPress={() => history.push("/detail")}>
          <h2 className="home-link">Go To Detail</h2>
        </Button>
      </header>
    </div>
  );
};

export default Home;
