import createService from "./provider";

const serviceConfig = {
  getCars: {
    url: "/cars",
    method: "GET",
    authRequired: false
  }
};

const services = createService(serviceConfig);

export default services;
