import React, { useState } from 'react';
import './IntroStyle.css';
import Navbar from '../Navbar/Navbar';
import SideBar from '../SideBar/SideBar';

const Intro = () => {

    const [isOpen, setISOpen] = useState(false);

    const toggel = () => {
        setISOpen(!isOpen);
    }

    return (
        <div className="IntroContainer">
            <Navbar toggel={toggel} />
            <SideBar toggel={toggel} isOpen={isOpen} />
            <div className="content">
                <div className="items">
                    <h1>Greatest Pizza ever</h1>
                    <p>Ready in 60 secondes</p>
                    <button>Place Order</button>
                </div>
            </div>
        </div >
    )
}

export default Intro;
