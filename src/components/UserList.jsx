import React from "react";
import UserCard from "./UserCard";

const UserList = props => {
  console.log(props.followers);
  return (
    <div>
      {props.followers.map(each => (
        <UserCard user={each} key={each.id} />
      ))}
    </div>
  );
};

export default UserList;
