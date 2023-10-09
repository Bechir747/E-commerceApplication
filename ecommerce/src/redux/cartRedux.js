import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    isFetching: false,
    error: false,
  },
  reducers: {

    getInitial:(state)=>{
      state.isFetching = false;
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    getCartStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getCartSuccess: (state, action) => {
      console.log(action.payload)
      state.isFetching = false;
      state.products = action.payload.products;
      state.quantity = action.payload.quantity;
      state.total = action.payload.total; 
    },
    getCartFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },



    deleteCartStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteCartSuccess: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteCartFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    updateCartStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateCartSuccess: (state) => {
      state.isFetching = false;
      state.products = []
      state.quantity = 0;
      state.total = 0; 
    },
    updateCartFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },


    addCartStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addCartSuccess: (state) => {
      state.isFetching = false;
    },
    addCartFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      console.log(state.products)
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      const removedProduct = state.products.find(cartItem => cartItem._id === action.payload._id);
      const count = state.products.reduce((accumulator, currentValue) => {
        if (currentValue._id === removedProduct._id) {
          return accumulator + 1;
        } else {
          return accumulator;
        }
      }, 0);
    
      if (removedProduct) {
        const updatedProducts = state.products.filter(cartItem => cartItem._id !== action.payload._id);
        const updatedTotal = state.total - (removedProduct.price * removedProduct.quantity) * count;
    
        return {
          ...state,
          quantity: state.quantity - count,
          products: updatedProducts,
          total: updatedTotal,
        };
      }
    
      return state;
    },
    
  },
});

export const { getInitial,addProduct , removeProduct, addCartFailure, addCartSuccess, addCartStart, getCartFailure, getCartStart, getCartSuccess, updateCartStart, updateCartFailure, updateCartSuccess} = cartSlice.actions;
export default cartSlice.reducer;