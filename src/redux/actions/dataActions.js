import { GET_TASKS } from "../types";
import axios from "axios";

export const getTasks = () => (dispatch) => {
  axios
    .get("/tasks")
    .then((res) => {
      dispatch({
        type: GET_TASKS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
