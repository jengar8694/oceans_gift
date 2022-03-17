import React, { Component } from "react";
import bike from './static/cruiserbike.jpg';
import surry from './static/surry.jpg';
import './rentals.css';

class Rentals extends Component {
    render() {
        return (
            <div>
                <br/>
                <br/>
                <div>
                    <h2>Bike Rentals</h2>
                    <br/>
                </div>
                <br/>
                <br/>
                    <div id="rentalContainer">
                        <div id="bike">
                            <img src={bike} alt="Beach cruiser bike" />
                        </div>
                        <div>
                            <table class="rental">
                                <thead>
                                    <tr>
                                        <th>Cruiser</th>
                                        <th></th>
                                        <th>Surry</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Adult / Child</td>
                                        <td></td>
                                        <td>Small / Large</td>
                                    </tr>
                                    <tr>
                                        <td>$10 / $8</td>
                                        <td>Hourly</td>
                                        <td>$25 / $35</td>
                                    </tr>
                                    <tr>
                                        <td>$25 / $20</td>
                                        <td>Daily</td>
                                        <td>$40 / $50</td>
                                    </tr>
                                    <tr>
                                        <td>$100 / $80</td>
                                        <td>Weekly</td>
                                        <td>-------</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div id= "surry">
                            <img src={surry} alt="Surry bike"/>
                        </div>
                 </div>
             <div>
                        <p>Reserve Yours Today! Check below for availability.</p>
                 </div>
                 <div id="reservation">
                     <label for="child">Child bike:</label>
                     <input type="text" id="child" size="3" maxLength={2}/>
                     <label for="adult">Adult bike:</label>
                     <input type="text" id="adult" size="3" maxLength={2}/>   
                     <label for="sSurry">Small Surry:</label>
                     <input type="text" id="sSurry" size="3" maxLength={2}/>    
                     <label for="lSurry">Large Surry:</label>
                     <input type="text" id="lSurry" size="3" maxLength={2}/>          
                     <input type="date"/>
                     <input type="submit" value="SUBMIT"/>
                 </div>
            </div>
        );
    }
}

export default Rentals;