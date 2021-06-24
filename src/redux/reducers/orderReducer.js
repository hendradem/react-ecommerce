const INITIAL_STATE = {
  orders: [],
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_ORDER":
      return {
        orders: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
