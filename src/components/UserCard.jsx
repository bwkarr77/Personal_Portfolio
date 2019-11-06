import React from "react";
import "./cardStyle.css";

const UserCard = props => {
  console.log(props.user);
  const {
    name,
    login,
    location,
    html_url,
    followers,
    following,
    avatar_url,
    bio,
    id
  } = props.user;

  function toggleGit() {
    let gitChart = document.getElementById(`${id}`);
    let butMore = document.getElementById(`${id}_More`);
    let butLess = document.getElementById(`${id}_Less`);
    let controlArr = [gitChart, butMore, butLess];
    for (let i = 0; i < controlArr.length; i++) {
      if (controlArr[i].style.display === "none") {
        controlArr[i].style.display = "block";
      } else {
        controlArr[i].style.display = "none";
      }
    }
  }

  return (
    <div className="card-container">
      <section className="top">
        <img className="user-img" src={avatar_url} alt="User pic" />
        <div className="user-content">
          <h2>Name: {name}</h2>
          <h3>Username: {login}</h3>
          <p>Location: {location}</p>
          <a href={html_url}>See my page...</a>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
          <p>Bio: {bio}</p>
        </div>
      </section>
      <section className="bottom">
        <img
          className="user-git"
          id={id}
          src={`http://ghchart.rshah.org/${login}`}
          alt={`${id}'s image`}
          style={{ display: "none" }}
        />
      </section>
      <button
        onClick={toggleGit}
        className="button-open"
        id={`${id}_More`}
        style={{ display: "block" }}
      >
        More
      </button>
      <button
        onClick={toggleGit}
        className="button-close"
        id={`${id}_Less`}
        style={{ display: "none" }}
      >
        Less
      </button>
    </div>
  );
};

export default UserCard;
