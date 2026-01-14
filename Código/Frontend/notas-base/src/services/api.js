import axios from "axios";

const instanciaAxios = {
  axiosBase: axios.create({
    headers:{
      Accept:'application/json',
    },
    withCredentials: true,
    withXSRFToken: true,
    baseURL: "http://localhost:8000/api",
  }),

  axiosCSRF: axios.create({
    withCredentials: true,
    withXSRFToken: true,
    baseURL: "http://localhost:8000/sanctum/csrf-cookie",
  }),
};

export default instanciaAxios;
