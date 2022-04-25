import {
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNOUT,
} from "../constants/userConstants";



export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_SUCCESS:
      return { userInformation: action.payload};
    case USER_SIGNIN_FAIL:
      return { error: action.payload };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};
