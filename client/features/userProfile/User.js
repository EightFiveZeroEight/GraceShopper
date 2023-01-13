/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleUser } from "./userSlice";
import { Link, useParams } from "react-router-dom";

const User = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("This is the id", id);

  useEffect(() => {
    console.log(id);
    dispatch(fetchSingleUser(id));
  }, []);

  const user = useSelector((state) => state.users.user);

  // --------------------------
  //#region Loggined In Admin Check
  // --------------------------
  const loggedInUserType = useSelector((state) => state.auth.me.userType);
  const adminInfo = (
    <div id="adminInfo">
      <li>User password: {user.password}</li>
      <li>User email: {user.email}</li>
    </div>
  );
  //#endregion Loggined In Admin Check

  console.log(loggedInUserType);
  return (
    <div>
      {/* Ternary might have something to do with a quasi-async call */}
      <ul>
        <li>
          <h1>Welcome, {user.username}!</h1>
        </li>
        <li>Username: {user.username}</li>
        <li>User ID: {user.id}</li>
        {loggedInUserType === "admin" ? adminInfo : null}
      </ul>
    </div>
  );
};
export default User;
