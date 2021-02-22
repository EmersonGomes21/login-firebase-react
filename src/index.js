import React from 'react';
import ReactDOM from 'react-dom';
import Theme from './styles/theme';
import GlobalStyles from './styles/global';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <GlobalStyles />
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);

// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// // import Home from './layout/Home';
// import Profile from './layout/Profile';
// import Login from './layout/Login';
// import SignUp from './layout/Signup';
// import Edit from './layout/Edit';
// // import { AuthProvider } from './auth/AuthContext';
// import { PrivateRoute } from './auth/PrivateRoute';
// import { Inicio } from './components/Inicio';

// function Routes() {
//   return (

//     <Router>
//       <PrivateRoute exact path="/" component={Inicio} />
//       <PrivateRoute exact path="/profile" component={Profile} />
//       <PrivateRoute path="/edit" component={Edit} />
//       <Route exact path="/login" component={Login} />
//       <Route exact path="/sign-up" component={SignUp} />
//     </Router>
//   );
// }

// export default Routes;
