import React from 'react';
import { Switch, Route } from "react-router-dom";
import styles from "./ph-main.module.scss"
import routes from '../../../../routes';

const PhMain = () => {
  console.log("PhMain called");
  return (<div className={styles.phMain}>
    <Switch>
      {routes.map((route, idx) =>
        <Route key={idx} {...route} />
      )}
    </Switch>
  </div>);
}

export default PhMain;