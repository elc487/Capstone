import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({
    name:"cart",
    initialState:{
        products:[],
        total:0
    },

    reducers:{
        addProduct: (state,action) => {
            const item = state.products.find(item=>item.id ===action.payload.id)
            if (item){
            item.quantity += action.payload.quantity;
            } else {
                state.products.push(action.payload);
            }
            state.total += action.payload.price * action.payload.quantity
        },

        deleteProduct: (state, action) => {
            console.log(action.payload)
            state.products = state.products.filter(product => product.id !== action.payload)
        },
        addOne: (state,action) => {
            const item = state.products.find(item=>item.id ===action.payload.id)
            if (item)
            item.quantity += 1
            state.total += action.payload.price
        },
        deleteOne: (state,action) => {
            const item = state.products.find(item=>item.id ===action.payload.id)
            if (item)
            item.quantity === 0 ? deleteProduct(item.id): item.quantity-= action.payload.quantity;
            state.total === 0 ? 0: state.total -= action.payload.price 
    }},
})

export const {addProduct,deleteOne,addOne,deleteProduct} =cartSlice.actions;
export default cartSlice.reducer;