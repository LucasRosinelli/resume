import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
        <div className="row">
            <div className="three columns">
                <img className="profile-pic" src="images/profilepic.jpg" alt />
            </div>
            <div className="nine columns main-col">
                <h2>About Me</h2>
                <p>Some words about me.</p>
                <div className="row">
                    <div className="columns contact-details">
                    <h2>Contact Details</h2>
                    <p className="address">
                        <span>Lucas Rosinelli</span><br />
                        <span>São Paulo/SP, Brazil</span><br />
                        <span>+55 (11) 98579-5419</span><br />
                        <span>contact@lucasrosinelli.com</span>
                    </p>
                    </div>
                    <div className="columns download">
                    <p>
                        <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                    </p>
                    </div>
                </div>
            </div>
        </div>
        </section>
      </React.Fragment>
    );
  }
}