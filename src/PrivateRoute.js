import React from "react";
import { Redirect, Route } from "react-router-dom";


const PrivateRoute = ({component: Component, login, ...rest}) => {
  const loginVal=localStorage.getItem('login')?localStorage.getItem('login'):false;
    return (
    <Route
      {...rest}
      render={(props) =>
        loginVal==='true' ? <Component {...props} /> : <Redirect to={{
            pathname:'/login',
            state:'true'
        }}/>
      }
    />
  );
};

export default PrivateRoute;
