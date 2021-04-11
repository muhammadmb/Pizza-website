import React from 'react';
import './IntroStyle.css';
import background from '../../Images/Intro.jpg';
import Navbar from '../Navbar/Navbar';

const Intro = () => {
    return (
        <div className="IntroContainer" style={{ background: `url(${background})` }}>
            <Navbar />
            <div className="content">
                <div className="items">
                    <h1>Greatest Pizza ever</h1>
                    <p>Ready in 60 secondes</p>
                    <button>Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default Intro;
