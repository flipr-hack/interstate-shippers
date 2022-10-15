import React, { useState } from "react";

// importing styles
import "../../../Auth.scss";
import AuthHeading from "../../../../components/Heading/AuthHeading";
import "./SignupDriver.scss";

// importing materail ui components
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HttpsIcon from "@mui/icons-material/Https";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AdfScannerIcon from "@mui/icons-material/AdfScanner";
// import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import NumbersIcon from "@mui/icons-material/Numbers";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ScienceIcon from "@mui/icons-material/Science";
import AgricultureIcon from "@mui/icons-material/Agriculture";

// importing components
import { Link } from "react-router-dom";
import { data } from "../../../../data/city-state";
import { state } from "../../../../data/state";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../../../../actions/authDriver";

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

const SignUpDriver = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);

  // const [screen, setScreen] = useState("1/2");
  const [text, setText] = useState("password");
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(formData, history));
    history.push("/driver/home");
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const selectState = (e) => {
    setCity(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup-driver">
      <AuthHeading />
      <form action="" className="auth-box" onSubmit={handleSubmit}>
        <div className="form-title">SignUp as Driver</div>
        {/* {screen === "1/2" ? ( */}
        <div className="signup-auth-details">
          <div className="input-structure">
            <label>Name</label>
            <div className="input-icon">
              <PersonIcon />
            </div>
            <input
              name="name"
              onChange={handleChange}
              type="text"
              placeholder="eg. Pratik Kumar"
            />
          </div>
          <div className="input-structure">
            <label>User Name</label>
            <div className="input-icon">
              <PersonIcon />
            </div>
            <input
              name="userName"
              onChange={handleChange}
              type="text"
              placeholder="eg. pratik621"
            />
          </div>
          <div className="input-structure">
            <label>Email</label>
            <div className="input-icon">
              <AlternateEmailIcon />
            </div>
            <input
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="eg. abc21@xyz"
            />
          </div>
          <div className="input-structure">
            <label>Phone</label>
            <div className="input-icon">
              <LocalPhoneIcon />
            </div>
            <input
              name="phone"
              onChange={handleChange}
              type="phone"
              placeholder="eg. xxxxxxxxxx"
            />
          </div>
          <div className="input-structure password">
            <label>Password</label>
            <div className="input-icon">
              <HttpsIcon />
            </div>
            <input
              name="password"
              onChange={handleChange}
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
          <div className="input-structure password">
            <label>Confirm Password</label>
            <div className="input-icon">
              <HttpsIcon />
            </div>
            <input onChange={handleChange} type={text} placeholder="*****" />
            <div className="eye-password">
              {text === "password" ? (
                <VisibilityIcon onClick={() => setText("text")} />
              ) : (
                <VisibilityOffIcon onClick={() => setText("password")} />
              )}
            </div>
          </div>
          {/* <div className="auth-button">
              <Button
                className="button-submit"
                variant="contained"
                onClick={() => {
                  setScreen("2 / 2");
                }}
              >
                Proceed <ArrowRightAltIcon />
              </Button>
            </div> */}
        </div>
        {/* ) : ( */}
        <div className="signup-user-details">
          <div className="input-structure">
            <label>Age (in Years)</label>
            <div className="input-icon">
              <ContactPageIcon />
            </div>
            <input
              name="age"
              onChange={handleChange}
              type="number"
              placeholder="eg. 30 "
            />
          </div>
          <div className="input-structure">
            <label>Experience (in Years)</label>
            <div className="input-icon">
              <ScienceIcon />
            </div>
            <input
              name="experience"
              onChange={handleChange}
              type="number"
              placeholder="eg. 3"
            />
          </div>
          <div className="input-structure">
            <label>Transport Name</label>
            <div className="input-icon">
              <AgricultureIcon />
            </div>
            <input
              name="transportName"
              onChange={handleChange}
              type="text"
              placeholder="eg. Mini-truck"
            />
          </div>
          <div className="input-structure">
            <label>Truck number</label>
            <div className="input-icon">
              <NumbersIcon />
            </div>
            <input
              name="truckNumber"
              onChange={handleChange}
              type="number"
              placeholder="eg. xxxxxxxx..."
            />
          </div>
          <div className="input-structure">
            <label>Truck Capacity(in Kg)</label>
            <div className="input-icon">
              <AdfScannerIcon />
            </div>
            <input
              name="truckCapacity"
              onChange={handleChange}
              type="number"
              placeholder="eg. 3"
            />
          </div>
          <div className="intrested-routes">
            <div className="intrested-routes-head">3 Intrested Routes</div>
            <div className="intrested-routes-body">
              <span>From (Route-1</span>
              <div className="input-structure select">
                <label>State</label>
                <div className="input-icon">
                  <ApartmentIcon />
                </div>
                <select
                  name="sourceStateOne"
                  onChange={handleChange}
                  id="state"
                  onChange={selectState}
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Select your option
                  </option>
                  {state.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
              </div>
              {/* <div className="map-data">{data}</div> */}
              <div className="input-structure select">
                <label>City</label>
                <div className="input-icon">
                  <EmojiTransportationIcon />
                </div>
                <select
                  name="sourceCityOne"
                  onChange={handleChange}
                  id="city"
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Select your option
                  </option>
                  {data
                    .filter((item) => item.state === city)
                    .map((item) => (
                      <option value={item.name}>{item.name}</option>
                    ))}
                </select>
              </div>
              <span>To (Route-1)</span>
              <div className="input-structure select">
                <label>State</label>
                <div className="input-icon">
                  <ApartmentIcon />
                </div>
                <select
                  name="destinationStateOne"
                  onChange={handleChange}
                  id="to-state-1"
                  onChange={selectState}
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Select your option
                  </option>
                  {state.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
              </div>
              {/* <div className="map-data">{data}</div> */}
              <div className="input-structure select">
                <label>City</label>
                <div className="input-icon">
                  <EmojiTransportationIcon />
                </div>
                <select
                  name="destinationCityOne"
                  onChange={handleChange}
                  id="cto-city-1ity"
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Select your option
                  </option>
                  {data
                    .filter((item) => item.state === city)
                    .map((item) => (
                      <option value={item.name}>{item.name}</option>
                    ))}
                </select>
              </div>
            </div>
            <div className="intrested-routes-body">
              <span>From (Route-2)</span>
              <div className="input-structure select">
                <label>State</label>
                <div className="input-icon">
                  <ApartmentIcon />
                </div>
                <select
                  name="sourceStateTwo"
                  onChange={handleChange}
                  id="from-state-2"
                  onChange={selectState}
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Select your option
                  </option>
                  {state.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
              </div>
              {/* <div className="map-data">{data}</div> */}
              <div className="input-structure select">
                <label>City</label>
                <div className="input-icon">
                  <EmojiTransportationIcon />
                </div>
                <select
                  name="sourceCityTwo"
                  onChange={handleChange}
                  id="from-city-2"
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Select your option
                  </option>
                  {data
                    .filter((item) => item.state === city)
                    .map((item) => (
                      <option value={item.name}>{item.name}</option>
                    ))}
                </select>
              </div>
              <span>To (Route-2)</span>
              <div className="input-structure select">
                <label>State</label>
                <div className="input-icon">
                  <ApartmentIcon />
                </div>
                <select
                  onChange={handleChange}
                  name="destinationStateTwo"
                  id="to-state-2"
                  onChange={selectState}
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Select your option
                  </option>
                  {state.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
              </div>
              {/* <div className="map-data">{data}</div> */}
              <div className="input-structure select">
                <label>City</label>
                <div className="input-icon">
                  <EmojiTransportationIcon />
                </div>
                <select
                  onChange={handleChange}
                  name="destinationCityTwo"
                  id="to-city-2"
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Select your option
                  </option>
                  {data
                    .filter((item) => item.state === city)
                    .map((item) => (
                      <option value={item.name}>{item.name}</option>
                    ))}
                </select>
              </div>
            </div>
            <div className="intrested-routes-body">
              <span>From (Route-3)</span>
              <div className="input-structure select">
                <label>State</label>
                <div className="input-icon">
                  <ApartmentIcon />
                </div>
                <select
                  name="sourceStateThree"
                  onChange={handleChange}
                  id="from-state-3"
                  onChange={selectState}
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Select your option
                  </option>
                  {state.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
              </div>
              {/* <div className="map-data">{data}</div> */}
              <div className="input-structure select">
                <label>City</label>
                <div className="input-icon">
                  <EmojiTransportationIcon />
                </div>
                <select
                  name="sourceCityThree"
                  onChange={handleChange}
                  id="from-city-3"
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Select your option
                  </option>
                  {data
                    .filter((item) => item.state === city)
                    .map((item) => (
                      <option value={item.name}>{item.name}</option>
                    ))}
                </select>
              </div>
              <span>To (Route-3)</span>
              <div className="input-structure select">
                <label>State</label>
                <div className="input-icon">
                  <ApartmentIcon />
                </div>
                <select
                  onChange={handleChange}
                  name="destinationStateThree"
                  id="to-state-3"
                  onChange={selectState}
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Select your option
                  </option>
                  {state.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
              </div>
              {/* <div className="map-data">{data}</div> */}
              <div className="input-structure select">
                <label>City</label>
                <div className="input-icon">
                  <EmojiTransportationIcon />
                </div>
                <select
                  name="destinationCityThree"
                  onChange={handleChange}
                  id="to-city-3"
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Select your option
                  </option>
                  {data
                    .filter((item) => item.state === city)
                    .map((item) => (
                      <option value={item.name}>{item.name}</option>
                    ))}
                </select>
              </div>
            </div>
          </div>
          <div className="submit-form" style={{ marginTop: "10px" }}>
            <Button className="button-submit" variant="contained" type="submit">
              Signup
            </Button>
          </div>

          {/* <div className="back-to-1">
              <Button
                color="error"
                onClick={() => {
                  setScreen("1/2");
                }}
              >
                <ArrowBackIcon />
                &nbsp; Go to previous part
              </Button>
            </div> */}
        </div>
        {/* )} */}
        <div className="already-account">
          Already have an account...
          <Link to="/driver/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpDriver;
