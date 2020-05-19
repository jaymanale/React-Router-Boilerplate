import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import NotFound from './components/404';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>

        {/* not found page */}
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
