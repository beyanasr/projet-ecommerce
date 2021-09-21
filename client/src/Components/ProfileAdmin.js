import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileCard from "./Profile/ProfileCard";
import { getUsers } from "../JS/actions/user";
import AddProduct from "./AddProduct";
import Add from "./AddProducts";

const ProfileAdmin = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
     {/* <AddProduct/> */}
     <Add/>

      <h1>View all users registred in the website</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop: "40px",
        }}
      >
        {users
          ? users.map((el) => {
              return <ProfileCard el={el} />;
            })
          : null}
      </div>
    </div>
  );
};

export default ProfileAdmin;
