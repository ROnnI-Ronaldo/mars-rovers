import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/Modal/modal.actions";
import { newRover } from "../../redux/Rovers/rovers.actions";

import "./AddRover.scss";
import axios from "axios";

const AddRoverContainer = () => {
  const dispatch = useDispatch();
  const [roverName, setRoverName] = useState("");
  const [error, setError] = useState("");

  const errorTimeout = () => {
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  const cancel = () => {
    dispatch(toggleModal());
  };

  const lunchNewRover = () => {
    if (roverName) {
      axios
        .post(`https://rovers-mars.herokuapp.com/add-rover/${roverName}`)
        .then((res) => {
          dispatch(newRover(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
      cancel();
    } else {
      setError("Please add a Rover Name");
      errorTimeout();
    }
  };

  return (
    <div className='container'>
      <h1>New Rover</h1>
      <div className='lunch-rover__container'>
        {error && <h2 style={{ color: "red" }}>{error}</h2>}
        <h2>Lunch new Rover to March</h2>
        <Input
          placeholder='Rover Name'
          value={roverName}
          type='text'
          onChange={(e) => setRoverName(e.target.value)}
        />
        <div className='action-buttons'>
          <Button onClick={cancel}>Cancel</Button>
          <Button onClick={lunchNewRover}>Lunch</Button>
        </div>
      </div>
    </div>
  );
};

export default AddRoverContainer;
