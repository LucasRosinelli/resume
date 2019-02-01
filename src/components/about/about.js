import React, { Component } from 'react';
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
                                    <span>Lucas Rosinelli</span><br />
                                    <span>São Paulo, SP, Brazil</span><br />
                                    <a target="LucasRosinelliWhatsApp" href="https://api.whatsapp.com/send?phone=5511985795419" title="Contact me via WhatsApp: +55 11 98579-5419"><i className="fab fa-whatsapp" /></a> <a target="LucasRosinelliPhone" href="tel:+5511985795419" title="Call me: +55 11 98579-5419"><i className="fa fa-phone" /></a> <span>+55 (11) 98579-5419</span><br />
                                    <a target="LucasRosinelliEmail" href="mailto:contact@lucasrosinelli.com" title="Email me: contact@lucasrosinelli.com"><i className="fa fa-envelope" /></a> <span>contact@lucasrosinelli.com</span><br />
                                    <span className="highlight"><i title="Contact me via Skype: lucas.rosinelli" className="fab fa-skype" /></span> <span>lucas.rosinelli</span>
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