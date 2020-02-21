import isEmpty from "../validation/is-empty";
import { SET_CURRENT_USER, GET_PHONE_NO } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case GET_PHONE_NO:
      return {
        ...state,
        isPhoneExit: action.payload
      };
    default:
      return state;
  }
}

// //Log User Out
// export const logoutUser = () => dispatch => {
//   //Remove token from localStorage
//   localStorage.removeItem("jwtToken");

//   //Remove auth header for future requests
//   setAuthToken(false);

//   //Set current user to {} which will set isAuthenticated to false
//   dispatch(setCurrentUser({}));
// };
