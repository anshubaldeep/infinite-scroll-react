import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import LoginScreen from "./components/LoginScreen";
import AuthContext from "./Context/AuthContext";
import {  useState } from "react";
import {  Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import PrivateRoute from "./PrivateRoute";

function App() {
  const loginVal=localStorage.getItem('login')?localStorage.getItem('login'):false;
  const [login, setLogin] = useState(loginVal);
  const [userName, setUsername] = useState("");
  
  return (
    <div className="App">
      <AuthContext.Provider value={{ setLogin, setUsername,userName,login}}>
      <Router>
        <Layout>
            <Switch>
              <Route exact path="/login" component={LoginScreen}/>
              <PrivateRoute exact path="/home" component={MainScreen} login={login}/>
              <PrivateRoute path='/' component={MainScreen} login={login}/>
            </Switch>
        </Layout>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
