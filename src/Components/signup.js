import React from "react";
import "../Css/signup.css";
import { Form, Button, Col, Row } from "react-bootstrap";
// import logo from "../images/mylogo.jpg"
// import happy from "../images/happy.jpg"
// import join from "../images/join.jpg"
// import meeting from "../images/meeting.jpg"
// import walk from "../images/walk.jpg"
// import Carousel from 'react-bootstrap/Carousel'

export default (props) => (
  <div className="container-div">
    <div className='carousel-div'></div>
    <div  className="signup-form-div">
      <center >
    <h4>Create Account For Free</h4>
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
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="number" placeholder="Mobile No." required />
      </Form.Group>
      <Button  type="submit" className="col-12 btn pulse" style={{backgroundColor:"darkorange"}}>
        Sign Up
      </Button>
      </Form>
      <Row id="already-link" style={{ marginTop: "3%",color:'Dodgerblue' }}>
            <Col onClick={props.goToSignIn}>Already hava an account ? </Col>
          </Row>
    </div>
  </div>
);
