import React from "react";
import { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Searchcontents } from "../helpers/searchcard";
import {Card} from "../components/card"
import img1 from "../assets/img/bp.jpeg";
import Button from "../components/Button";
import { Checkbox } from "@mui/material";
import '../styles/login.css'
import TextField from "../components/inputs/TextFeild";
import Joi from 'joi';


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
        <div className="logo-container">
            <svg fill="currentcolor" viewBox="0 0 78 24" style={{height:"60px"}}>
                <path d="M 18.616 10.639 c -3.77 -2.297 -9.99 -2.509 -13.59 -1.388 a 1.077 1.077 0 0 1 -1.164 -0.363 a 1.14 1.14 0 0 1 -0.119 -1.237 c 0.136 -0.262 0.37 -0.46 0.648 -0.548 c 4.132 -1.287 11 -1.038 15.342 1.605 a 1.138 1.138 0 0 1 0.099 1.863 a 1.081 1.081 0 0 1 -0.813 0.213 c -0.142 -0.02 -0.28 -0.07 -0.403 -0.145 Z m -0.124 3.402 a 0.915 0.915 0 0 1 -0.563 0.42 a 0.894 0.894 0 0 1 -0.69 -0.112 c -3.144 -1.983 -7.937 -2.557 -11.657 -1.398 a 0.898 0.898 0 0 1 -0.971 -0.303 a 0.952 0.952 0 0 1 -0.098 -1.03 a 0.929 0.929 0 0 1 0.54 -0.458 c 4.248 -1.323 9.53 -0.682 13.14 1.595 a 0.95 0.95 0 0 1 0.3 1.286 Z m -1.43 3.267 a 0.73 0.73 0 0 1 -0.45 0.338 a 0.712 0.712 0 0 1 -0.553 -0.089 c -2.748 -1.722 -6.204 -2.111 -10.276 -1.156 a 0.718 0.718 0 0 1 -0.758 -0.298 a 0.745 0.745 0 0 1 -0.115 -0.265 a 0.757 0.757 0 0 1 0.092 -0.563 a 0.737 0.737 0 0 1 0.457 -0.333 c 4.455 -1.045 8.277 -0.595 11.361 1.338 a 0.762 0.762 0 0 1 0.241 1.028 Z M 11.696 0 C 5.237 0 0 5.373 0 12 c 0 6.628 5.236 12 11.697 12 c 6.46 0 11.698 -5.372 11.698 -12 c 0 -6.627 -5.238 -12 -11.699 -12 h 0.001 Z m 20.126 11.078 c -2.019 -0.494 -2.379 -0.84 -2.379 -1.57 c 0 -0.688 0.633 -1.151 1.572 -1.151 c 0.91 0 1.814 0.352 2.76 1.076 a 0.131 0.131 0 0 0 0.187 -0.03 l 0.987 -1.426 a 0.139 0.139 0 0 0 -0.025 -0.185 c -1.127 -0.928 -2.396 -1.378 -3.88 -1.378 c -2.18 0 -3.703 1.342 -3.703 3.263 c 0 2.06 1.315 2.788 3.585 3.352 c 1.932 0.457 2.258 0.84 2.258 1.524 c 0 0.757 -0.659 1.229 -1.72 1.229 c -1.18 0 -2.141 -0.408 -3.216 -1.364 a 0.13 0.13 0 0 0 -0.188 0.016 l -1.106 1.35 a 0.137 0.137 0 0 0 0.013 0.188 c 1.252 1.147 2.79 1.752 4.451 1.752 c 2.35 0 3.869 -1.317 3.869 -3.356 c 0 -1.723 -1.003 -2.676 -3.465 -3.29 Z m 10.487 2.31 c 0 1.454 -0.874 2.47 -2.125 2.47 c -1.235 0 -2.169 -1.061 -2.169 -2.47 c 0 -1.41 0.933 -2.47 2.17 -2.47 c 1.23 0 2.124 1.038 2.124 2.47 Z m -1.706 -4.354 c -1.018 0 -1.854 0.412 -2.543 1.256 v -0.95 a 0.136 0.136 0 0 0 -0.038 -0.095 a 0.132 0.132 0 0 0 -0.093 -0.04 h -1.81 a 0.131 0.131 0 0 0 -0.093 0.04 a 0.136 0.136 0 0 0 -0.039 0.096 v 10.546 c 0 0.076 0.06 0.137 0.133 0.137 h 1.809 a 0.132 0.132 0 0 0 0.093 -0.041 a 0.136 0.136 0 0 0 0.038 -0.096 v -3.329 c 0.69 0.794 1.525 1.18 2.543 1.18 c 1.893 0 3.808 -1.494 3.808 -4.35 c 0 -2.858 -1.915 -4.354 -3.808 -4.354 Z m 8.72 6.839 c -1.297 0 -2.274 -1.068 -2.274 -2.486 c 0 -1.422 0.943 -2.455 2.244 -2.455 c 1.305 0 2.288 1.069 2.288 2.487 c 0 1.422 -0.949 2.454 -2.258 2.454 Z m 0 -6.838 c -2.438 0 -4.347 1.926 -4.347 4.383 c 0 2.432 1.896 4.338 4.317 4.338 c 2.445 0 4.36 -1.92 4.36 -4.369 c 0 -2.44 -1.901 -4.353 -4.33 -4.353 Z m 9.535 0.17 h -1.99 V 7.117 a 0.136 0.136 0 0 0 -0.08 -0.126 a 0.13 0.13 0 0 0 -0.052 -0.01 h -1.809 a 0.133 0.133 0 0 0 -0.093 0.04 a 0.136 0.136 0 0 0 -0.038 0.095 v 2.087 h -0.87 a 0.131 0.131 0 0 0 -0.122 0.085 a 0.139 0.139 0 0 0 -0.01 0.052 v 1.595 c 0 0.074 0.06 0.135 0.132 0.135 h 0.87 v 4.126 c 0 1.667 0.809 2.513 2.404 2.513 c 0.648 0 1.186 -0.138 1.694 -0.434 a 0.135 0.135 0 0 0 0.067 -0.117 V 15.64 a 0.137 0.137 0 0 0 -0.063 -0.115 a 0.13 0.13 0 0 0 -0.129 -0.006 c -0.349 0.18 -0.685 0.263 -1.061 0.263 c -0.58 0 -0.84 -0.271 -0.84 -0.876 V 11.07 h 1.99 a 0.13 0.13 0 0 0 0.094 -0.04 a 0.136 0.136 0 0 0 0.039 -0.096 V 9.339 a 0.137 0.137 0 0 0 -0.039 -0.096 a 0.132 0.132 0 0 0 -0.094 -0.04 v 0.001 Z m 6.934 0.007 v -0.255 c 0 -0.755 0.281 -1.092 0.914 -1.092 c 0.376 0 0.68 0.077 1.019 0.194 a 0.13 0.13 0 0 0 0.118 -0.02 a 0.135 0.135 0 0 0 0.056 -0.11 V 6.365 a 0.137 0.137 0 0 0 -0.026 -0.081 a 0.133 0.133 0 0 0 -0.068 -0.05 a 4.852 4.852 0 0 0 -1.502 -0.22 c -1.67 0 -2.554 0.965 -2.554 2.788 v 0.393 h -0.87 a 0.132 0.132 0 0 0 -0.093 0.04 a 0.136 0.136 0 0 0 -0.038 0.096 v 1.603 c 0 0.075 0.059 0.136 0.132 0.136 h 0.87 v 6.364 c 0 0.075 0.058 0.135 0.131 0.135 h 1.809 c 0.072 0 0.131 -0.06 0.131 -0.135 V 11.07 h 1.69 l 2.586 6.362 c -0.294 0.669 -0.583 0.802 -0.977 0.802 c -0.319 0 -0.654 -0.098 -0.998 -0.29 a 0.133 0.133 0 0 0 -0.105 -0.01 a 0.135 0.135 0 0 0 -0.078 0.072 l -0.612 1.38 a 0.137 0.137 0 0 0 0.056 0.175 a 3.733 3.733 0 0 0 1.932 0.508 c 1.334 0 2.073 -0.638 2.724 -2.355 l 3.137 -8.317 a 0.14 0.14 0 0 0 -0.014 -0.126 a 0.131 0.131 0 0 0 -0.108 -0.06 h -1.883 a 0.132 0.132 0 0 0 -0.126 0.092 l -1.928 5.651 L 69.006 9.3 a 0.133 0.133 0 0 0 -0.124 -0.088 h -3.09 v 0.001 Z m -4.02 -0.008 h -1.809 a 0.132 0.132 0 0 0 -0.093 0.041 a 0.136 0.136 0 0 0 -0.038 0.096 v 8.094 c 0 0.075 0.06 0.135 0.132 0.135 h 1.809 c 0.072 0 0.131 -0.06 0.131 -0.135 V 9.34 a 0.136 0.136 0 0 0 -0.038 -0.096 a 0.133 0.133 0 0 0 -0.094 -0.04 Z m -0.896 -3.685 a 1.295 1.295 0 0 0 -0.919 0.393 c -0.243 0.25 -0.379 0.586 -0.377 0.937 a 1.342 1.342 0 0 0 0.377 0.938 a 1.304 1.304 0 0 0 0.92 0.393 c 0.346 -0.002 0.677 -0.143 0.92 -0.393 s 0.379 -0.587 0.377 -0.938 c 0 -0.735 -0.581 -1.33 -1.296 -1.33 h -0.002 Z m 15.918 4.49 h -0.331 v 0.434 h 0.331 c 0.165 0 0.264 -0.083 0.264 -0.216 c 0 -0.142 -0.099 -0.217 -0.264 -0.217 Z m 0.215 0.619 l 0.36 0.517 h -0.304 l -0.323 -0.474 h -0.279 v 0.474 h -0.254 v -1.37 h 0.595 c 0.31 0 0.515 0.163 0.515 0.436 a 0.412 0.412 0 0 1 -0.31 0.417 Z m -0.282 -1.31 c -0.652 0 -1.146 0.532 -1.146 1.183 c 0 0.65 0.49 1.175 1.139 1.175 c 0.652 0 1.147 -0.532 1.147 -1.183 c 0 -0.65 -0.492 -1.174 -1.14 -1.174 Z m -0.007 2.488 a 1.259 1.259 0 0 1 -0.904 -0.384 a 1.296 1.296 0 0 1 -0.368 -0.92 c 0 -0.717 0.563 -1.314 1.279 -1.314 a 1.259 1.259 0 0 1 0.903 0.384 a 1.295 1.295 0 0 1 0.369 0.921 c 0 0.717 -0.563 1.314 -1.279 1.314 Z"/>
            </svg>
        </div>
    <hr/>
    <main className="login-main">
        <h1 className="login-heading">To continue, log in to Spotify</h1>
        <button className="contained-btn" style={{background: "rgb(59, 89, 152)"}}>
            <svg fill="currentcolor">
            <path d="M 20 3 H 4 a 1 1 0 0 0 -1 1 v 16 a 1 1 0 0 0 1 1 h 8.62 v -7 h -2.35 v -2.69 h 2.35 v -2 a 3.27 3.27 0 0 1 3.49 -3.59 a 19.25 19.25 0 0 1 2.1 0.11 v 2.43 h -1.44 c -1.13 0 -1.35 0.54 -1.35 1.32 v 1.73 h 2.69 L 17.76 14 h -2.34 v 7 H 20 a 1 1 0 0 0 1 -1 V 4 a 1 1 0 0 0 -1 -1 Z"/>
            </svg>
            continue with facebook 
        </button>
        <button className="contained-btn" style={{background: "black"}}>
        <i class="fa-brands fa-apple"></i>
        {/* <svg fill="currentcolor">
            <path d="M 20 3 H 4 a 1 1 0 0 0 -1 1 v 16 a 1 1 0 0 0 1 1 h 8.62 v -7 h -2.35 v -2.69 h 2.35 v -2 a 3.27 3.27 0 0 1 3.49 -3.59 a 19.25 19.25 0 0 1 2.1 0.11 v 2.43 h -1.44 c -1.13 0 -1.35 0.54 -1.35 1.32 v 1.73 h 2.69 L 17.76 14 h -2.34 v 7 H 20 a 1 1 0 0 0 1 -1 V 4 a 1 1 0 0 0 -1 -1 Z"/>
        </svg> */}
            continue with apple 
        </button>
        <button className="contained-btn" style={{color: "#6a6a6a"}}>
        <i class="fa-brands fa-google"></i>
        {/* <svg fill="currentcolor">
            <path d="M 20 3 H 4 a 1 1 0 0 0 -1 1 v 16 a 1 1 0 0 0 1 1 h 8.62 v -7 h -2.35 v -2.69 h 2.35 v -2 a 3.27 3.27 0 0 1 3.49 -3.59 a 19.25 19.25 0 0 1 2.1 0.11 v 2.43 h -1.44 c -1.13 0 -1.35 0.54 -1.35 1.32 v 1.73 h 2.69 L 17.76 14 h -2.34 v 7 H 20 a 1 1 0 0 0 1 -1 V 4 a 1 1 0 0 0 -1 -1 Z"/>
            </svg> */}
            continue with google 
        </button>
        <button className="contained-btn" style={{color: "#6a6a6a"}}>
            continue with phone number 
        </button>
        {/* <div className="or"> */}
            <hr/>
            <span className="or-container">OR</span>
            <hr/>
        {/* </div> */}
        <form  onSubmit={handleSubmit} class="form_container">
            <div className="input_container">
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
            <div className="input_container">
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

            <p className="forgot_psw">Forgot your password?</p>

            <div className="form_bottom">
                {/* <label><input type="checkbox" label="Remember me" style={{size:"100px"}} /></label> */}
                <Checkbox label="Remember me" />
                <p>Remember me</p>
                <Button
                    className="form_bottom-button"
                    type="submit"
                    label="LOG IN"
                    style={{ color: "black", background: "#1ed760", width: "10rem" }}
                >Log in</Button>
            </div>
            <hr className="bottom-hr"/>
        </form>
        <h1 className="dont_have_account">Don't have an account?</h1>
        <Link to="/signup" style={{ borderRadius:"50rem",textDecoration:"none"}}>
            <button className="outline-btn" style={{color:"black", backgroundcolor: "gray", borderRadius:"50rem"}}>sign up for spotify</button>
        </Link>
    </main>
   </div>
   </>
)};
export default Login;