import React from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";
import { Button } from "../../components";
import { documentTitle } from "../../utils";

const Detail = () => {
  documentTitle("Detail");
  const history = useHistory();

  return (
    <div>
      <h1>Ini Detail</h1>

      <Button onPress={() => history.push("/")}>
        <h2 className="detail-link">Back to Home</h2>
      </Button>
    </div>
  );
};

export default Detail;
