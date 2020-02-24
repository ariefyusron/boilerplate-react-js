import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./styles.css";
import { Button } from "../../components";
import { documentTitle } from "../../utils";

// action & types redux
import { getSeasons } from "../../redux/actions";

const Detail = () => {
  documentTitle("Detail");
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSeasons());
  }, [dispatch]);

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
