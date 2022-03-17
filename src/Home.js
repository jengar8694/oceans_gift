import React, { Component } from "react";
import store from './static/Store1.jpg';
import './home.css';

class Home extends Component {
    render() {
        return(
            <div id="store">
                <img src={store} alt="Store front of Oceans"  width="75%"/>
            </div>
        );
    }
}

export default Home;