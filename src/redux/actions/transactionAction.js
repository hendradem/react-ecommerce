import axios from "axios";

export const addToCart = (id, data) => {
  return (dispatch) => {
    axios.get(`http://localhost:2000/users/${id}`).then((res) => {
      let tempCart = res.data.cart;
      tempCart.push(data);

      axios
        .patch(`http://localhost:2000/users/${id}`, { cart: tempCart })
        .then((res) => {
          axios.get(`http://localhost:2000/users/${id}`).then((res) => {
            return dispatch({
              type: "LOGIN",
              payload: res.data,
            });
          });
        });
    });
  };
};

export const deleteCart = (userID, productID) => {
  return (dispatch) => {
    axios.get(`http://localhost:2000/users/${userID}`).then((res) => {
      let tempCart = res.data.cart;
      tempCart.splice(productID, 1);

      axios
        .patch(`http://localhost:2000/users/${userID}`, { cart: tempCart })
        .then(() => {
          axios.get(`http://localhost:2000/users/${userID}`).then((res) => {
            return dispatch({
              type: "LOGIN",
              payload: res.data,
            });
          });
        });
    });
  };
};

export const addToOrder = () => {};

export const addToWishlist = (userID, productID) => {
  return (dispatch) => {
    axios.get(`http://localhost:2000/users/${userID}`).then((res) => {
      let tempCart = res.data.cart;
      tempCart.splice(productID, 1);

      axios
        .patch(`http://localhost:2000/users/${userID}`, { cart: tempCart })
        .then(() => {
          axios.get(`http://localhost:2000/users/${userID}`).then((res) => {
            return dispatch({
              type: "LOGIN",
              payload: res.data,
            });
          });
        });
    });
  };
};
