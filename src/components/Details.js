
import React, { Component } from 'react';
import wbox from "../images/box_2.png"

class Details extends Component {
    render() {
        return (
            <div className="mainwrapper">
                <div className="hede">
                    <img src={wbox} alt=""/>
                    <div className="headdetails">
                        <h3>OrderID: #AB234A</h3>
                        <h4>18th November. 20, 5:30</h4>
                        <h4 className="process">Pickup in progress</h4>
                    </div>
                </div>
                <div className="description">
                    <div className="master">
                        <h4>Order Description</h4>
                        <h4>Merchant</h4>
                        <h4>Amount</h4>
                        <h4>Your Details</h4>
                        <h4>Estimated delivery time</h4>
                    </div>
                    <div className="masterdetails">
                        <h4>Summer White Shirt</h4>
                        <h4>Hansel's</h4>
                        <h4>Rs500 via GoPay</h4>
                        <h4>Valmik Mirani,55D, Arkadia ResidenceKemang Jakarta 12960</h4>
                        <h4>5:30pm, 21st November Standard delivery</h4>
                    </div>
                </div>


                <div className="purchaseprotection">
                    <h4>Purchase Protection Enabled</h4>
                </div>
                <hr/>
                
                <div className="payment">
                    <ul>
                        <li>
                            <h4>Payment received via GoPay</h4>
                            <h6>18th November 5:30pm</h6>
                        </li>
                        <li>
                            <h4>Driver Assigned(Go Send, Willy Ong)</h4>
                            <h6>18th November 5:30pm</h6>
                        </li>
                        <li><h6 id="strike">Pickup completed</h6></li>
                        <li><h6 id="strike">Delivery Complete</h6></li>
                    </ul>
                </div>

            </div>
        );
    }
}



export default Details;
