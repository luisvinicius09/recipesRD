import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import App from './components/App';
import NoMatch from './components/NoMatch';
import CategoryMeals from './components/CategoryMeals';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/home" component={App}/>
      <Route exact path="/home/:category" component={CategoryMeals}/>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;