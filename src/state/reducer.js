import constants from "./constants";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case constants.GET_CARS: {
      return {
        ...state,
        cars: payload
      };
    }
    default:
      return { ...state };
  }
};

export default reducer;
