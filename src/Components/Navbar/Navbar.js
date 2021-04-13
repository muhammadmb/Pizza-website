import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyle.css';
import { FaPizzaSlice } from 'react-icons/fa'

const Navbar = ({ toggel }) => {
    return (
        <div>
            <div className="nav">
                <Link className="link" to="/" >Pizza</Link>
                <div className="navIcon" onClick={toggel}>
                    <p>Menu</p>
                    <FaPizzaSlice className="bars" />
                </div>

            </div>
        </div>
    )
}

export default Navbar;
