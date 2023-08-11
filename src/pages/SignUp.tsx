import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import Input from "../components/Input";

const StyledForm = styled.form``;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 0.5rem;
`;
const DefaultValues = {
  name: "",
  email: "",
  password: "",
  photo: "",
  error: false,
};
const SignUp: React.FC = () => {
  const [userInfo, setUserInfo] = useState(DefaultValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInfo((pre) => ({ ...pre, [event.target.name]: event.target.value }));
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!userInfo.email || !userInfo.password || !userInfo.email) {
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

    fetch("http://localhost:8080/users", requestOptions)
      .then((response) => response.json())
      .then((r) => {
        if (!r.error) {
          setUserInfo(DefaultValues);
          console.log(r);
        }
      })
      .catch((error) => console.log("error", error));
    setUserInfo((pre) => ({ ...pre, error: false }));
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        label='Name'
        type='text'
        name='name'
        value={userInfo.name}
        placeholder='Enter your name'
        onChange={handleChange}
        error={userInfo.error ? userInfo.error : undefined}
      />
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
      <Input
        label='Photo'
        type='text'
        name='photo'
        value={userInfo.photo}
        placeholder='Enter your photo link'
        onChange={handleChange}
        error={userInfo.error ? userInfo.error : undefined}
      />
      {userInfo.error ? (
        <ErrorMessage>Please fill in all fields.</ErrorMessage>
      ) : (
        ""
      )}
      <button type='submit'>Submit</button>
    </StyledForm>
  );
};

export default SignUp;
