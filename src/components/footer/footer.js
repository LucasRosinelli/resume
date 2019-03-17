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
                            <li><a target="LucasRosinelliLinkedIn" href={resumeData.contact.linkedIn}><i className="fab fa-linkedin" /></a></li>
                            <li><a target="LucasRosinelliFacebook" href={resumeData.contact.facebook}><i className="fab fa-facebook" /></a></li>
                            <li><a target="LucasRosinelliInstagram" href={resumeData.contact.instagram}><i className="fab fa-instagram" /></a></li>
                            <li><a target="LucasRosinelliBitbucket" href={resumeData.contact.bitbucket}><i className="fab fa-bitbucket" /></a></li>
                            <li><a target="LucasRosinelliWhatsApp" href={"https://api.whatsapp.com/send?phone=" + resumeData.contact.phone.unformatted} title={"Contact me via WhatsApp: " + resumeData.contact.phone.display}><i className="fab fa-whatsapp" /></a></li>
                            <li><a href={"tel:+" + resumeData.contact.phone.unformatted} title={"Call me: " + resumeData.contact.phone.display}><i className="fa fa-phone" /></a></li>
                            <li><a href={"mailto:" + resumeData.contact.email} title={"Email me: " + resumeData.contact.email}><i className="fa fa-envelope" /></a></li>
                            <li><a href={"skype:" + resumeData.contact.skype + "?chat"} title={"Contact me via Skype: " + resumeData.contact.email}><i className="fab fa-skype" /></a></li>
                        </ul>
                        <ul className="copyright">
                            <li>© Copyright {new Date().getFullYear()} {resumeData.shortName}</li>
                            <li>Design by <a target="LucasRosinelliStyleshout" title="Styleshout" href="http://www.styleshout.com/">Styleshout</a> based on <a target="LucasRosinelliCeevee" title="Ceevee" href="https://www.styleshout.com/free-templates/ceevee/">Ceevee</a></li>
                        </ul>
                    </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
                </div>
            </footer>
        </React.Fragment>
    );
  }
}