import axios from "axios";
import {
    FAIL_USER,
    LOAD_USER,
    LOGIN_USER,
    REGISTER_USER,
    CURRENT_USER,
    LOGOUT_USER,
    GET_USERS_LOAD,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
} from "../const/user";

export const registerUser = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        const result = await axios.post("/user/register", user);
        //{user,msg,roken}
        dispatch({ type: REGISTER_USER, payload: result.data });
        history.push("/");
    } catch (error) {
        //dispatch({type: FAIL_USER, payload: error.response.data});
        const { errors, msg } = error.response.data;
        if (Array.isArray(errors)) {
            errors.forEach((err) => alert(err.msg));
        }
    }
};

export const loginUser = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        const result = await axios.post("/user/login", user); //{user,msg,roken}
        dispatch({ type: LOGIN_USER, payload: result.data });
        history.push("/");
    } catch (error) {
        const { errors, msg } = error.response.data;
        if (Array.isArray(errors)) {
            errors.forEach((err) => alert(err.msg));
        }
        //dispatch({type:FAIL_USER, payload: error.response.data});
        if (msg) {
            alert(msg);
        }
    }
};

export const current = () => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    const options = {
        headers: {
            authorization: localStorage.getItem("token"),
        },
    };
    try {
        let result = await axios.get("/user/current", options);
        //user
        dispatch({ type: CURRENT_USER, payload: result.data.user });
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data });
    }
};

export const getUsers = () => async (dispatch) => {
    dispatch({ type: GET_USERS_LOAD });
    try {
        let result = await axios.get("/user/users");
        dispatch({ type: GET_USERS_SUCCESS, payload: result.data.response });
    } catch (error) {
        dispatch({ type: GET_USERS_FAIL, payload: error });
    }
};
export const deleteUser = (id) => async (dispatch) => {
    axios
        .delete(`/user/deleteuser/${id}`)
        .then((res) => dispatch(getUsers()))
        .catch((err) => console.log(err));
};
export const logout = () => {
    return {
        type: LOGOUT_USER,
    };
};
