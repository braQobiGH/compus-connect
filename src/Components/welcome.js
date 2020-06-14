import React, { useRef } from "react";
import SignIn from "../Components/signin";
import SignUp from "../Components/signup";
import ForgetPassword from "../Components/forgetpassword";
// import { Row, Col } from "react-bootstrap";
import '../Css/welcome.css'
import { Alert } from "react-bootstrap";

export default props=>{
  const divRef = useRef(null);
  const goToSignUp = (e) => (divRef.current.style.marginLeft = "-200%");
  const goToSignIn = (e) => (divRef.current.style.marginLeft = "-100%");
  const goToForgetPassword = (e) => (divRef.current.style.marginLeft = "0%");
  return (
      <div className="main-div">
        <div style={{ width: "100%", height: "10px", backgroundColor: "darkorange" }}> 
      </div>

      <div className="row">
        <div className="header-div col-12">
        <h4 style={{paddingLeft:"20px",paddingTop:"20px"}}>CAMPUS<span style={{color:"darkorange",fontSize:"32px",fontWeight:"bolder"}}>C</span>ONNECT</h4>
        </div>
      </div>
      <Alert style={{textAlign:'center',marginTop:'1%'}} variant='primary' show={true}>This is alert</Alert>
      <div className="signin-signup-forgetpassword-div" ref={divRef}>
        <div className="forgetpassword-div">
          <ForgetPassword goToSignIn={goToSignIn}/>
        </div>
        <div className="signin-div">
          <SignIn goToForgetPassword={goToForgetPassword} goToSignUp={goToSignUp}/>
        </div>
        <div className="signup-div">
          <SignUp goToSignIn={goToSignIn}/>
        </div>
      </div>
      <div className="features-aboutus-div">4</div>
    </div>
  )
}
