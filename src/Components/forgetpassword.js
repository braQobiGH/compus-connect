import React, { useState } from "react";
import "../Css/forgetpassword.css";
import {  Form, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";
export default (props) => {
  const email = useInputs();
  const otp = useInputs();
  const password = useInputs();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email.value, otp.value, password.value);
  };
  return (
    <div className="container-div">
      <div className='emoji-div'><p>Forgot Password ? </p><FontAwesomeIcon icon={faSadTear} size='4x' color='darkorange'/></div>
      <div className='forgetpassword-form-div'>
      <Form style={{width:'100%'}} onSubmit={onSubmit}>
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
      <Row id="forget-password-link">
          <Col onClick={props.goToSignIn}>Back To Sign In</Col>
        </Row>
        </div>
    </div>
  );
};

const useInputs = () => {
  const [value, setValue] = useState("");
  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
};
