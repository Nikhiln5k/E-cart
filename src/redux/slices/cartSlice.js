import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : 'cart',
    initialState : [], //holds more than one item
    reducers:{
        addToCart: (state,action)=>{
            state.push(action.payload)
        },

        removeFromCart: (state,action)=>{
            return state.filter(item=> item.id!==action.payload)
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer