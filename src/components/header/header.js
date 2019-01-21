import React, { Component } from 'react';
export default class Header extends Component {
  render() {
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
                <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                <li><a className="smoothscroll" href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="row banner">
                <div className="banner-text">
                <h1 className="responsive-headline">I'm Lucas Rosinelli.</h1>
                <h3>I'm a Brazilian based <span>full stack developer</span>, <span>illustrator</span> and <span>webdesigner</span> creating awesome and effective visual identities for companies of all sizes around the globe.
                    Let's <a className="smoothscroll" href="#about">start scrolling</a> and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
                <hr />
                <ul className="social">
                    <li><a target="LucasRosinelliLinkedIn" href="https://br.linkedin.com/in/lucasrosinelli/en"><i className="fa fa-linkedin" /></a></li>
                    <li><a target="LucasRosinelliFacebook" href="https://www.facebook.com/lucas.rosinelli"><i className="fa fa-facebook" /></a></li>
                    <li><a target="LucasRosinelliInstagram" href="https://www.instagram.com/lucasrosinelli"><i className="fa fa-instagram" /></a></li>
                    <li><a target="LucasRosinelliBitbucket" href="https://bitbucket.org/lucasrosinelli"><i className="fa fa-bitbucket" /></a></li>
                    <li><a href="#" title="Contact me via Skype: lucas.rosinelli"><i className="fa fa-skype" /></a></li>
                    <li><a target="LucasRosinelliWhatsApp" href="https://api.whatsapp.com/send?phone=5511985795419" title="Contact me via WhatsApp: +55 11 98579-5419"><i className="fa fa-whatsapp" /></a></li>
                    <li><a target="LucasRosinelliPhone" href="tel:+5511985795419" title="Call me: +55 11 98579-5419"><i className="fa fa-phone" /></a></li>
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