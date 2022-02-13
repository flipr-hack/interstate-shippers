import React from "react";
import "./DeliveryBox.scss";

const DeliveryBox = (props) => {
  // const [color, setColor] = React.useState("");
  return (
    <div className="delivery-box">
      <div className="product-delivery-nature">{props.natureOfMaterial}</div>
      <div className="product-delivery-number">
        {props.weightOfMaterial} Kg({props.quantityOfMaterial} pieces)
      </div>
      <div className="product-delivery-source">
        ({props.sourceState}-{props.sourceCity})
      </div>
      <img
        src="http://assets.stickpng.com/images/58f8bcf70ed2bdaf7c128307.png"
        alt=""
        style={{ width: "20px", height: "30px", marginLeft: "50px" }}
      />
      <div className="product-delivery-destination">
        ({props.destinationState}-{props.destinationCity})
      </div>
      <div className="product-delivery-driver">
        Driver Name : {props.driverName}
      </div>
      {}
      <div className="product-delivery-status">
        <div
          className={`circle content-recieved ${
            props.status === "pending" && "blue-status"
          } ${props.status === "ongoing" && "blue-status"} ${
            props.status === "delivered" && "green-status"
          } ${props.status === "cancelled" && "red-status"}`}
        ></div>
        <div
          className={`line ${props.status === "ongoing" && "blue-status"} ${
            props.status === "delivered" && "green-status"
          } ${props.status === "cancelled" && "red-status"}`}
        ></div>
        <div
          className={`circle content-route ${
            props.status === "ongoing" && "blue-status"
          } ${props.status === "delivered" && "green-status"} ${
            props.status === "cancelled" && "red-status"
          }`}
        ></div>
        <div
          className={`line ${props.status === "delivered" && "green-status"} ${
            props.status === "cancelled" && "red-status"
          }`}
        ></div>
        <div
          className={`circle content-delivered ${
            props.status === "delivered" && "green-status"
          } ${props.status === "cancelled" && "red-status"}`}
        ></div>
      </div>
    </div>
  );
};

export default DeliveryBox;
