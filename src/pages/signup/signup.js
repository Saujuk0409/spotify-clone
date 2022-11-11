import { useState } from "react";
import Joi from "joi";
import { Link } from "react-router-dom";
import passwordComplexity from "joi-password-complexity";
import TextField from "../../components/inputs/TextFeild/index";
import Select from "../../components/inputs/Select/Select";
import Radio from "../../components/inputs/Radio/Radio";
import Checkbox from "../../components/inputs/checkbox/index";
import Button from "../../components/Button";
import logo from "../../assets/img/black_logo.svg";
import "./signup.css";

const months = [
  { name: "January", value: "01" },
  { name: "February", value: "02" },
  { name: "March", value: "03" },
  { name: "Apirl", value: "04" },
  { name: "May", value: "05" },
  { name: "June", value: "06" },
  { name: "July", value: "07" },
  { name: "Augest", value: "08" },
  { name: "September", value: "09" },
  { name: "October", value: "10" },
  { name: "November", value: "11" },
  { name: "December", value: "12" },
];

const genders = ["male", "female", "non-binary"];

const SignUp = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    month: "",
    year: "",
    date: "",
    gender: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputState = (name, value) => {
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleErrorState = (name, value) => {
    value === ""
      ? delete errors[name]
      : setErrors(() => ({ ...errors, [name]: value }));
  };

  const schema = {
    email: Joi.string().email({ tlds: false }).required().label("Email"),
    password: passwordComplexity().required().label("Password"),
    name: Joi.string().min(5).max(10).required().label("Name"),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      console.log(data);
    } else {
      console.log("please fill out properly");
    }
  };

  return (
    <div className="login-container">
      <div className="su-logo">
        <img src={logo} alt="logo" />
      </div>
      <main className="login-main">
        <h1 className="su-heading">Sign up for free to start listening.</h1>
        {/* <Button
          label="Sign up with Facebook"
          style={{ background: "#1877f2", color: "white" }}
        /> */}
		<button className="su-contained-btn" style={{background: "rgb(59, 89, 152)"}}>
            <svg fill="currentcolor">
            <path d="M 20 3 H 4 a 1 1 0 0 0 -1 1 v 16 a 1 1 0 0 0 1 1 h 8.62 v -7 h -2.35 v -2.69 h 2.35 v -2 a 3.27 3.27 0 0 1 3.49 -3.59 a 19.25 19.25 0 0 1 2.1 0.11 v 2.43 h -1.44 c -1.13 0 -1.35 0.54 -1.35 1.32 v 1.73 h 2.69 L 17.76 14 h -2.34 v 7 H 20 a 1 1 0 0 0 1 -1 V 4 a 1 1 0 0 0 -1 -1 Z"/>
            </svg>
            Sign up with facebook 
        </button>
		<button className="su-contained-btn" style={{color: "#6a6a6a"}}>
        <i class="fa-brands fa-google"></i>
            Sign up with google 
        </button>
        <p className="su-or_container">or</p>
        <form onSubmit={handleSubmit} className="su-form_container">
          <h2 className="su-form_heading">Sign up with your email address</h2>
          <div className="su-input_container1">
            <TextField
              label="What's your email?"
              placeholder="Enter your email"
              name="email"
              handleInputState={handleInputState}
              schema={schema.email}
              handleErrorState={handleErrorState}
              value={data.email}
              error={errors.email}
              required={true}
            />
          </div>
          <div className="su-input_container">
            <TextField
              label="Create a password"
              placeholder="Create a password"
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
          <div className="su-input_container">
            <TextField
              label="What should we call you?"
              placeholder="Enter a profile name"
              name="name"
              handleInputState={handleInputState}
              schema={schema.name}
              handleErrorState={handleErrorState}
              value={data.name}
              error={errors.name}
              required={true}
            />
          </div>
          <div className="date_of_birth_container">
            <p>What's your date of birth?</p>
            <div className="date_of_birth">
              <div className="month">
                <Select
                  name="month"
                  handleInputState={handleInputState}
                  label="Month"
                  placeholder="Months"
                  options={months}
                  value={data.month}
                  required={true}
                />
              </div>
              <div className="date">
                <TextField
                  label="Date"
                  placeholder="DD"
                  name="date"
                  value={data.date}
                  handleInputState={handleInputState}
                  required={true}
                />
              </div>
              <div className="year">
                <TextField
                  label="Year"
                  placeholder="YYYY"
                  name="year"
                  value={data.year}
                  handleInputState={handleInputState}
                  required={true}
                />
              </div>
            </div>
          </div>
          <div
            className="su-input_container"
            style={{ backgroundColor: "white" }}
          >
            <Radio
              label="What's your gender?"
              name="gender"
              handleInputState={handleInputState}
              options={genders}
              required={true}
              style={{ backgroundColor: "transparent" }}
            />
          </div>
          <div className="su-checkbox_container">
            <Checkbox
              required={true}
              label="Share my registration data with Spotify's content providers for marketing purposes."
            />
          </div>
          <p className="terms_condition">
            By clicking on sign-up, you agree to Spotify's{" "}
            <a href="/#">Terms and Conditions of Use.</a>
          </p>
          <p className="terms_condition">
            To learn more about how Spotify collects, uses, shares and protects
            your personal data, please see{" "}
            <a href="/#">Spotify's Privacy Policy.</a>
          </p>
          <div className="su-submit_btn_wrapper">
            <Button label="Sign Up" type="submit" />
          </div>
          <p className="terms_conditionl" >
            Have an account? <Link to="/login"> Log in.</Link>
          </p>
        </form>
      </main>
    </div>
  );
};

export default SignUp;
