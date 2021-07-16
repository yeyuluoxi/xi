import {YGetRoute} from "../Type/TBoth";
import CacheRoute from "react-router-cache-route";
import React from "react";

const childRoute: YGetRoute = (routes, base = "") => {
  return routes.map(router => (
    <CacheRoute
      exact = {!router.children}
      key={router.name}
      path={base + router.path}
      component={router.component}
      when={router.when}
    />
  ));
};

export default childRoute;