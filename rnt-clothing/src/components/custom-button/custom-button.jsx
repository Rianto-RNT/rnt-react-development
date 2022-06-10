import React from "react";

// import { CustomButtonContainer } from "./custom-button.styles";

import '../../assets/scss/custom-button.style.scss'

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

// // Using Styled-component library
// const CustomButton = ({ children, ...props }) => (
//   <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
// );

export default CustomButton;
