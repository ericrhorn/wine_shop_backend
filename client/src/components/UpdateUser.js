import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateUser = (props) => {
  const [user, setUser] = useState([]);
  const { _id } = useParams();
  console.log("user id" + _id);
  const [updateUser, setUpdateUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    clubLevel: "",
    password: "",
    confirmPassword: "",
    isAdmin: false,
    isManager: false,
  });
  const [errs, setErrs] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/user/${_id}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => console.log(err.data));
  }, [_id]);

  return (
    <>
      {user ? (
        <div>
          <p>{user._id}</p>
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
          <p>{user.email}</p>
          <p>{user.clubLevel}</p>
        </div>
      ) : (
        <div className="m-5 flex justify-center items-center h-max">
          <div>
            <h1>User Not Found</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateUser;
