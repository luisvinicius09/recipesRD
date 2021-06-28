import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import App from './components/App';
import NoMatch from './components/utils/NoMatch';
import CategoryMeals from './components/category/CategoryMeals';
import Meal from './components/meal/Meal';
import SearchResults from './components/search/SearchResults';

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
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;