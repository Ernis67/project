import React from 'react';
import '../Header/Header.css'
import { BsHouseDoorFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io"
import { MdTextsms } from "react-icons/md"
import { CgProfile } from "react-icons/cg"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="Header">
            <div className="logo">
                <Link><img className="logo-instagram" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/600px-Instagram_logo_2016.svg.png" alt="logo" /></Link>
            </div>
            <div className="inp-btn">
                <input type="text" placeholder="Живой поиск"></input>
                <button>Поиск</button>
            </div>
            <div className="icons">
                <div className="dom-icon">
                    <Link to="/lenta"><BsHouseDoorFill className="dom" /></Link>
                </div>
                <div className="bell-icon">
                    <Link to="/bell"><IoIosNotifications className="bell" /></Link>
                </div>
                <div className="sms">
                    <Link to="/sms"><MdTextsms className="sms" /></Link>
                </div>
                <div className="profile">
                    <Link to="/profil"><CgProfile className="profile" /></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;