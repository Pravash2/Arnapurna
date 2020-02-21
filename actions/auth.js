import axios from "axios";
import { GET_PHONE_NO } from "./types";
import url from "../key";

const rootUrl = url.url;

export const getPhoneNo = data => dispatch => {
  axios
    .post(`${rootUrl}/api/v1/checkphonenumber/`, data)
    .then(res =>
      dispatch({
        type: GET_PHONE_NO,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PHONE_NO,
        payload: null
      })
    );
};
