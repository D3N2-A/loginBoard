import React from "react";
import "./index.css";
import avatar from "../../assets/user.png";
import { Link } from "react-router-dom";
import back from "../../assets/previous.png";

const User = () => {
  return (
    <div>
      <div className="form-control">
        <div className="form-avatar">
          <img className="form-avatar-image" src={avatar} alt="" />
        </div>
        <Link to="/">
          <button className="admin-back">
            <img src={back} alt="" className="admin-back" />
          </button>
        </Link>
        <div class="form-dropdown">
          <button class="dropbtn">Name Picker</button>
          <div class="dropdown-content">
            <input type="radio" name="empName" id="1" />
            <label className="name" htmlFor="1">
              Jayesh
            </label>
            <br />
            <input type="radio" name="empName" id="2" />
            <label className="name" htmlFor="2">
              Sarthak
            </label>
            <br />
            <input type="radio" name="empName" id="3" />
            <label className="name" htmlFor="3">
              Supriya
            </label>
            <br />
            <input type="radio" name="empName" id="4" />
            <label className="name" htmlFor="4">
              Mohan
            </label>
            <br />
            <input type="radio" name="empName" id="5" />
            <label className="name" htmlFor="5">
              Parinay
            </label>
          </div>
        </div>
        <br />
        <div className="form-date">
          <label htmlFor="date" className="">
            Enter Date and Time
          </label>
          <br />
          <input type="datetime-local" name="" id="date" />
        </div>
        <div>
          <input type="submit" value="Save" className="btn solid" />
        </div>
      </div>
    </div>
  );
};

export default User;
