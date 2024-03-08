import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice ({

    
    name:"cart",
    initialState:{
        products:[]
    },

    reducers:{
        addProduct: (state,action) => {
            const item = state.products.find(item=>item.id ===action.payload.id)
            if (item){
            item.quantity += action.payload.quantity;
            } else {
                state.products.push(action.payload);
            }
            
        },

        deleteProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload)
           
        },
        addOne: (state,action) => {
            const item = state.products.find(item=>item.id ===action.payload.id)
            if (item)
            item.quantity += 1
            
        },
        deleteOne: (state,action) => {
            const item = state.products.find(item=>item.id ===action.payload.id)
            if (item)
            item.quantity === 1 ? item.quantity=1: item.quantity-= 1;
    }},
})

export const {addProduct,deleteOne,addOne,deleteProduct} =cartSlice.actions;
export default cartSlice.reducer;