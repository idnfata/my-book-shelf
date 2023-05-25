import axios from "axios";
import Swal from "sweetalert2";


export const URL_API = process.env.REACT_APP_URL_API;


const getToken = () => {
    return localStorage.getItem("token");
  };
  

export const Axios = axios.create({
  baseURL: URL_API,
  headers: {
    "Content-Type": ["text/plain", "application/json"],
    "Access-Control-Allow-Origin": "*",
  },
});

Axios.interceptors.request.use(
  (config) => {
    const tokens = getToken();
    if (tokens) {
      config.headers["Authorization"] = `Bearer ${tokens}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

export const errorHandler = (error) => {
  // console.log(error.response.data)
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: error.message,
  });
  if (error.response && error.response.data.errors) {
    //     if (error.response.status === 409) {
    //       // return new Error("Resource already exists")
    //       Swal.fire("Oops!", "Resource already exists", "error")
    //     }
    //     let strError = ""
    //     for (const err of error.response.data.errors) {
    //       strError += err.param + " : " + err.msg + "<br/>"
    //     }
    //     Swal.fire("Oops!", strError, "error")
    //     // return new Error(strError)
    //   } else if (error.response) {
    //     if(error.response.data){
    //       Swal.fire("Oops!", error.response.data.message, "error")
    //     } else {
    //       Swal.fire("Oops!", "Error", "error")
    //     }
  } else {
    return error;
  }
};

export const handleErrorInput = (error, val) => {
  let errorVar = error.filter((res) => res.name === val);
  return errorVar.length > 0 ? true : false;
};


export default { Axios, errorHandler };
