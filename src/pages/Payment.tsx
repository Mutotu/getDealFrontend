import React, { useState } from "react";

const Payment = () => {
  const handleImageClick = () => {};

  return (
    <div>
      <h3>Your items will be delivered soon</h3>
      <img
        className={`animated-image move }`}
        src={
          "https://www.shutterstock.com/shutterstock/photos/660844210/display_1500/stock-vector-speed-box-icon-logo-design-element-660844210.jpg"
        }
        alt={"delivery"}
        onClick={handleImageClick}
      />
    </div>
  );
};

export default Payment;
