import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Market from './Market';
import StoreDetail from './StoreDetail';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Market} />
      <Route path="/:store_name" component={StoreDetail} />
    </Switch>
  );
};
