import React from 'react';
import { Link } from 'react-router-dom';
import './SideBarStyle.css';
import { FaTimes } from 'react-icons/fa'

const Slides = ({ isOpen, toggel }) => {
    return (
        <div className={isOpen ? "container open" : "container"} onClick={toggel}>
            <div className="icon" onClick={toggel}>
                <FaTimes className="close-icon" />
            </div>
            <div className="sidebar-menu">
                <Link to="/" className="sidebar-link">Pizzas</Link>
                <Link to="/" className="sidebar-link">Dessert</Link>
            </div>
            <div className="side-btn-wrap">
                <Link to="/" className="sidebar-route">OrderNow</Link>
            </div>
        </div>
    )
}

export default Slides;
