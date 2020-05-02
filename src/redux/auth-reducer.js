import {authAPI} from "../api";

const IS_LOGIN = "IS_LOGIN";
const IS_LOGOUT = "IS_LOGOUT";
const IS_REGISTER = "IS_REGISTER";

const initialState = {
    profile: []
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOGIN: {
            return {
                ...state,
                profile: action.data
            }
        }
        case IS_LOGOUT: {
            return {
                ...state,
                profile: []
            }
        }
        case IS_REGISTER: {
            return {
                ...state,
                profile: action.data
            }
        }
        default:
            return state
    }
}

// Action Creators
export const isLogin = (data) => {
    return {
        type: IS_LOGIN, data
    }
}

export const isLogout = () => {
    return {
        type: IS_LOGOUT
    }
}

export const isRegister = (data) => {
    return {
        type: IS_REGISTER, data
    }
}


// Thunks
export const setLogin = (email, password) => async (dispatch) => {
    let data = await authAPI.login(email, password);
    dispatch(isLogin(data));
}

export const setLogout = () => async (dispatch) => {
    await authAPI.logout();
    dispatch(isLogout());
}

export const setRegistration = (email, password) => async (dispatch) => {
    await authAPI.register(email, password)
        .then(response => dispatch(isRegister(response))
            .catch(response => console.log(response)));
}

export default authReducer;