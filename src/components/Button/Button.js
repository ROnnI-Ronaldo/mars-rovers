import React, { useRef, useEffect } from "react";

import "./Button.scss";

const Button = ({ children, onClick, styles, isDisabled }) => {
  const buttonRef = useRef();
  useEffect(() => {
    if (isDisabled) {
      buttonRef.current.disabled = true;
    }
  }, [isDisabled]);
  return (
    <button ref={buttonRef} style={{ ...styles }} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
