import React from "react";

import DealerBookStatus from "../../../components/DealerBookStatus/DealerBookStatus";
import DriverSearch from "../../../components/DriverSearch/DriverSearch";
import LocalDriverTable from "../../../components/LocalDriverTable/LocalDriverTable";
import NavBar from "../../../components/NavBar/NavBar";
import "./HomeDealer.scss";

const HomeDealer = () => {
  return (
    <div className="home-dealer">
      <NavBar identity="dealer" />
      <DriverSearch />
      <DealerBookStatus />
      <LocalDriverTable />
    </div>
  );
};

export default HomeDealer;
