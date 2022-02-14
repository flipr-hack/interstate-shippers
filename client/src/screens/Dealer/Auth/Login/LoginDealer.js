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
import { signinClient } from "../../../../actions/authClient";
const initialState = {
  name: "",
  userName: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
  natureOfMaterial: "",
  weightOfMaterial: "",
  quantityOfMaterial: "",
  sourceState: "",
  sourceCity: "",
};

const LoginDealer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formDataClient, setFormDataClient] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signinClient(formDataClient, history));
  };
  const handleChange = (e) => {
    setFormDataClient({ ...formDataClient, [e.target.name]: e.target.value });
  };

  const [text, setText] = React.useState("password");

  return (
    <div className="login-driver">
      <AuthHeading />
      <form action="" className="auth-box" onSubmit={handleSubmit}>
        <div className="form-title">Login as Dealer</div>
        <div className="login-details">
          <div className="input-structure">
            <label>Email</label>
            <div className="input-icon">
              <PersonIcon />
            </div>
            <input
              onChange={handleChange}
              name="email"
              type="text"
              placeholder="eg. pratik621"
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
          <Link to="/dealer/signup">SignUp</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginDealer;
