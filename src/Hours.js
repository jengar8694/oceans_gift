import React, { Component } from "react";
import map from './static/map.jpg';
import './hours.css';

class Hours extends Component {
    render () {
        return(
            <div id="container">
                <div class="hours">
                    <h2> Hours of Operation</h2>
                    <h3>In Season ( May - September)</h3>
                    <p>Monday - Thursday    7:00am - 11:00pm</p>
                    <p>Friday - Sunday        7:00am - 3:00 am</p>
                    <h3>Off Season ( October - April )</h3>
                    <p>Monday - Thursday     10:00am - 8:00pm</p>
                    <p>Friday - Sunday        8:00am - 9:00 pm</p>
                </div>
                <div class="location">
                    <h2>Location</h2>
                    <div>
                    <img className="map" src={map} alt="google map location"/>
                    </div>
                    <div>
                        <h3>3212 Atlantic Ave. Virginia Beach, VA 32451</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hours;