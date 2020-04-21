import services from "../api/services";
import constants from "./constants";

const setCars = payload => {
  return {
    payload,
    type: constants.GET_CARS
  };
};

const getCars = ({ dispatch }) => {
  //here you can show the progress bar later....

  //Get cars
  return services
    .getCars()
    .then(result => {
      dispatch(setCars(result.data));
    })
    .catch(() => {
      dispatch(setCars([]));
    })
    .finally(() => {
      //probably create a global progress bar and here you can hide it
    });
};

export { getCars };
