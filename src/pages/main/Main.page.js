import React, { useEffect } from "react";

import axios from "axios";

import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";

import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../redux/Modal/modal.actions";
import { rovers } from "../../redux/Rovers/rovers.actions";

import "./Main.styles.scss";
import AddRoverContainer from "../../containers/AddRover/AddRover";

const MainPage = () => {
  const dispatch = useDispatch();
  // const [roversList, setRoversList] = useState([]);
  const roversList = useSelector((state) => state.rovers.rovers);

  const showModal = useSelector((state) => state.modal.toggleModal);

  const hideModal = () => {
    dispatch(toggleModal());
  };

  useEffect(() => {
    axios
      .get("http://localhost:4444/rovers")
      .then((res) => {
        dispatch(rovers(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);
  return (
    <>
      {showModal && (
        <Modal onClick={hideModal}>
          <AddRoverContainer />
        </Modal>
      )}
      <div className='grid'>
        {roversList &&
          roversList.length > 0 &&
          roversList.map((rover, index) => <Card key={index} {...rover} />)}
      </div>
    </>
  );
};

export default MainPage;
