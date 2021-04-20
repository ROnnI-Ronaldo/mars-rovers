import React from "react";
import { toggleModal } from "../../redux/Modal/modal.actions";

import "./Footer.scss";

import Button from "../Button/Button";

import { useDispatch } from "react-redux";

const Footer = () => {
  const dispatch = useDispatch();
  const showModal = () => {
    dispatch(toggleModal());
  };
  return (
    <div className='footer'>
      <Button onClick={showModal}>New Rover</Button>
    </div>
  );
};

export default Footer;
