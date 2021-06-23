const INITIAL_STATE = {
  id: "",
  username: "",
  password: "",
  role: "",
  cart: [],
  wishlists: [],
  errorLogin: false,
  errorRegister: false,
  successRegister: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        password: action.payload.password,
        role: action.payload.role,
        cart: action.payload.cart,
      };
    case "ERROR_LOGIN":
      return {
        ...state,
        errorLogin: true,
      };
    case "LOG_OUT":
      return INITIAL_STATE;
    case "REGISTER_SUCCESS":
      return {
        ...state,
        successRegister: true,
      };
    default:
      return state;
  }
};

export default userReducer;
