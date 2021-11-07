import { toast } from "react-toastify";
import api from "../../apiService";
import * as types from "../constants/cart.constant"

const cartActions = {};


cartActions.addToCart = ({cartProduct}) => async (dispatch) => {
    try {
        dispatch({type: types.POST_TO_CART_REQUEST})
        let url = `/users/cart`;
        const res = await api.post(url, {
                "productId": cartProduct,
                "quantity": 1
            });
        toast.success("The product has been added to your shopping cart!")
        dispatch({ type: types.POST_TO_CART_SUCCESS})
    } catch (error) {
        console.log(error)
        dispatch({type: types.POST_TO_CART_FAIL})
    }
}

cartActions.getCart = () => async (dispatch)=> {
    try {
        dispatch({type: types.GET_CART_REQUEST})
        let url = `/users/me`;
        const res = await api.get(url);
        dispatch({type: types.GET_CART_SUCCESS, payload: res.data})
    } catch (error) {
        console.log(error)
        dispatch({type: types.GET_CART_FAIL, payload: error.message})
    }
}

cartActions.deleteCart = ({cartProductId}) => async (dispatch) => {
      try {
        dispatch({type: types.DELETE_CART_REQUEST})
        let url = `/users/cart/${cartProductId}`;
          const res = await api.delete(url);
          toast.success("The product has been removed from cart");
          dispatch(cartActions.getCart());
          dispatch({ type: types.DELETE_CART_SUCCESS })
    } catch (error) {
        console.log(error)
        dispatch({type: types.DELETE_CART_FAIL})
    }
    
}


export default cartActions;