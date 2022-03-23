import React, { Component } from "react";
import apparel from './static/apparel.jpg';
import gear from './static/board.jpg';
import souv from './static/souvenirs.jpg';
import towel from './static/towels.jpg';
import bev from './static/drinks1.jpg';
import styled from 'styled-components';

const Items = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    margin-left: 30px;
    justify-content: space-evenly;`;

class Merch extends Component {
    render() {
        return(
            <Items>
                <img className="merchandise" src={apparel} alt="beach outfit"/>
                <img className="merchandise" src={gear} alt="boogie board"/>
                <img className="merchandise" src={souv} alt="souvenir magnets"/>
                <img className="merchandise" src={towel} alt="beach towels stacked"/>
                <img className="merchandise" src={bev} alt="soda bottles"/>
            </Items>
        );
    }
}

export default Merch;