import React, { useState } from "react";
import "../../../Auth.scss";
import AuthHeading from "../../../../components/Heading/AuthHeading";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import HttpsIcon from "@mui/icons-material/Https";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin } from "../../../../actions/authDriver";

const initialState = {
  name: "",
  userName: "",
  phone: "",
  age: "",
  experience: "",
  transportName: "",
  truckNumber: "",
  truckCapacity: "",
  sourceStateOne: "",
  sourceCityOne: "",
  destinationStateOne: "",
  destinationCityOne: "",
  sourceStateTwo: "",
  sourceCityTwo: "",
  destinationStateTwo: "",
  destinationCityTwo: "",
  sourceStateThree: "",
  sourceCityThree: "",
  destinationStateThree: "",
  destinationCityThree: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const LoginDriver = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);
  const [text, setText] = React.useState("password");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(formData, history));
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-driver">
      <AuthHeading />
      <form action="" className="auth-box" onSubmit={handleSubmit}>
        <div className="form-title">Login as Driver</div>
        <div className="login-details">
          <div className="input-structure">
            <label>Email</label>
            <div className="input-icon">
              <PersonIcon />
            </div>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="eg. pratik621@gmail.com"
            />
          </div>
          <div className="input-structure password">
            <label>Password</label>
            <div className="input-icon">
              <HttpsIcon />
            </div>
            <input
              onChange={handleChange}
              name="password"
              type={text}
              placeholder="*****"
            />
            <div className="eye-password">
              {text === "password" ? (
                <VisibilityIcon onClick={() => setText("text")} />
              ) : (
                <VisibilityOffIcon onClick={() => setText("password")} />
              )}
            </div>
          </div>
          <div className="submit-form">
            <Button className="button-submit" variant="contained" type="submit">
              Login
            </Button>
          </div>
        </div>
        <div className="already-account">
          New Here...
          <Link to="/driver/signup">SignUp</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginDriver;
