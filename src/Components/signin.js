import React from "react";
import "../Css/signin.css";
import logo from "../images/mylogo.jpg"
import happy from "../images/happy.jpg"
import join from "../images/join.jpg"
import meeting from "../images/meeting.jpg"
import walk from "../images/walk.jpg"


import Carousel from 'react-bootstrap/Carousel'

import { Form, Button } from "react-bootstrap";

export default (props) => (
 <div Id="sign_control"  >
   <div className="row">
     <div   className="col-sm-6 ">
     
     


        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Connect with Friends</h3>
      <center>
      <p>Connect with friends from different schools and share ideas.</p>
      </center>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={walk}
      alt="Third slide"
      style= {{height:"270px"}}
      />
  

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={join}
      alt="Third slide"
      style= {{height:"270px"}}
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={happy}
      alt="Third slide"
      style= {{height:"270px"}}
    />

<Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={meeting}
      alt="Third slide"
      style= {{height:"270px"}}
    />
    

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

     </div>
     <div  className="col-sm-6">
       <center>
       <h5 style={{fontSize:"27px",fontWeight:"bolder"}}>Login Now</h5>
       </center>
     <Form >
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
     </div>
   </div>
 </div>
);
