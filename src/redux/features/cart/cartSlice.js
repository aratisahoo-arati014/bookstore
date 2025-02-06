import { createSlice } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'
import Swal  from 'sweetalert2';

const initialState = {
  cartItems: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item._id === action.payload._id);
      if(!existingItem){
        state.cartItems.push(action.payload);
        // Alert message 
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Item Added To The Cart Successfully",
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        Swal.fire({
          icon: "warning",
          title: "Item Already Added",
          // text: "Something went wrong!",
          // footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id);
    },
    clearCart: (state) => {
      state.cartItems = [];
    }
  },
})


// export the actions

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions
export default cartSlice.reducer
