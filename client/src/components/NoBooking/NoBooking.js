import React from "react";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import "./NoBooking.scss";
import NoBookingImage from "../../media/Nothing/no-booking.svg";
import { Button } from "@mui/material";

const NoBooking = (props) => {
  return (
    <div className="no-booking-history">
      <div className="no-booking-history-image">
        <img src={NoBookingImage} alt="No Booking" />
      </div>
      <Button className="no-booking-history-text">
        <Link to={`/${props.identity}/home`}>
          No Booking till date. Go to Home Page for Booking &nbsp;
          <ArrowRightAltIcon />
        </Link>
      </Button>
    </div>
  );
};

export default NoBooking;
