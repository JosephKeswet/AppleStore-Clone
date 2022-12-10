import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

// Define a type for the slice state
interface CartState {
  cartQuantity:number,
  totalQuantity:number,
  totalCartPrice:number,
  cartItems:Array<string>
}

// Define the initial state using that type
const initialState: CartState = {
  cartQuantity:0,
  totalQuantity:0,
  totalCartPrice:0,
  cartItems:[]
}

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state,action) => {
        if (state.cartItems.length <= 0) {
            state.cartItems.push(action.payload); 
            state.totalQuantity += 1;    
        }else{
            const newIndex = state.cartItems.findIndex((item:any)=> item.id == action.payload.id)
            if (newIndex >= 0) {
                state.totalQuantity += 1;
                toast.success("Added same Item");
            }else{
                state.cartItems.push(action.payload); 
                toast.success("Added to cart"); 
            }
        }
       


    },
    addTotal:(state,action)=>{
      
        state.cartQuantity += 1
        state.totalCartPrice += action.payload.price
        console.log(state.cartQuantity);
    }
    
  },
})

export const { addToCart,addTotal } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart

export default cartSlice.reducer