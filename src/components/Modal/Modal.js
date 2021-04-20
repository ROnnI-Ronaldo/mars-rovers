import React from "react";
import BackDrop from "../BackDrop/BackDrop";

import "./Modal.scss";

const Modal = ({ children, onClick }) => {
  return (
    <>
      <BackDrop onClick={onClick} />
      <div className='modal'>{children}</div>
    </>
  );
};

export default Modal;
