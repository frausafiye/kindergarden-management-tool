import axios from "axios";
import { MyContext } from "../Container";
import { useContext, useEffect, useReducer } from "react";

const ACTIONS = {
  API_REQUEST: "api_request",
  FETCH_DATA: "fetch_data",
  ERROR: "error",
};
const initialState = { data: [], loading: true, error: null };
const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.API_REQUEST:
      return { ...state, data: [], loading: true, error: null };
    case ACTIONS.FETCH_DATA:
      return { ...state, data: payload, loading: false };
    case ACTIONS.ERROR:
      return { ...state, data: [], loading: false, error: payload };
    default:
      return state;
  }
};

export default function useFetch({ url }) {
  const { authCheckHandler } = useContext(MyContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (url !== "") {
      dispatch({ type: ACTIONS.API_REQUEST });
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASE_URL}/${url}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
        .then((result) => {
          dispatch({ type: ACTIONS.FETCH_DATA, payload: result.data });
        })
        .catch((err) => {
          console.log(err);
          dispatch({ type: ACTIONS.ERROR, payload: err });
          authCheckHandler(err);
        });
    }
  }, [url, authCheckHandler]);

  return state;
}
