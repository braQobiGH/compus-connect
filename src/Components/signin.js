import React from "react";
import "../Css/signin.css";
// import logo from "../images/mylogo.jpg"
// import happy from "../images/happy.jpg"
// import join from "../images/join.jpg"
// import meeting from "../images/meeting.jpg"
// import walk from "../images/walk.jpg"


// import Carousel from 'react-bootstrap/Carousel'

import { Form, Button, Row, Col } from "react-bootstrap";

export default (props) => (
  <div className='container-div'>
    <div className='carousel-div'></div>
     <div  className="signin-form-div">
       <center>
       <h4>Login Now</h4>
       </center>
     <Form style={{width:'100%'}}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required />
      </Form.Group>
      <Button  type="submit" className="col-12 btn" style={{backgroundColor:"darkorange"}}>
        Sign In
      </Button>
    </Form>
        <Row id="signup-link" style={{ marginTop: "3%",color:'Dodgerblue'}}>
            <Col onClick={props.goToSignUp}>Don't have an account ? Sign Up</Col>
          </Row>
          <Row id="forget-password-link" style={{ color: "red" }}>
            <Col onClick={props.goToForgetPassword}>Forgot Password ?</Col>
          </Row>
    </div>
    </div>
);
