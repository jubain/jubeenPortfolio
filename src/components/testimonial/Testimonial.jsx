import React from 'react';
import './timeline.css'
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import timeLine from '../../timeline'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { useMediaQuery } from 'react-responsive';

function Testimonial(props) {
    let workIconStyle = { background: "#06d6a0"}
    let schoolIconStyle = { background: "#f9c74f"}
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 425px)" });
    return (
        <div className="timeline" id="testimonial">
            <h1 className="title">TIMELINE</h1>
            <VerticalTimeline
            className="timelineContainer"
            >
                {
                    timeLine.map(element => {
                        let isWorkIcon = element.icon === 'Work'
                        let showButton = element.buttonText !== undefined && element.buttonText !== null && element.buttonText !== ""

                        return (
                            <VerticalTimelineElement
                                key={element.id}
                                date={element.date}
                                className="verticalTimeline vertical-timeline-element--work"
                                dateClassName="date"
                                icon={isWorkIcon ? <WorkIcon fontSize="12" /> : <SchoolIcon />}
                                contentStyle={{ backgroundColor:'white' , color: '#15023a' }}
                                contentArrowStyle={{ borderLeft: '7px solid  rgb(33, 150, 243)',color:'white' }}
                                iconStyle={isWorkIcon ? workIconStyle : schoolIconStyle}
                                iconClassName="icon"
                            >
                                <h3 className="vertical-timeline-element-title">{element.title}</h3>
                                <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                                <p id="description">{element.description}</p>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </div>
    );
}

export default Testimonial;