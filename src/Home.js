import React, { Component } from "react";
import store from './static/Store1.jpg';
import styled from 'styled-components';
import "./index.css";

const LogoContainer = styled.div`
    position: absolute;
    top: 268px;
    left: 324px;
    width: 792px;
    height: 690px;
    object-fit: cover;`;

class Home extends Component {
    render() {
        return(
            <LogoContainer>
                <img className="store" src={store} alt="Store front of Oceans"  width="792px"/>
            </LogoContainer>
        );
    }
}

export default Home;
