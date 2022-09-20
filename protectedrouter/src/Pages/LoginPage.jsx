import React, { useState,useRef, useEffect } from "react";
import {Button, Form } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
export default function LoginPage(props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const refFlag = useRef(false);
  const [errorMessage, setErrorMessage] = useState({ value: "" });
  const onSubmit = (data) => {
    console.log(data);

    //if username or password field is empty, return error message
    if (data.username === "" || data.password === "") {
      setErrorMessage((prevState) => ({
        value: "Empty username/password field",
      }));
    } else if (data.userName === "admin" && data.password === "123456") {
      refFlag.current = !refFlag.current;
    } else {
      //If credentials entered is invalid
      setErrorMessage((prevState) => ({ value: "Invalid username/password" }));
      return;
    }
    func();
  };

  const func = () => {
    props.myFunc(refFlag.current);
  };

  return (
    <>
    {props.isLoggedIn ? (
      <Navigate to="/" replace={true} />) : (<>
      <Form className="mx-5 my-3" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Controller
              control={control}
              name="userName"
              defaultValue=""
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Form.Control
                  onChange={onChange}
                  value={value}
                  ref={ref}
                  isInvalid={errors.userName}
                  placeholder="Enter User Name"
                />
              )}
            />
          </Form.Group>
  
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Controller
              control={control}
              name="password"
              defaultValue=""
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Form.Control
                  onChange={onChange}
                  value={value}
                  ref={ref}
                  isInvalid={errors.password}
                  placeholder="Enter Password"
                />
              )}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me!" />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button
              variant="info"
              type="submit"
              className=" text-center my-3"
              block
            >
              Login
            </Button>
          </div>
        </Form>
        <pre className="text-center my-1 text-danger">{errorMessage.value}</pre>
        </> )}
      
    </>
  );
}
