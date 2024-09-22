"use client";
import {
  logIn,
  logOut,
  toggleModerator,
} from "@/redux/features/auth/auth-slice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);

  const onClickLogIn = () => {
    dispatch(logIn(username));
  };

  const onClickLogOut = () => {
    dispatch(logOut());
  };

  const onClickToggle = () => {
    dispatch(toggleModerator());
  };

  return (
    <div className="flex flex-col w-fit">
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <button onClick={onClickLogIn}>Log In</button>
      <button onClick={onClickLogOut}>Log Out</button>
      {isAuth && (
        <button onClick={onClickToggle}>Toggle Moderator Status</button>
      )}
    </div>
  );
};

export default LogIn;
