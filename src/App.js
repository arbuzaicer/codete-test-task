import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import routes from './routes';

const App = () => (
  <Layout>
    <Switch>
      {routes.map((route) => (
        <Route exact={route.exact} key={route.toString()} path={route.path}>
          {route.component}
        </Route>
      ))}
    </Switch>
  </Layout>
);

export default App;
