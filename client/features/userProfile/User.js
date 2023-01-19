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
      {/* <li className="list-item">User password: {user.password}</li> */}
      <li className="list-item">User email: {user.email}</li>
    </div>
  );
  //#endregion Loggined In Admin Check

  return (
    <div className="user-container">
      <div className="user-card">
        <ul>
          <li className="list-item">
            <h1 className="user-title">Welcome, {user.username}!</h1>
          </li>
          <li className="list-item">Username: {user.username}</li>
          <li className="list-item">User ID: {user.id}</li>
          {loggedInUserType === "admin" ? adminInfo : null}
        </ul>
      </div>
    </div>
  );
};
export default User;
