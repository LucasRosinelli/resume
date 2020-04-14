import React, { Component } from 'react';
export default class Resume extends Component {
    render() {
        let resumeData = this.props.resumeData;
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
                                </div>
                            </div>
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Escola Técnica Estadual "Dr. Adail Nunes da Silva"</h3>
                                    <p className="info">Information Technology Technician <span>•</span> <em className="date">December 2003</em></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row work">
                        <div className="three columns header-col">
                            <h1><span>Work</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            {this.createWorkExperiences(resumeData)}
                        </div>
                    </div>
                    <div className="row freelance">
                        <div className="three columns header-col">
                            <h1><span>Freelance</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Track Inspection</h3>
                                    <h5>Metrô SP - Companhia do Metropolitano de São Paulo</h5>
                                    <h6><span className={"flag-icon flag-icon-br"}></span> São Paulo, SP, Brazil</h6>
                                    <p className="info">Full stack developer <span>•</span> <em className="date">November 2017 - December 2018</em></p>
                                    <p>Partner: <a target="LucasRosinelliExternal" href="https://www.linkedin.com/in/jackson-fonteles/">Jackson Fonteles</a></p>
                                    <p>
                                        {/*
                                        Metrô SP is one of the rapid transit companies in the city of São Paulo, SP, Brazil. It serves more than 4.3 million users daily. It's fundamental that a company which affects too many users operates properly and securely.
                                        Track Inspection manages and supports operational maintenance registrations.
                                        Due to complex calculations based on previous on-site registrations by operational team, managers face and get a sort of reports.
                                        These reports contain rail's situations and action that should be done: replace a rail, reinspect it, keep it on radar and so on. All based on score for each evaluation along time.
                                        It's a critical system for both company and end-users.
                                        As it is an online application with responsive layout, operational team doesn't need anymore papers to register collected data: a mobile phone connected to Metrô SP intranet is sufficient. These characteristics improved their efficiency and time spent.
                                        */}
                                        &nbsp;
                                    </p>
                                </div>
                            </div>
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Quasar System</h3>
                                    <h5>Sancilio &amp; Company</h5>
                                    <h6><span className={"flag-icon flag-icon-us"}></span> Riviera Beach, FL, United States</h6>
                                    <p className="info">Full stack developer <span>•</span> <em className="date">September 2016 - April 2017</em></p>
                                    <p>Partner: <a target="LucasRosinelliExternal" href="https://www.linkedin.com/in/gustavonucci/?locale=en_US">Gustavo Nucci</a></p>
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
                            {this.createSkills(resumeData)}
                        </div>
                    </div>
                    <div className="row volunteer">
                        <div className="three columns header-col">
                            <h1><span>Volunteer</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Multimedia Operator</h3>
                                    <p className="info">Morumbi Baptist Church <span>•</span> <em className="date">January 2018 - February 2019</em></p>
                                    <p>
                                        &nbsp;
                                    </p>
                                </div>
                            </div>
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Engaged Couple Mentoring</h3>
                                    <p className="info">Morumbi Baptist Church <span>•</span> <em className="date">January 2018 - February 2019</em></p>
                                    <p>
                                        &nbsp;
                                    </p>
                                </div>
                            </div>
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Education Secretary and Resources Coordinator</h3>
                                    <p className="info">Lapa Presbyterian Church <span>•</span> <em className="date">January 2017 - December 2017</em></p>
                                    <p>
                                        &nbsp;
                                    </p>
                                </div>
                            </div>
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Education Assistant Professor</h3>
                                    <p className="info">Lapa Presbyterian Church <span>•</span> <em className="date">January 2012 - December 2013</em></p>
                                    <p>
                                        &nbsp;
                                    </p>
                                </div>
                            </div>
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Deacon</h3>
                                    <p className="info">Lapa Presbyterian Church <span>•</span> <em className="date">April 2010 - March 2015</em></p>
                                    <p>
                                        &nbsp;
                                    </p>
                                </div>
                            </div>
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Multimedia Operator</h3>
                                    <p className="info">Lapa Presbyterian Church <span>•</span> <em className="date">August 2007 - December 2012</em></p>
                                    <p>
                                        &nbsp;
                                    </p>
                                </div>
                            </div>
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Board Member</h3>
                                    <p className="info">UMP São Paulo Project <span>•</span> <em className="date">March 2007 - July 2012</em></p>
                                    <p>
                                        &nbsp;
                                    </p>
                                </div>
                            </div>
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Private 2nd Class</h3>
                                    <p className="info">Brazilian Army - Military Service <span>•</span> <em className="date">March 2004 - December 2004</em></p>
                                    <p>
                                        &nbsp;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
    createWorkExperiences = (resumeData) => {
        let workExperienceRows = [];

        for (let i = 0; i < resumeData.resume.workExperiences.length; i++) {
            let workExperience = resumeData.resume.workExperiences[i];
            let description = [];
            if (workExperience.description) {
                description.push(<p key={i + "-description"}>{workExperience.description}</p>);
            }
            let dutiesAchievements = [];
            if (workExperience.duties.length === 0 && workExperience.achievements.length === 0) {
                dutiesAchievements.push(<p key={i + "-dutiesAchievements"}>&nbsp;</p>);
            }
            else {
                let duties = [];
                for (let j = 0; j < workExperience.duties.length; j++) {
                    duties.push(<li key={i.toString() + "-" + j.toString() + "-duties"}>{workExperience.duties[j]}</li>);
                }
                let achievements = [];
                for (let j = 0; j < workExperience.achievements.length; j++) {
                    achievements.push(<li key={i.toString() + "-" + j.toString() + "-achievements"}>{workExperience.achievements[j]}</li>);
                }
                if (duties.length > 0) {
                    dutiesAchievements.push(
                        <p key={i + "-duties"}>
                            <i>Duties</i>
                            <ul className="twelve columns">{duties}</ul>
                        </p>
                    );
                }
                if (achievements.length > 0) {
                    dutiesAchievements.push(
                        <p key={i + "-achievements"}>
                            <i>Achievements</i>
                            <ul className="twelve columns">{achievements}</ul>
                        </p>
                    );
                }
            }
            workExperienceRows.push(
                <div key={i + "-workExperience"} className="row item">
                    <div className="twelve columns">
                        <h3>{workExperience.company}</h3>
                        <h6><span className={"flag-icon flag-icon-" + workExperience.country}></span> {workExperience.location}</h6>
                        <p className="info">{workExperience.position} <span>•</span> <em className="date">{workExperience.from} - {workExperience.to}</em></p>
                        {description}
                        {dutiesAchievements}
                    </div>
                </div>
            );
        }

        return workExperienceRows;
    }
    createSkills = (resumeData) => {
        let skillRows = [];

        for (let i = 0; i < resumeData.resume.skills.length; i += 2) {
            skillRows.push(
                <div key={i + "-skill"} className="row">
                    {this.getSkill(resumeData.resume.skills[i])} {this.getSkill(resumeData.resume.skills[i + 1])}
                </div>
            );
        }

        return skillRows;
    }
    getSkill = (skill) => {
        let skillRow = [];

        if (skill) {
            skillRow.push(<div key={"skill-" + skill.nameClass} className="six columns"><div className="bars"><ul className="skills"><li><span className={"bar-expand " + skill.nameClass + " " + skill.sizeClass} /><em>{skill.name}</em></li></ul></div></div>);
        }
        else {
            skillRow.push(<div key={"skill-empty"} className="six columns">&nbsp;</div>);
        }

        return skillRow;
    }
}