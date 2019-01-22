import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
        <React.Fragment>
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Universidade Presbiteriana Mackenzie</h3>
                                <p className="info">B.S. Degree in Computer Science <span>•</span> <em className="date">December 2012</em></p>
                                <p>
                                    &nbsp;
                                </p>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Escola Técnica Estadual "Dr. Adail Nunes da Silva"</h3>
                                <p className="info">Information Technology Technician <span>•</span> <em className="date">December 2003</em></p>
                                <p>
                                    &nbsp;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>NEXXYS</h3>
                                <p className="info">Full stack developer <span>•</span> <em className="date">September 2012 - Present</em></p>
                                <p>
                                    &nbsp;
                                </p>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>DIGISYSTEM</h3>
                                <p className="info">Software developer <span>•</span> <em className="date">October 2006 - August 2012</em></p>
                                <p>
                                    &nbsp;
                                </p>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Politec</h3>
                                <p className="info">Programmer <span>•</span> <em className="date">September 2004 - June 2006</em></p>
                                <p>
                                    &nbsp;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row certification">
                    <div className="three columns header-col">
                        <h1><span>Certifications</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Programming in HTML5 with JavaScript and CSS3 Specialist</h3>
                                <p className="info">Microsoft <span>•</span> <em className="date">December 2013</em></p>
                                <p>
                                    Credential ID E497-1983
                                </p>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>.NET Framework 4, Web Applications</h3>
                                <p className="info">Microsoft <span>•</span> <em className="date">September 2011</em></p>
                                <p>
                                    Credential ID D466-3157
                                </p>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>SQL Server 2008, Implementation and Maintenance</h3>
                                <p className="info">Microsoft <span>•</span> <em className="date">July 2011</em></p>
                                <p>
                                    Credential ID D432-4959
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt.
                        </p>
                        <h3>Majors</h3>
                        <div className="bars">
                            <ul className="skills">
                                <li><span className="bar-expand csharp" /><em>C#</em></li>
                                <li><span className="bar-expand netfw" /><em>.NET Framework</em></li>
                                <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
                                <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>
                                <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
                                <li><span className="bar-expand css" /><em>CSS</em></li>
                                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                                <li><span className="bar-expand jquery" /><em>jQuery</em></li>
                            </ul>
                        </div>
                        <h3>Minors</h3>
                        <div className="bars">
                            <ul className="skills">
                                <li><span className="bar-expand vbnet" /><em>VB.NET</em></li>
                                <li><span className="bar-expand netfw" /><em>.NET Framework</em></li>
                                <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
                                <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>
                                <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
                                <li><span className="bar-expand css" /><em>CSS</em></li>
                                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                                <li><span className="bar-expand jquery" /><em>jQuery</em></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
  }
}