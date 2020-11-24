import React from 'react';
import history from"../history";
import { withRouter } from 'react-router-dom';
import "../App.css";
import imgholder from "../images/Speed_logo.png";
import dice from "../images/box.png";
import profile from "../images/Profile.png";


const Active = () => {
    return (
        <div className="active-container">
            <div className="imgholder">
                <img src={imgholder} alt=""/>
            </div>
            <h1>Welcome Shane</h1>
            <hr/>
            <h2>Your Orders ....</h2>
            <div className="bar">
                <h3 id="activetext">Active(2)</h3>
                <h3 id="completedtext">Completed</h3>
            </div>
            <div className="ordersummary">
                <div className="orderwrapper">
                    <div className="order">
                        <div className="detailwrapper">
                            <div className="boxsetting">
                                <h4>White Shirt from Hansel's</h4>
                                <h5>Summer White shirt</h5>
                                <p>Standard delivery,<br/> Tuesday 21st November</p>
                            </div>
                            <div className="price">
                                <h3>Rp.525.000</h3>
                            </div>
                        </div>    
                        <hr/>
                        <div className="trackbar">
                            <h3>Pickup in progress</h3>
                            <button onClick={() => history.push('/Details')} href="./Details.js" >Track</button>
                        </div>
                    </div>
                    <div className="order">
                        <div className="detailwrapper">
                            <div className="boxsetting">
                                <h4>Cupcake factory</h4>
                                <h5>Box of 6</h5>
                                <p>Instant delivery,<br/> 5pm today</p>
                            </div> 
                            <div className="price">
                                <h3>Rp.525.000</h3>
                            </div>  
                        </div>
                        <hr/>
                        <div className="trackbar">
                            <h3>Pickup in progress</h3>
                            <button>Track</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="otherholder">
                <img className="diceimg" src={dice} alt=""/>
                <img src={profile} alt=""/>
            </div>
        </div>
    )
}


export default withRouter(Active);

