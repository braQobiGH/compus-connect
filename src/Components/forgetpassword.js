import React, { useState } from "react";
import "../Css/signin.css";
import { Container, Form, Button } from "react-bootstrap";

export default (props) => {
  const email = useInputs();
  const otp = useInputs();
  const password = useInputs();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email.value, otp.value, password.value);
  };
  return (
    <Container className="container">
      <Form className="col-lg-5 col-md-7" onSubmit={onSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
            {...email}
          />
          <Form.Text className="text-muted">
            We'll send otp to your registered email address.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="otp">
          <Form.Label>Recieved Otp</Form.Label>
          <Form.Control
            type="number"
            name="otp"
            placeholder="Enter Otp"
            required
            {...otp}
          />
          <Form.Text className="text-muted">
            Enter Otp we have sent to your registered email.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
            disabled
            {...password}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="col-12">
          Sign In
        </Button>
      </Form>
    </Container>
  );
};

const useInputs = () => {
  const [value, setValue] = useState("");
  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
};
