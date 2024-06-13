import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userList, setUserList] = useState([]);

  const [isLoggedin, setIsLoggedin] = useState(false);
  const navigate = useNavigate();

  const fetchUserList = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/users/showUsers"
      );
      setUserList(response.data);
    } catch (error) {
      console.error("Error fetching user list:", error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/user/current-user",
          {
            withCredentials: true,
          }
        );
        console.log(response.data);
        setUser(response.data);
        setIsLoggedin(true);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [isLoggedin]);

  const handleLogin = (userData) => {
    return axios
      .post("http://localhost:8000/api/user/login", userData, {
        withCredentials: true,
      })
      .then((res) => {
        setIsLoggedin(true);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.error);
        throw err; // Rethrow the error to be caught by the caller
      });
  };

  const logout = () => {
    axios
      .post(
        "http://localhost:8000/api/user/logout",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setUser(null);
        navigate("/");
        setIsLoggedin(false);
        // localStorage.removeItem("userId");
        // localStorage.removeItem("cart");
        console.log("successfully logged out");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UserContext.Provider
      value={{ userList, fetchUserList, user, isLoggedin, handleLogin, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
