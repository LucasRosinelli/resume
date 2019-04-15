import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
        <React.Fragment>
            <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        {/*
                        <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                        <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                        <li><a className="smoothscroll" href="#contact">Contact</a></li>
                        */}
                    </ul>
                </nav>
                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">{resumeData.shortName}</h1>
                        <h3>{resumeData.roleDescription}</h3>
                        <hr />
                        <ul className="social">
                            <li><a target="LucasRosinelliLinkedIn" href={resumeData.contact.linkedIn}><i className="fab fa-linkedin" /></a></li>
                            <li><a target="LucasRosinelliFacebook" href={resumeData.contact.facebook}><i className="fab fa-facebook" /></a></li>
                            <li><a target="LucasRosinelliInstagram" href={resumeData.contact.instagram}><i className="fab fa-instagram" /></a></li>
                            <li><a target="LucasRosinelliGitHub" href={resumeData.contact.github}><i className="fab fa-github" /></a></li>
                            <li><a target="LucasRosinelliWhatsApp" href={"https://api.whatsapp.com/send?phone=" + resumeData.contact.phone.unformatted} title={"Contact me via WhatsApp: " + resumeData.contact.phone.display}><i className="fab fa-whatsapp" /></a></li>
                            <li><a href={"tel:+" + resumeData.contact.phone.unformatted} title={"Call me: " + resumeData.contact.phone.display}><i className="fa fa-phone" /></a></li>
                            <li><a href={"mailto:" + resumeData.contact.email} title={"Email me: " + resumeData.contact.email}><i className="fa fa-envelope" /></a></li>
                            <li><a href={"skype:" + resumeData.contact.skype + "?chat"} title={"Contact me via Skype: " + resumeData.contact.email}><i className="fab fa-skype" /></a></li>
                        </ul>
                    </div>
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                </p>
            </header>
        </React.Fragment>
    );
  }
}