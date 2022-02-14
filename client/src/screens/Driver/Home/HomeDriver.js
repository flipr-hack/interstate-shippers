import React from "react";
import BookedDealers from "../../../components/BookedDealers/BookedDealers";
import DriverTableHeading from "../../../components/DriverTable/DriverTableHeading";

import NavBar from "../../../components/NavBar/NavBar";
import OngoingDriverDelivery from "../../../components/OngoingDriverDelivery/OngoingDriverDelivery";

const HomeDriver = () => {
  return (
    <div>
      <NavBar identity="driver" />
      <br />
      <div className="heading-status">
        <DriverTableHeading heading="List of dealers who booked you" />
      </div>
      <BookedDealers />
      <br />
      <div className="heading-status">
        <DriverTableHeading heading="Ongoing Deliveries" />
      </div>
      <OngoingDriverDelivery />
    </div>
  );
};

export default HomeDriver;
