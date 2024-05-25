import { useEffect, useReducer } from "react";

const initialState = {
  loading: false,
  data: [],
  error: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "fetch_start":
      return {
        loading: true,
        data: [],
        error: false,
      };

    case "fetch_success":
      return {
        loading: false,
        data: action.payload,
        error: false,
      };

    case "fetch_error":
      return {
        loading: false,
        data: [],
        error: true,
      };

    default:
      return state;
  }
};

export const useApi = api => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    try {
      dispatch({ type: "fetch_start" });

      const response = await api();
      console.log("response:", response);

      dispatch({ type: "fetch_success" });
    } catch (error) {
      dispatch({ type: "fetch_error" });
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
};
