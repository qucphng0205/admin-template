import React from 'react';
import { Switch, Route } from "react-router-dom";

import routes from '../../../../routes';

const PhMain = () => {
  console.log("PhMain called");
  return (<React.Fragment>
    <Switch>
      {routes.map((route, idx) =>
        <Route key={idx} {...route} />
      )}
    </Switch>
  </React.Fragment>);
}

export default PhMain;