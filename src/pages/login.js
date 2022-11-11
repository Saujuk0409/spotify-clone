import React from "react";
import { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Searchcontents } from "../helpers/searchcard";
import {Card} from "../components/card"
import img1 from "../assets/img/bp.jpeg";
import logo from "../assets/img/black_logo.svg";
import Button from "../components/Button";
import { Checkbox } from "@mui/material";
import '../styles/login.css'
import TextField from "../components/inputs/TextFeild";
import Joi from 'joi';
import { getplayList } from "../services/playlist";


// const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (Object.keys(errors).length === 0) {
//         console.log(data);
//     } else {
//         console.log("please fill out properly");
//     }
// };
function Login() {
    const [data, setData] = useState({ email: "", password: "" });
	const [errors, setErrors] = useState({});

	const handleInputState = (name, value) => {
		setData({ ...data, [name]: value });
	};

	const handleErrorState = (name, value) => {
		value === ""
			? delete errors[name]
			: setErrors({ ...errors, [name]: value });
	};

	const schema = {
		email: Joi.string().email({ tlds: false }).required().label("Email"),
		password: Joi.string().required().label("Password"),
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (Object.keys(errors).length === 0) {
			console.log(data);
		} else {
			console.log("please fill out properly");
		}
	};
    

    return(
    
    <>
    <div className="login-container">
        {/* <div className="logo-container">
            <svg fill="currentcolor" viewBox="0 0 78 24" style={{height:"60px"}}>
                
            </svg>
        </div> */}
        <div className="su-logo" style={{backgroundColor:"white", color:"white"}}>
            <img src={logo} alt="logo" />
        </div>
    <hr/>
    <main className="login-main">
        <h1 className="login-heading">To continue, log in to Spotify</h1>
        <button className="log-contained-btn" style={{background: "rgb(59, 89, 152)"}}>
            <svg fill="currentcolor">
            <path d="M 20 3 H 4 a 1 1 0 0 0 -1 1 v 16 a 1 1 0 0 0 1 1 h 8.62 v -7 h -2.35 v -2.69 h 2.35 v -2 a 3.27 3.27 0 0 1 3.49 -3.59 a 19.25 19.25 0 0 1 2.1 0.11 v 2.43 h -1.44 c -1.13 0 -1.35 0.54 -1.35 1.32 v 1.73 h 2.69 L 17.76 14 h -2.34 v 7 H 20 a 1 1 0 0 0 1 -1 V 4 a 1 1 0 0 0 -1 -1 Z"/>
            </svg>
            continue with facebook 
        </button>
        <button className="log-contained-btn" style={{background: "black"}}>
        <i class="fa-brands fa-apple"></i>
        {/* <svg fill="currentcolor">
            <path d="M 20 3 H 4 a 1 1 0 0 0 -1 1 v 16 a 1 1 0 0 0 1 1 h 8.62 v -7 h -2.35 v -2.69 h 2.35 v -2 a 3.27 3.27 0 0 1 3.49 -3.59 a 19.25 19.25 0 0 1 2.1 0.11 v 2.43 h -1.44 c -1.13 0 -1.35 0.54 -1.35 1.32 v 1.73 h 2.69 L 17.76 14 h -2.34 v 7 H 20 a 1 1 0 0 0 1 -1 V 4 a 1 1 0 0 0 -1 -1 Z"/>
        </svg> */}
            continue with apple 
        </button>
        <button className="log-contained-btn" style={{color: "#6a6a6a"}}>
        <i class="fa-brands fa-google"></i>
        {/* <svg fill="currentcolor">
            <path d="M 20 3 H 4 a 1 1 0 0 0 -1 1 v 16 a 1 1 0 0 0 1 1 h 8.62 v -7 h -2.35 v -2.69 h 2.35 v -2 a 3.27 3.27 0 0 1 3.49 -3.59 a 19.25 19.25 0 0 1 2.1 0.11 v 2.43 h -1.44 c -1.13 0 -1.35 0.54 -1.35 1.32 v 1.73 h 2.69 L 17.76 14 h -2.34 v 7 H 20 a 1 1 0 0 0 1 -1 V 4 a 1 1 0 0 0 -1 -1 Z"/>
            </svg> */}
            continue with google 
        </button>
        <button className="log-contained-btn" style={{color: "#6a6a6a"}}>
            continue with phone number 
        </button>
        {/* <div className="or"> */}
            <hr/>
            <span className="or-container">OR</span>
            <hr/>
        {/* </div> */}
        <form  onSubmit={handleSubmit} class="log-form_container">
            <div className="log-input_container">
                <TextField type="text"
                    label="Email address or username"
                    placeholder="Email address or username"
                    name="email"
                    handleInputState={handleInputState}
					schema={schema.email}
					handleErrorState={handleErrorState}
					value={data.email}
					error={errors.email}
					required={true}
                />
            </div>
            <div className="log-input_container">
                <TextField
                    // type="text"
                    label="Password"
                    placeholder="Password"
                    name="password"
                    handleInputState={handleInputState}
					schema={schema.password}
					handleErrorState={handleErrorState}
					value={data.password}
					error={errors.password}
					type="password"
					required={true}
                />
            </div>

            <p className="log-forgot_psw">Forgot your password?</p>

            <div className="log-form_bottom">
                {/* <label><input type="checkbox" label="Remember me" style={{size:"100px"}} /></label> */}
                <Checkbox label="Remember me" style={{backgroundColor:"white"}}/>
                <p>Remember me</p>
                <Button
                    className="log-form_bottom-button"
                    type="submit"
                    label="LOG IN"
                    style={{ color: "black", background: "#1ed760", width: "10rem" }}
                    
                >Log in</Button>
            </div>
            <hr className="log-bottom-hr"/>
        </form>
        <h1 className="dont_have_account">Don't have an account?</h1>
        <Link to="/signup" style={{ borderRadius:"50rem",textDecoration:"none", backgroundColor:"white"}}>
            <button className="log-outline-btn" style={{color:"black", backgroundcolor: "black", borderRadius:"50rem"}}>sign up for spotify</button>
        </Link>
    </main>
   </div>
   </>
)};
export default Login;