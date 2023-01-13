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

  // const user = useSelector((state) => state);

  return (
    <div>
      {/* Ternary might have something to do with a quasi-async call */}
      User profile
    </div>
  );
};
export default User;
