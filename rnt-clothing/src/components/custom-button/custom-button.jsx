import React from "react";

import "../../assets/scss/custom-button.style.scss";

const CustomButton = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
