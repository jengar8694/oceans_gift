import React, { Component } from "react";
import './contact.css';

class Contact extends Component {
    render() {
        return(
            <div>
                <div>
                    <form id="comments">
                        <label for="email">Email</label>
                        <input type="text" id="email" size="15" maxLength="30"/>
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" size="15" maxLength="30"/>
                        <textarea wrap="virtual" id="comments" rows="3"col="10" maxLength="100"/>
                        <br/>
                        <input type="submit" value="SUBMIT"/>
                    </form>
                </div>
                <div id="location">
                    <p>757-122-4562</p>
                    <br/>
                    <p>3212 Atlantic Ave. Virginia Beach, VA 32451</p>
                </div>
            </div>
        );
    }
}

export default Contact;