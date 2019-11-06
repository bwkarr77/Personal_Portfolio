import React from "react";
import { Route } from "react-router-dom";

const RoutePath = address => {
  console.log(address.address);
  return (
    <div>
      {address.address.forEach(each => (
        <Route
          exact
          path={"/"}
          render={props => {
            console.log("/", props);
            // return <Charts coinData={coinData}/>;
          }}
        />
      ))}
    </div>
  );
};

export default RoutePath;
