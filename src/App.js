import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import AddService from './components/Dashboard/AddService/AddService';
import AddTestimonial from './components/Dashboard/AddTestimonial/AddTestimonial';
import { createContext, useState } from 'react';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Review from './components/Dashboard/Review/Review';
import Admin from './components/Dashboard/Admin/Admin';


export const UserContext = createContext();
function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/addServices">
            <AddService></AddService>
          </Route>
          <Route path="/addTestimonial">
            <AddTestimonial />
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path='*'>
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
