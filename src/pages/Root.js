import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, useHistory, Redirect } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Route from '../utils/Route';
import { isConnected, dataStorage } from '../utils/isConnected'
const PagesRoot = () => {
  let history = useHistory();

  const [dataUser, setDataUser] = useState(null);


  const actionLoginDataGoogle = async (u) => {
    const newUser = {
      // id: u.uid,
      name: u.displayName,
      avatar: u.photoURL,
      email: u.email
    }

    setDataUser(newUser);


    const setUserStorage = (history) => {
      const userDataJSON = JSON.stringify(newUser);

      if (!dataStorage || userDataJSON !== dataStorage) {
        localStorage.setItem('@user-data', userDataJSON);
      }
      else {
        history.push('/home')
      }
      //getDataUserStorage();
    }
    setUserStorage(history);

  }

  //console.log(dataUser);
  if (dataUser === null || !isConnected) {
    return (
      <Router>
        <Login onReceiveGoogle={actionLoginDataGoogle} />

      </Router>
    )
  }

  if (dataUser !== null || isConnected) {
    localStorage.setItem('@weser/connected', true);
    return (
      <Router>
        <Home dataUser={dataUser} />
        <Redirect to="/home" />
      </Router>
    )
  }
  if (dataUser === null && isConnected) {
    return (
      <Router>
        <Redirect to="/home" />
        <Home dataUser={dataUser} />
      </Router>
    )
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <Login />
        </Route>

        <Route exact path="/home" isPrivate>
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

export default PagesRoot;
