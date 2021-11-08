import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
// import { useNavigate } from "react-router-dom";
import userAction from '../../redux/actions/user.action';

const ProfilePage = () => {

    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(userAction.getCurrentUser());
    })

    const currentUser = useSelector(state => state.users.currentUser)
    console.log("current user", currentUser)
    // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    // if (!isAuthenticated) {
    //   console.log("isAuthenticated", isAuthenticated);
    //   navigate("/login");
    // }
    return (
        <div className="wrapper">
            {currentUser && (
                <div>
                    <h1>Account Information</h1>
                    <h3>Name: {currentUser.name}</h3>
                    <h3>Email: {currentUser.email}</h3>
                </div>
            )}
        </div>
    )
}

export default ProfilePage