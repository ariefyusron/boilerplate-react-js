import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./styles.scss";
import { ICONS } from "../../configs";
import { Button, InfiniteScroll } from "../../components";
import { documentTitle } from "../../utils";

// action && type redux
import { sampleAction } from "../../redux/actions";
import { Reducers } from "../../redux/types";

const Home = () => {
  documentTitle("Home");
  const history = useHistory();
  const dispatch = useDispatch();
  const homeState = useSelector((state: Reducers) => state.home);

  useEffect(() => {
    dispatch(sampleAction());
  }, [dispatch]);

  const _loadMore = useCallback(() => {
    dispatch(sampleAction());
  }, [dispatch]);

  return (
    <InfiniteScroll onEndReached={_loadMore}>
      {[...Array(homeState.count)].map((item, index) => (
        <div className="home-container" key={index}>
          <header className="home-header">
            <img src={ICONS.logo} className="home-logo" alt="logo" />
            <p>
              {"Edit "}
              <code>src/App.tsx</code>
              {" and save to reload."}
            </p>
            <h3>{index}</h3>
            <Button onPress={() => history.push("/detail")}>
              <h2 className="home-link">Go To Detail</h2>
            </Button>
          </header>
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default Home;
