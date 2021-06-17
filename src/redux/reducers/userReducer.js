const INITIAL_STATE = {
  id: "",
  username: "",
  password: "",
  role: "",
  errorLogin: false,
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
      };
    case "ERROR_LOGIN":
      return {
        ...state,
        errorLogin: true,
      };
    case "LOG_OUT":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default userReducer;
