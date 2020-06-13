import React, { useRef } from "react";
import SignIn from "../Components/signin";
import SignUp from "../Components/signup";
import ForgotPassword from "../Components/forgotPassword"
import "../Css/welcome.css";
import { Row, Col } from "react-bootstrap";

export default (props) => {
  const divRef = useRef(null);
  const goToSignUp = (e) => (divRef.current.style.marginLeft = "-200%");
  const goToSignIn = (e) => (divRef.current.style.marginLeft = "-100%");
  const goToForgetPassword = (e) => (divRef.current.style.marginLeft = "0%");
  return (
    <div className="main-div">
      <div className="header-div">1</div>
      <div className="signin-signup-forgetpassword-div" ref={divRef}>
        <div className="forgetpassword-div">
          <ForgotPassword />
          <Row id="forgot-link" style={{ marginTop: "1%", marginBottom: "3%" }}>
            <Col onClick={goToSignIn}>Back To Sign In</Col>
          </Row>
        </div>
        <div className="signin-div">
          <SignIn />

          <Row id="signup-link" style={{ marginTop: "1px", marginBottom: "5px", }}>
            <Col onClick={goToSignUp}>Don't have an account ? Sign Up</Col>
          </Row>
          <Row id="forgot-password-link">
            <Col onClick={goToForgetPassword}>Forgot Password ?</Col>
          </Row>
        </div>
        <div className="signup-div">
          <SignUp />
          <Row id="already-link" style={{ marginTop: "2%", marginBottom: "3%",color:'Dodgerblue' }}>
            <Col onClick={goToSignIn}>Already hava an account ? </Col>
          </Row>
        </div>
      </div>
      <div className="features-aboutus-div">4</div>
    </div>
  );
};
