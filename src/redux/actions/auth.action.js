import * as types from "../constants/auth.constant";
import api from "../../apiService";

const authAction = {};

authAction.register =
  ({ name, email, password }) =>
  async (dispatch) => {
    try {
      dispatch({ type: types.POST_REGISTER_REQUEST });
      const res = await api.post("/auth/register", { name, email, password });
        dispatch({type: types.POST_REGISTER_SUCCESS})
    } catch (err) {
        console.log(err);
        dispatch({type: types.POST_REGISTER_FAIL})
    }

    };
        

authAction.login =  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch({ type: types.POST_LOGIN_REQUEST });
      const res = await api.post("/auth/login", { email, password });
      console.log("logged in as", res.data.data.user)
        dispatch({ type: types.POST_LOGIN_SUCCESS, payload: res.data.data.user })
        api.defaults.headers.common["authorization"]= "Bearer " + res.data.data.accessToken
        localStorage.setItem("token", res.data.data.accessToken)
    } catch (err) {
        console.log(err);
        dispatch({type: types.POST_LOGIN_FAIL})
    }
        };

authAction.logout = () => async (dispatch) => {
  try {
    dispatch({ type: types.PUT_LOGOUT_REQUEST, payload: null });
    const res = await api.put("auth/login");
    dispatch({ type: types.PUT_LOGOUT_SUCCESS, payload: res.data.data.user });
    api.defaults.headers.common["authorization"] = "";
    localStorage.removeItem("token", res.data.data.accessToken)
    // toastAction.success("Log out successfully!");
  } catch (err) {
    console.log(err)
    dispatch({ type: types.PUT_LOGOUT_FAIL, payload: err });
  }
};

export default authAction;