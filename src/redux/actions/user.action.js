import * as types from "../constants/user.constant";
import api from "../../apiService";
import { toast } from "react-toastify";

const userActions = {};

userActions.getCurrentUser =
  () =>
  async (dispatch) => {
    try {
      dispatch({ type: types.GET_SINGLE_USER_REQUEST });
      const res = await api.get("/users/me");
        dispatch({type: types.GET_SINGLE_USER_SUCCESS})
    } catch (err) {
        console.log(err);
        dispatch({type: types.GET_SINGLE_USER_FAIL})
    }
        };

        userActions.postReview = ({ productId, review, rating}) => {
    return async (dispatch) => {
        dispatch({type: types.POST_REVIEW_REQUEST});
        try {
            const res = await api.post(`/reviews`, {
                "productId": [productId],
                "content": review,
                "rating": rating,
          });
            dispatch({type: types.POST_REVIEW_SUCCESS});
            toast.success("Your review has been received");
        } catch (err) {
            console.log(err);
            toast.error(err.message);
            dispatch({type: types.POST_REVIEW_FAIL});
        }
    }
}

export default userActions;