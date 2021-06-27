import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import App from './components/App';
import NoMatch from './components/NoMatch';
import CategoryMeals from './components/CategoryMeals';
import Meal from './components/Meal';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/home" component={App}/>
      <Route exact path="/categories/:category" component={CategoryMeals}/>
      <Route exact path="/meals/:id" component={Meal}/>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;