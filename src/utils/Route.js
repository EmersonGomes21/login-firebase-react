import React, { useEffect, useMemo } from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {

  useEffect(() =>{

    const signed = localStorage.getItem('@user-data');

    if (!signed || signed == null) {
  
      return <Redirect to="/login" />;
    }
    if (!signed && isPrivate) {
  
      return <Redirect to="/login" />;
    }
  
    if (signed && !isPrivate) {
      return <Redirect to="/" />;
    }
  },[isPrivate])
  

  return (
    <Route
      {...rest}
      render={props => (
        <Component {...props} />

      )}

    />

  );
}