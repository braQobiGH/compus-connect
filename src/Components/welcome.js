import React, { useRef } from "react";
import SignIn from "../Components/signin";
import SignUp from "../Components/signup";
<<<<<<< HEAD
import ForgetPassword from "../Components/forgetpassword";
=======
import ForgotPassword from "../Components/forgotPassword"
>>>>>>> bd9526ccc27a431744b44cfeea71328bdf495635
import "../Css/welcome.css";
import { Row, Col } from "react-bootstrap";

export default (props) => {
  const divRef = useRef(null);
  const goToSignUp = (e) => (divRef.current.style.marginLeft = "-200%");
  const goToSignIn = (e) => (divRef.current.style.marginLeft = "-100%");
  const goToForgetPassword = (e) => (divRef.current.style.marginLeft = "0%");
  return (
    <div className="main-div">
      <div style={{width:"100%",height:"10px",backgroundColor:"darkorange"}}></div>

  <div className="row">
      <div className="header-div col-12">
      <h4 style={{paddingLeft:"20px",paddingTop:"20px"}}>CAMPUS<span style={{color:"darkorange",fontSize:"32px",fontWeight:"bolder"}}>C</span>ONNECT</h4>
      
      </div>
      </div>


      <div className="signin-signup-forgetpassword-div" ref={divRef}>
        <div className="forgetpassword-div">
<<<<<<< HEAD
          <ForgetPassword />
          <Row id="signup-link" style={{ marginTop: "3%", marginBottom: "3%" }}>
=======
          <ForgotPassword />
          <Row id="forgot-link" style={{ marginTop: "1%", marginBottom: "3%" }}>
>>>>>>> bd9526ccc27a431744b44cfeea71328bdf495635
            <Col onClick={goToSignIn}>Back To Sign In</Col>
          </Row>
        </div>
        <div className="signin-div">
          <SignIn />

          <Row id="signup-link" style={{ marginTop: "1px", marginBottom: "5px", }}>
            <Col onClick={goToSignUp}>Don't have an account ? Sign Up</Col>
          </Row>
          <Row id="forgot-password-link" style={{ color: "red" }}>
            <Col onClick={goToForgetPassword}>Forgot Password ?</Col>
          </Row>
        </div>
        <div className="signup-div">
          <SignUp />
<<<<<<< HEAD
          <Row id="signup-link" style={{ marginTop: "3%", marginBottom: "3%" }}>
=======
          <Row id="already-link" style={{ marginTop: "2%", marginBottom: "3%",color:'Dodgerblue' }}>
>>>>>>> bd9526ccc27a431744b44cfeea71328bdf495635
            <Col onClick={goToSignIn}>Already hava an account ? </Col>
          </Row>
        </div>
      </div>
      <div className="features-aboutus-div">4</div>
    </div>
  );
};
