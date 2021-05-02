import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import AuthContext from "../Context/AuthContext";

const LoginScreen = (props) => {
  const { setLogin,setUsername } = useContext(AuthContext);
  const [user,setUser]=useState('');
  const loginHandler = (e) => {
    e.preventDefault();
    setLogin(true);
    localStorage.setItem("login", true);
    props.history.push("/home");
  };
  useEffect(()=>{
      setUsername(user);
  },[user,setUsername])
  const loginMessage=props.location.state==='true'?<div>Please login first!</div>:'';
  return (
    <div className="Login-Card">
      <Card>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          {loginMessage} 
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="email" placeholder="Enter username" onChange={(event)=>setUser(event.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">  
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={loginHandler}>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginScreen;
