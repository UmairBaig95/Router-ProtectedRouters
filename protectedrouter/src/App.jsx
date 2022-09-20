import { useState } from "react";
import Navbar from "./Components/Navbar";
import { Button, Modal  } from "react-bootstrap";
import LoginPage from "./Pages/LoginPage";
import AppRoute from "./Routes/AppRoute";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => setShow(false);
  const logOut = () => {
    setisLoggedIn(false);
  };
  const receivedData = (data) => {
    if (data === true) {
      setisLoggedIn(true);
      setShow(false);
    }
  };
  return (
    <>
      <Navbar />
      {/* {isLoggedIn ? (
        <div className="d-flex justify-content-end mx-5 my-3">
          <Button variant="danger"  onClick={logOut}>
            Log Out
          </Button>
        </div>
      ) : (
        <div className="d-flex justify-content-end mx-5 my-3">
          <Button  variant="success" onClick={handleShow}>
            Log In
          </Button>
        </div>
      )} */}
      <Modal show={show}>
        <Modal.Header onClick={handleClose} closeButton>
          <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginPage myFunc={receivedData} />
        </Modal.Body>
      </Modal>
      <AppRoute myFunc={receivedData}  isLoggedIn={isLoggedIn}/>
    </>
  );
}

export default App;
