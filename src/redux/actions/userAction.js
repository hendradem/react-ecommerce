import axios from "axios";

// user login
export const loginAction = (username, password) => {
  return (dispatch) => {
    axios
      .get(
        `http://localhost:2000/users?username=${username}&password=${password}`
      )
      .then((res) => {
        if (res.data.length === 0) {
          return dispatch({
            type: "ERROR_LOGIN",
          });
        } else {
          localStorage.setItem("userID", res.data[0].id);
          return dispatch({
            type: "LOGIN",
            payload: res.data[0], // yang dikirim ke reducer hanya object res nya aja
          });
        }
      });
  };
};

export const logoutAction = () => {
  return (dispatch) => {
    localStorage.removeItem("userID");

    return dispatch({
      type: "LOG_OUT",
    });
  };
};

export const keepLogin = (id) => {
  return (dispatch) => {
    axios.get(`http://localhost:2000/users/${id}`).then((res) => {
      return dispatch({
        type: "LOGIN",
        payload: res.data,
      });
    });
  };
};

// user registration
export const registerAction = (data) => {
  return (dispatch) => {
    axios.post("http://localhost:2000/users", data).then((res) => {
      return dispatch({
        type: "REGISTER_SUCCESS",
      });
    });
  };
};
