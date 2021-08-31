import "./App.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import Watch from "./pages/watch/Watch";
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
function App() {
  const user=true;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home/> : <Redirect to="/register"/>}
        </Route>
        <Route  path="/register">
          {!user ? <Register/> : <Redirect to="/"/>}
        </Route>
        <Route  path="/login">
          {!user ? <Login/> : <Redirect to="/"/>}
        </Route>
        <Route  path="/movie">
         {user ? <Home type="movie"/> : <Redirect to="/register"/>}   
        </Route>
        <Route  path="/series">
        {user ? <Home type="series"/> : <Redirect to="/register"/>}
        </Route>
        <Route  path="/watch">
        {user ? <Watch/> : <Redirect to="/register"/>}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
