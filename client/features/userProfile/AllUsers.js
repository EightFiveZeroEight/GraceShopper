import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "./userSlice";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function AllUsers() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  const allUsers = useSelector((state) => state.users.allUsers);
  console.log(
    'this is "allUsers"',
    allUsers,
    "with a length of ",
    allUsers.length
  );

  return (
    <>
      <h1>Here we have all the users</h1>
      <ol>
        {allUsers && allUsers.length > 0 ? (
          allUsers.map((singleUser) => {
            return (
              <li>
                <Link to={{ pathname: `/users/${singleUser.id}` }}>
                  {singleUser.username}
                </Link>
              </li>
            );
          })
        ) : (
          <p>
            Something went wrong, because there aren't any users in the database
            -- INCLUDING YOU!
          </p>
        )}
      </ol>
    </>
  );
}

export default AllUsers;
