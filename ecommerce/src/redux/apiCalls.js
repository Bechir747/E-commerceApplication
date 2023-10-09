import { loginFailure, loginStart, loginSuccess, logOut } from "./userRedux";
import {addCartFailure, addCartSuccess, addCartStart, getCartFailure, getCartSuccess, getCartStart, updateCartStart, updateCartFailure, updateCartSuccess} from "./cartRedux";
import { publicRequest, userRequest } from "../data";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    return res.data;
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
    dispatch(logOut());
  };



  export const getCart = async (userid, dispatch) => {
    dispatch(getCartStart());
    try {
      const res = await publicRequest.get(`/carts/find/?userId=${userid}`);
      dispatch(getCartSuccess(res.data));
    } catch (err) {
      dispatch(getCartFailure());
    }
  };
  
  export const deleteCart = async (userId, dispatch) => {
    dispatch(deleteCartStart());
    try {
      const res = await userRequest.delete(`/carts/${userId}`);
      dispatch(deleteCartSuccess());
    } catch (err) {
      dispatch(deleteCartFailure());
    }
  };
  
  export const updateCart = async (userId, cart, dispatch) => {
    dispatch(updateCartStart());
    try {
      const res = await userRequest.put(`/carts/?userId=${userId}`, cart); 
      dispatch(updateCartSuccess());
    } catch (err) {
      dispatch(updateCartFailure());
    }
  };
  export const addCart = async (cart, dispatch) => {
    dispatch(addCartStart());
    try {
      const res = await publicRequest.post(`/carts`, cart);
      dispatch(addCartSuccess());
    } catch (err) {
      dispatch(addCartFailure());
    }
  };
  