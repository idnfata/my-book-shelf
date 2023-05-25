import {
  SET_ISLOGIN,
  SET_LOADING,
  SET_MESSAGE,
  SET_MESSAGE_TYPE,
  SET_TOKEN,
  SET_USER,
} from "./ListAction";
import * as jose from "jose";
// import { getAgentByEmail } from "@services/api/PPKB";
import { userLogin, userLogout } from "@services/api";

export const removeToken = async () => {
  try {
    return localStorage.removeItem("token");
  } catch (error) {
    console.log("error remove token: ", error);
    return false;
  }
};

export const loginUser = (formData) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: SET_LOADING, value: true });
    //consume api login
    userLogin(formData)
      .then(async (result) => {
        console.log("result login", result);
        if (result.status === 200) {
          
            const decoded = jose.decodeJwt(result.data.token);
            let role_name;
            let userDetail;
            switch (decoded.role) {
              case "1":
                role_name = "Admin HR"
                break;
              case "2":
                role_name = "Admin General"
                break;
              case "3":
                role_name = "Karyawan"
                break;
              case "4":
                role_name = "Admin Operational"
                break;
              case "5":
                role_name = "Admin Finance"
                break;
              case "6":
                role_name = "Admin Apa 5"
                break;
              case "7":
                role_name = "Agent"
                // const agent = await getAgentByEmail(result.data.token);
                const agent = {};
                userDetail = agent.data;
                console.log('agent', agent);
                break;
              case "8":
                role_name = "KSOP"
                break;
              default:
                break;
            }
            const userInfo = {
              client_id: decoded.client_id,
              user_id: decoded.id,
              name: decoded.name,
              email: decoded.email,
              role_id: decoded.role,
              role_name: role_name,
              detail: userDetail,
            };
            
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            localStorage.setItem("token", result.data.token);
            dispatch({ type: SET_USER, value: userInfo });
            dispatch({ type: SET_TOKEN, value: result.data.token });
            dispatch({ type: SET_ISLOGIN, value: true });
            dispatch({ type: SET_MESSAGE_TYPE, value: "success" });
            dispatch({ type: SET_MESSAGE, value: "Login Success" });
            dispatch({ type: SET_LOADING, value: false });
          
            resolve(true);
           
          

        }else {
          dispatch({ type: SET_ISLOGIN, value: false });
          dispatch({ type: SET_MESSAGE_TYPE, value: "success" });
          dispatch({ type: SET_MESSAGE, value: "Login Success" });
          dispatch({ type: SET_LOADING, value: false });
        }
      })
      .catch((err) => {
        if (err.response) {
          // console.log(err.response.data);
          dispatch({ type: SET_LOADING, value: false });
          dispatch({ type: SET_MESSAGE_TYPE, value: "error" });
          dispatch({ type: SET_MESSAGE, value: err.response.data.message });
          dispatch({ type: SET_ISLOGIN, value: false });
          reject(false);
        }
      });
  }).catch((err) => err);
};

export const getUserToken = () => {
  return localStorage.getItem("token");
};

export const getUserInfo =  () => {
  try {
    const jsonValue = localStorage.getItem("userInfo");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
    return false;
  }
};
export const removeUserToken = () => (dispatch) => {
  removeToken().then(() => {
    console.log("sukses hapus token");
    dispatch({ type: SET_USER, value: {} });
    dispatch({ type: SET_ISLOGIN, value: false });
  });
};

export const setUser = (data) => async (dispatch) => {
  try {
    const jsonValue = JSON.stringify(data);
    localStorage.setItem("userInfo", jsonValue);
    dispatch({ type: SET_USER, value: data });
  } catch (e) {
    // saving error
    console.log(e);
  }

  dispatch({ type: SET_ISLOGIN, value: true });
};

export const logoutUser = (token) => async (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: SET_LOADING, value: true });

    // console.log('token logout', token);
    // let formData = new FormData();

    // formData.append("token", token);

    userLogout(token)
      .then((result) => {
        // console.log(result);
        if (result.status === 'success' || result.status === 200) {
          // console.log(result);
          try {
            localStorage.removeItem("userInfo");
            localStorage.removeItem("token");
            dispatch({ type: SET_USER, value: null });
            dispatch({ type: SET_TOKEN, value: '' });
            dispatch({ type: SET_ISLOGIN, value: false });
            dispatch({ type: SET_LOADING, value: false });
            resolve(true);
          } catch (error) {
            console.log(error);
          }
        }
      })
      .catch((err) => {
        if (err.response) {
          // console.log(err);
          console.log(err.response.data);
          try {
            localStorage.removeItem("userInfo");
            localStorage.removeItem("token");
            dispatch({ type: SET_USER, value: null });
            dispatch({ type: SET_TOKEN, value: '' });
            dispatch({ type: SET_ISLOGIN, value: false }); 
            dispatch({ type: SET_LOADING, value: false });
            reject(false);
          } catch (error) {
            console.log(error);
          }
        }
      });
  }).catch((err) => err);
};
