import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import React from "react";
import "./topbar.css";
import {useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logout } from "../../redux/apiCalls";
import { Link } from 'react-router-dom';

export default function Topbar() {
  const user = useSelector((state) => state.user.currentUser);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const dispatch = useDispatch();
  const handleLogout = (e) =>{
      e.preventDefault();
      logout(dispatch);
    }


  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className='logo'>LE PETIT BAZAR.<ShoppingBasketIcon/></span>
        </div>
        <div className="topRight">
          
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          <div className="topbarIconContainer">
            <div className="user-account">
              <button className="user-button" onClick={toggleDropdown}>
                <AccountCircleIcon/>
              </button>
              {isDropdownOpen && (
              <div className="dropdown-menu">
                <div className="account-user">{user.username} <br /> <span style={{ fontSize: "14px" , color:"#555"}}>{user.email}</span> </div>
                <div className="menu-item" > <Link to={"/user/" + user._id} className="Link"> <PersonOutlineIcon/>   Profil </Link></div>
                <div className="menu-item" > <SettingsIcon/>   Paramètres</div>
                <div className="menu-item" onClick={(e)=>{handleLogout(e)}} > <LogoutIcon/> Se déconnecter</div>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
