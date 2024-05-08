import { useState, useContext } from "react";
import { MyContext } from "../../Container";
import axios from "axios";
const useSendFormData = () => {
  const { authCheckHandler } = useContext(MyContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async (type, payload) => {
    setIsLoading(true);
    setError(null);

    let url = "";
    // "kg registration"
    if (type === "kg registration") {
      url = `${process.env.REACT_APP_BASE_URL}/kg/register`;
    }

    // "manager registration"
    else if (type === "manager registration") {
      url = `${process.env.REACT_APP_BASE_URL}/users/managers`;
    }

    // "child registration"
    else if (type === "child registration") {
      url = `${process.env.REACT_APP_BASE_URL}/child/addChild`;
    }

    //"teacher registration"
    else {
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
