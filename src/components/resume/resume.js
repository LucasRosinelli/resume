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
                let duties = this.createWorkExperienceSection(i, "Duties", workExperience.duties);
                if (duties) {
                    dutiesAchievements.push(duties);
                }
                let achievements = this.createWorkExperienceSection(i, "Achievements", workExperience.achievements);
                if (achievements) {
                    dutiesAchievements.push(achievements);
                }
                let more = this.createWorkExperienceMoreSection(i, workExperience.more);
                if (more) {
                    dutiesAchievements.push(more);
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
    createWorkExperienceSection = (i, name, data) => {
        let sectionItems = [];
        for (let j = 0; j < data.length; j++) {
            sectionItems.push(<li key={i.toString() + "-" + j.toString() + "-" + name}>{data[j]}</li>);
        }
        if (sectionItems.length > 0) {
            return(
                <div key={i + "-" + name}>
                    <i>{name}</i>
                    <ul className="twelve columns">{sectionItems}</ul>
                </div>
            );
        }

        return null;
    }
    createWorkExperienceMoreSection = (i, data) => {
        let name = "Stacks, Tools, Softwares and more...";
        let sectionItems = [];
        for (let j = 0; j < data.length; j++) {
            sectionItems.push(<div key={i.toString() + "-" + j.toString() + "-" + name} className="item"><span>{data[j]}</span></div>);
        }
        if (sectionItems.length > 0) {
            return(
                <div key={i + "-" + name}>
                    <i>{name}</i>
                    <div key={i + "-items-" + name} className="section-more">
                        {sectionItems}
                    </div>
                </div>
            );
        }

        return null;
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