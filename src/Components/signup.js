import React from "react";
import "../Css/signin.css";
import { Container, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngry } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/mylogo.jpg"
import happy from "../images/happy.jpg"
import join from "../images/join.jpg"
import meeting from "../images/meeting.jpg"
import walk from "../images/walk.jpg"
import Carousel from 'react-bootstrap/Carousel'

export default (props) => (
  <Container className="container-fluid">
    <div className="row">
    <div   className="col-sm-6 ">
    <h6 ><span className="mb-3 " style={{fontSize:"25px",fontWeight:"bolder",color:"darkorange"}}> Join the largest Education Social Network</span><span><br/><center>Connect with Friends from school, College and Universities</center></span></h6>
     


     <Carousel>
<Carousel.Item>
 <img
   className="d-block w-100"
   src={logo}
   alt="First slide"
   style= {{height:"300px"}}
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
   style= {{height:"300px"}}
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
   style= {{height:"300px"}}
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
   style= {{height:"300px"}}
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
   style= {{height:"300px"}}
 />
 

 <Carousel.Caption>
   <h3>Third slide label</h3>
   <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
 </Carousel.Caption>
</Carousel.Item>
</Carousel>
    </div>
    <div  className="col-sm-6">
      <center >
    <h5  style={{fontSize:"27px",fontWeight:"bolder"}}>Create Account For Free</h5>
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
    </div>
    </div>
    
  </Container>
);
