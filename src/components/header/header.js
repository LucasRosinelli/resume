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
                            <li><a target="LucasRosinelliLinkedIn" href="https://br.linkedin.com/in/lucasrosinelli/en"><i className="fab fa-linkedin" /></a></li>
                            <li><a target="LucasRosinelliFacebook" href="https://www.facebook.com/lucas.rosinelli"><i className="fab fa-facebook" /></a></li>
                            <li><a target="LucasRosinelliInstagram" href="https://www.instagram.com/lucasrosinelli"><i className="fab fa-instagram" /></a></li>
                            <li><a target="LucasRosinelliBitbucket" href="https://bitbucket.org/lucasrosinelli"><i className="fab fa-bitbucket" /></a></li>
                            <li><a target="LucasRosinelliWhatsApp" href="https://api.whatsapp.com/send?phone=5511985795419" title="Contact me via WhatsApp: +55 11 98579-5419"><i className="fab fa-whatsapp" /></a></li>
                            <li><a target="LucasRosinelliPhone" href="tel:+5511985795419" title="Call me: +55 11 98579-5419"><i className="fa fa-phone" /></a></li>
                            <li><a target="LucasRosinelliEmail" href="mailto:contact@lucasrosinelli.com" title="Email me: contact@lucasrosinelli.com"><i className="fa fa-envelope" /></a></li>
                            <li><span className="highlight"><i title="Contact me via Skype: lucas.rosinelli" className="fab fa-skype" /></span></li>
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