import React, { Component } from 'react';
import resumeData from '../../resumeData';
export default class About extends Component {
  render() {
    return (
        <React.Fragment>
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src="images/resume-profile.png" alt="Lucas Rosinelli" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>
                            In my spare time I love to
                            ... <em>coding</em> ... watch movies
                            ... <em>coding</em> ... read books
                            ... <em>coding</em> ... play soccer
                            ... <em>coding</em> ... assemble jigsaw puzzles
                            ... <em>coding</em> ... play videogames
                            ... last but not least, <em>coding</em>.
                        </p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span className={"flag-icon flag-icon-br"}></span> <span>{resumeData.shortName}</span><br />
                                    <span className={"flag-icon flag-icon-" + resumeData.contact.currentLocationCountry}></span> <span>{resumeData.contact.currentLocation}</span><br />
                                    <a target="LucasRosinelliWhatsApp" href={"https://api.whatsapp.com/send?phone=" + resumeData.contact.phone.unformatted} title={"Contact me via WhatsApp: " + resumeData.contact.phone.display}><i className="fab fa-whatsapp" /></a> <a href={"tel:+" + resumeData.contact.phone.unformatted} title={"Call me: " + resumeData.contact.phone.display}><i className="fa fa-phone" /></a> <span>{resumeData.contact.phone.display}</span><br />
                                    <a href={"mailto:" + resumeData.contact.email} title={"Email me: " + resumeData.contact.email}><i className="fa fa-envelope" /></a> <span>{resumeData.contact.email}</span><br />
                                    <a href={"skype:" + resumeData.contact.skype + "?chat"} title={"Contact me via Skype: " + resumeData.contact.email}><i className="fab fa-skype" /></a> <span>{resumeData.contact.skype}</span>
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a target="LucasRosinelliResume" href="resume.pdf" className="button"><i className="fa fa-download" />Download Resume</a>
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