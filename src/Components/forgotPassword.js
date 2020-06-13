import React from "react";
import "../Css/signin.css";
import logo from "../images/locked.png"

import { Container, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngry } from "@fortawesome/free-solid-svg-icons";

export default (props) => (
 <div Id="sign_control"  >
   <div className="row">
     <div   className="col-sm-6 ">
        <img className="img-fluid" style={{width:'200px',height:'230px',marginTop:'10%'}} src={logo} alt="logo"/>
     </div>
     <div  className="col-sm-6">
     <Form >
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required />
        <Form.Text className="text-muted">
         You will get an Otp on your registered email
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Otp</Form.Label>
        <Form.Control type="password" placeholder="Otp" required />
      </Form.Group>
      <Button variant="danger" type="submit" className="col-12">
        Send
      </Button>
    </Form>
     </div>
   </div>
 </div>
);