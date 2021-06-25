import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './containers/App';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={App}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;