import React from "react";
import { MdAccountCircle } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { AiOutlineDollar } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { GoFileSubmodule } from "react-icons/go";
import { FaReceipt } from "react-icons/fa";
import { GoTasklist } from "react-icons/go";
import { IoMdHelpCircle } from "react-icons/io";

const Nav = props => {
  return (
    <div className="globalNav">
      <div className="leftNav">
        <div className="searchField">
          <input
            className="textInput"
            maxLength="2048"
            placeholder="Search"
            name="Search"
            type="text"
            title="Search"
          />
          <div className="searchIcn">
            <FaSearch />
          </div>
        </div>
      </div>
      <div className="rightNav">
        <img src="" alt=""></img>
        <a className="noti-bell navLinks" href="#profile">
          <FaBell />
        </a>
        <a className="settings navLinks" href="#profile">
          <IoIosSettings />
        </a>
        <a className="profile navLinks" href="#profile">
          <MdAccountCircle />
        </a>
      </div>
      <div className="sidenav">
        <div className="nav-logo">
          <img className="logo" src="logo.png"></img>
        </div>
        <a href="#">
          <span className="nav-icons">
            <FaHome />
          </span>
          Dashboard
        </a>
        <a className="active" href="#">
          <span className="nav-icons">
            <AiOutlineDollar />
          </span>
          Expenses
        </a>
        <a href="#">
          <span className="nav-icons">
            <GoFileSubmodule />
          </span>
          Reports
        </a>
        <a href="#">
          <span className="nav-icons">
            <FaReceipt />
          </span>
          Receipts
        </a>
        <a href="#">
          <span className="nav-icons">
            <GoTasklist />
          </span>
          Reports Approval
        </a>
        <a href="#">
          <span className="nav-icons">
            <IoMdHelpCircle />
          </span>
          Support
        </a>
      </div>
    </div>
  );
};

export default Nav;
