import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    total: 0,
    products: [],
    quantity: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    
    reducers: {
        addProduct: (state, action)=> {
            state.products.push(action.payload);
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity;
        },
        reset: (state) => {
            state = initialState;
        }
    }
})

export const {addProduct, reset} = cartSlice.actions;
export default cartSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   count: 2,
// }

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.count += 1
//     },
//     decrement: (state) => {
//       state.count -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.count += action.payload
//     },
//   },
// })

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export default counterSlice.reducer