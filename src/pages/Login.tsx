import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateState } from "../store/user/userSlice";
import styled from "styled-components";
import Input from "../components/Input";

const StyledForm = styled.form``;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 0.5rem;
`;
const DefaultValues = { email: "", password: "", error: false, token: "" };
const MyForm: React.FC = () => {
  const [userInfo, setUserInfo] = useState(DefaultValues);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInfo((pre) => ({ ...pre, [event.target.name]: event.target.value }));
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!userInfo.email || !userInfo.password) {
      setUserInfo((pre) => ({ ...pre, error: true }));
      return;
    }
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    };

    fetch("http://localhost:8080/login", requestOptions)
      .then((response) => response.json())
      .then((r) => {
        if (!r.error) {
          dispatch(updateState(r));
          setUserInfo(DefaultValues);
          console.log(r);
          navigate("/");
        }
      })
      .catch((error) => console.log("error", error));
    setUserInfo((pre) => ({ ...pre, error: false }));
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        label='Email'
        type='email'
        name='email'
        value={userInfo.email}
        placeholder='Enter your email'
        onChange={handleChange}
        error={userInfo.error ? userInfo.error : undefined}
      />
      <Input
        label='Password'
        type='password'
        name='password'
        value={userInfo.password}
        placeholder='Enter your password'
        onChange={handleChange}
        error={userInfo.error ? userInfo.error : undefined}
      />
      {userInfo.error && (
        <ErrorMessage>Please fill in all fields.</ErrorMessage>
      )}
      <div>
        <button type='submit'>Submit</button>
        <button onClick={() => navigate("/signup")}>Don't have an account</button>
      </div>
    </StyledForm>
  );
};

export default MyForm;
