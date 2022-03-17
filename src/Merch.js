import React, { Component } from "react";
import apparel from './static/apparel.jpg';
import gear from './static/board.jpg';
import souv from './static/souvenirs.jpg';
import towel from './static/towels.jpg';
import bev from './static/drinks1.jpg';
import './merch.css'


class Merch extends Component {
    render() {
        return(
            <div id="items">
                <img className="merchandise" src={apparel} alt="beach outfit"/>
                <img className="merchandise" src={gear} alt="boogie board"/>
                <img className="merchandise" src={souv} alt="souvenir magnets"/>
                <img className="merchandise" src={towel} alt="beach towels stacked"/>
                <img className="merchandise" src={bev} alt="soda bottles"/>
            </div>
        );
    }
}

export default Merch;