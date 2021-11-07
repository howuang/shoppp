import React, { useEffect } from "react";
import {useDispatch} from "react-redux";
// import { useNavigate } from "react-router-dom";
import userAction from '../../redux/actions/user.action';

const ProfilePage = () => {
    const dispatch = useDispatch();
    useEffect (() => {
        dispatch(userAction.getCurrentUser());
    })
    // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    // if (!isAuthenticated) {
    //   console.log("isAuthenticated", isAuthenticated);
    //   navigate("/login");
    // }
    return (
        <div>
            This is Profile Page
        </div>
    )
}

export default ProfilePage