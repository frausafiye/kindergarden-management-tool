import { useState, useContext } from "react";
import { MyContext } from "../Container";
import axios from "axios";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
const useSendFormData = () => {
  const { authCheckHandler } = useContext(MyContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const location = useLocation();

  const handleSubmit = async (payload) => {
    setIsLoading(true);
    setError(null);

    let url = "";
    // if (type === "kg registration") {
    if (location.pathname === "kgregister") {
      //kg registration
      if (payload.kg) {
        url = `${process.env.REACT_APP_BASE_URL}/kg/register`;
      }
      //manager registration
      else {
        url = `${process.env.REACT_APP_BASE_URL}/users/managers`;
      }
    }
    // else if (type === "manager registration") {
    else if (location.pathname === "mregister") {
      url = `${process.env.REACT_APP_BASE_URL}/users/managers`;
    }
    // else if (type === "child registration") {
    else if (location.pathname === "cregister") {
      url = `${process.env.REACT_APP_BASE_URL}/child/addChild`;
    }
    //"teacher registration"
    else if (location.pathname === "tregister") {
      url = `${process.env.REACT_APP_BASE_URL}/users/teacher`;
    }

    try {
      const response = await axios({
        method: "POST",
        url: url,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        withCredentials: true,
        data: payload,
      });
      setResponseData(response.data);
    } catch (err) {
      setError(err);
      authCheckHandler(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, responseData, handleSubmit };
};

export default useSendFormData;
