import React, { Component } from "react";
import store from './static/Store1.jpg';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: stretch;`;

class Home extends Component {
    render() {
        return(
            <LogoContainer>
                <img className="store" src={store} alt="Store front of Oceans"  width="75%"/>
            </LogoContainer>
        );
    }
}

export default Home;