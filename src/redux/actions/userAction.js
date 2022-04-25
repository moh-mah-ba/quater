import {api} from "./config";
import {
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNOUT,
} from "../constants/userConstants";

export const signin = (email, password) => async (dispatch) => {
    try {
      const { data } = await api.post("/users/login", { email, password });
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
      localStorage.setItem("userInformation", JSON.stringify(data));
    } catch (error) {
      dispatch({ 
        type: USER_SIGNIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const signout = () => (dispatch) => {
    localStorage.removeItem("userInformation");
    dispatch({ type: USER_SIGNOUT });
  };