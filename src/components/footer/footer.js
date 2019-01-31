import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
        <React.Fragment>
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            <li><a target="LucasRosinelliLinkedIn" href="https://br.linkedin.com/in/lucasrosinelli/en"><i className="fab fa-linkedin" /></a></li>
                            <li><a target="LucasRosinelliFacebook" href="https://www.facebook.com/lucas.rosinelli"><i className="fab fa-facebook" /></a></li>
                            <li><a target="LucasRosinelliInstagram" href="https://www.instagram.com/lucasrosinelli"><i className="fab fa-instagram" /></a></li>
                            <li><a target="LucasRosinelliBitbucket" href="https://bitbucket.org/lucasrosinelli"><i className="fab fa-bitbucket" /></a></li>
                            <li><a target="LucasRosinelliWhatsApp" href="https://api.whatsapp.com/send?phone=5511985795419" title="Contact me via WhatsApp: +55 11 98579-5419"><i className="fab fa-whatsapp" /></a></li>
                            <li><a target="LucasRosinelliPhone" href="tel:+5511985795419" title="Call me: +55 11 98579-5419"><i className="fa fa-phone" /></a></li>
                            <li><a target="LucasRosinelliEmail" href="mailto:contact@lucasrosinelli.com" title="Email me: contact@lucasrosinelli.com"><i className="fa fa-envelope" /></a></li>
                            <li><span className="highlight"><i title="Contact me via Skype: lucas.rosinelli" className="fab fa-skype" /></span></li>
                        </ul>
                        <ul className="copyright">
                            <li>© Copyright {new Date().getFullYear()} {resumeData.shortName}</li>
                            <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a> based on <a title="Ceevee" href="https://www.styleshout.com/free-templates/ceevee/">Ceevee</a></li>
                        </ul>
                    </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
                </div>
            </footer>
        </React.Fragment>
    );
  }
}