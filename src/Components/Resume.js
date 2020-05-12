import React, {Component} from 'react';
import Markdown from 'react-markdown';

class Resume extends Component {
    render() {

        if (this.props.data) {
            var skillmessage = this.props.data.skillmessage;
            var education = this.props.data.education.map(function (education) {
                return <div key={education.school} className={education.break && "break"}><h3>{education.school}</h3>
                    <p className="info">{education.degree}<span>&bull;</span><em
                        className="date">{education.graduated}</em></p>
                    <Markdown source={education.description}/></div>
            })
            var relevantCourseWork = this.props.data.relevantCourseWork.map(function (work) {
                return <li key={work}>{work}</li>
            })
            var volunteer = this.props.data.volunteer.map(function (item) {
                return <div key={item.company} className={item.break && "break"}><h3>{item.company}</h3>
                    <p className="info">{item.title}</p>
                    {item.description && <Markdown source={item.description}/>}
                </div>
            })
            var research = this.props.data.research.map(function (research) {
                return <div key={research.company}  className={research.break && "break"}><h3>{research.company}</h3>
                    <p className="info">{research.title}<span>&bull;</span>{research.lab}<span>&bull;</span><em
                        className="date">{research.years}</em></p>
                    <Markdown source={research.description}/>
                </div>
            })
            var work = this.props.data.work.map(function (work) {
                return <div key={work.company} className={work.break && "break"}><h3>{work.company}</h3>
                    <p className="info">{work.title}<span>&bull;</span><em className="date">{work.years}</em></p>
                    <Markdown source={work.description}/>
                </div>
            })
            var skills = this.props.data.skills.map(function (skills) {
                var className = 'bar-expand ' + skills.name.toLowerCase();
                return <li key={skills.name}><span style={{width: skills.level}} className={className}></span><span
                    className="bar-label">{skills.name}</span></li>
            })
        }

        return (
            <section id="resume">

                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                {education}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row course-work">
                    <div className="three columns header-col">
                        <h1><span>Course Work</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <ul>
                                    {relevantCourseWork}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row research">

                    <div className="three columns header-col">
                        <h1><span>Research</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        {research}
                    </div>
                </div>

                <div className="row work">

                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        {work}
                    </div>
                </div>

                <div className="row volunteer">

                    <div className="three columns header-col">
                        <h1><span>Volunteer</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        {volunteer}
                    </div>
                </div>

                <div className="row skill">

                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>

                    <div className="nine columns main-col">

                        <p>{skillmessage}
                        </p>

                        <div className="bars">
                            <ul className="skills">
                                {skills}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;
