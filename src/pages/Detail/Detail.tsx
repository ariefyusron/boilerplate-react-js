import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./styles.scss";
import { Button } from "../../components";
import { documentTitle } from "../../utils";

// action & types redux
import { getSeasons, sampleAction } from "../../redux/actions";
import { Reducers } from "../../redux/types";

const Detail = () => {
  documentTitle("Detail");
  const history = useHistory();
  const dispatch = useDispatch();
  const homeState = useSelector((state: Reducers) => state.home);

  useEffect(() => {
    dispatch(getSeasons());
  }, [dispatch]);

  const _count = useCallback(() => {
    dispatch(sampleAction());
  }, [dispatch]);

  const _backToHome = useCallback(() => {
    history.push("/");
  }, [history]);

  return (
    <div>
      <h1>Ini Detail</h1>
      <h2>{`Count ${homeState.count}`}</h2>

      <Button onPress={_count}>
        <h2 className="detail-link">Count</h2>
      </Button>

      <Button onPress={_backToHome}>
        <h2 className="detail-link">Back to Home</h2>
      </Button>
    </div>
  );
};

export default Detail;
