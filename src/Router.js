import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import App from './views/App';
import NoMatch from './views/NoMatch';
import CategoryMeals from './views/CategoryMeals';
import Meal from './views/Meal';
import SearchResults from './views/SearchResults';
import FilterResults from './views/FilterResults';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/home" component={App}/>
      <Route exact path="/categories/:category" component={CategoryMeals}/>
      <Route exact path="/meals/:id" component={Meal}/>
      <Route exact path="/search/results" component={SearchResults}/>
      <Route exact path="/filter/results" component={FilterResults}/>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;