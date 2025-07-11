import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate()
  const loginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true)
    navigate('/')
  };

  return (
    <div>
      <Container>
        <Form onSubmit={(event) => loginUser(event)}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="warning" type="submit">
            로그인
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
