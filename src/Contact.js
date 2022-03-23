import React, { Component } from "react";
import styled from 'styled-components';

const Comments = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 10px;`;

const Input = styled.input`
    width: 30%;
    background-color:powderblue `;

const Textarea= styled.textarea`
    width: 30%;
    height: 200px;
    background-color:powderblue`;

const Button = styled.button`
    background-color:powderblue;
    border-radius:20px;
    color:navyblue;`;


const Location = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    row-gap: 10px;`;

const Details = styled.p`
    width: 50%;`;


class Contact extends Component {
    render() {
        return(
            <div>
                <div>
                    <Comments>
                        <label for="email">Email</label>
                        <Input type="text" id="email" size="15" maxLength="30"/>
                        <label for="subject">Subject</label>
                        <Input type="text" id="subject" size="15" maxLength="30"/>
                        <Textarea wrap="virtual" id="comments" rows="3"col="10" maxLength="100"/>
                        <br/>
                        <Button>SUBMIT</Button>
                    </Comments>
                </div>
                <Location>
                    <Details>757-122-4562</Details>
                    <br/>
                    <Details>3212 Atlantic Ave. Virginia Beach, VA 32451</Details>
                </Location>
            </div>
        );
    }
}

export default Contact;