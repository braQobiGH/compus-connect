import React from "react";
import "../Css/signup.css";
import "../Css/footer.css"
import GoogleMap from "../Components/googleMap";import { Form,Center, Container,Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default(props) =>{
    return(
    <div >
        <Row>
            <Col style={{color:'orangered'}}>
                <center>
                    <h5>Follow us</h5>
                </center>
            </Col>
        </Row>
        <Row className ="Row" id="social-media-icons">
            <Col>
            <center>
            <a href='https://web.facebook.com/omarguyguy.sterling.92/'>
                <FontAwesomeIcon icon={faFacebook} size='2x' color='dodgerblue' style={{margin:'5px'}}/>
            </a>
           <a href='#'>
                <FontAwesomeIcon icon={faTwitter} size='2x' color='skyblue' style={{margin:'5px'}}/>
            </a> 
            <a href="#">
                <FontAwesomeIcon icon={faInstagram} size='2x' color='violet' fill='violet' style={{margin:'5px'}}/>
            </a>
            <a>
                <FontAwesomeIcon icon={faYoutube} size='2x' color='red' style={{margin:'5px'}}/>
            </a>
            <a href="#">
                <FontAwesomeIcon icon={faGithub} size='2x' color='white' style={{margin:'5px'}}/>
            </a>
            <a href="#">
                <FontAwesomeIcon icon={faWhatsapp} size='2x' color='green' style={{margin:'5px'}}/>
            </a>
            <a href="#">
                <FontAwesomeIcon icon={faShare} size='2x' color='white' style={{margin:'5px'}}/>
            </a>
           
            </center>
            </Col>
            
        </Row>
        <Row style={{marginTop:'2%'}}>
            <Col className="col-sm-6" id="get-in-touch">
                <h4 style={{marginBottom:'3%',marginLeft:'5px',padding:'20px'}} >Get in Touch</h4>
                <center>
                <Form style={{width:'100%',margin:'10px',padding:'20px'}}>
                    <Form.Group controlId="formBasicMessage">
                        <textarea placeHolder='Enter message' style={{width:'100%',height:'150px'}}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control
                             style={{width:'100%',marginBottom:'5%',height:'50px'}} 
                             type="text" placeholder="Enter your name" required />
                        <Form.Control
                             style={{width:'100%',height:'50px',marginBottom:'5%'}}
                             type="text" placeholder="Email" required />
                        <Form.Control 
                            style={{width:'100%',height:'50px',marginBottom:'5%'}} 
                            type="text" placeholder="Enter Subject" required />
                    </Form.Group>
                    <Button style={{width:'100%',float:'left',marginRight:'25px',marginBottom:'5%',height:'100px'}}   type="submit" variant="outline-dark" className="col-12 btn" >
                        SEND
                    </Button>
                    </Form>
                </center>
            </Col>
            <Col className="col-sm-6" id="locate-us">
                <center>
                   <h4 style={{marginBottom:'6%',marginLeft:'5px',padding:'20px'}} >Locate Us</h4>
                   <div style={{width:'100%',marginBottom:'5%'}}>
                       <GoogleMap/>
                   </div>
                </center>
            </Col>
        </Row>
        <Row>
            <Col className="col-sm-12">
                <center>
                    <p style={{color:'white'}}>
                        <copyright> 
                            2020 by Real Team <FontAwesomeIcon icon ={faHeart } size='2x' color='orangered'/>
                        </copyright>
                    </p>
                </center>
            </Col>
        </Row>
    </div>
    )
}