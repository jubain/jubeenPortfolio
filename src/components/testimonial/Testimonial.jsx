import React from "react";
import "./timeline.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import timeLine from "../../timeline";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useMediaQuery } from "react-responsive";
import "../../global.css";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

import FastfoodIcon from "@mui/icons-material/Fastfood";

function Testimonial(props) {
  let workIconStyle = { background: "#06d6a0" };
  let schoolIconStyle = { background: "#f9c74f" };
  const isLaptop = useMediaQuery({ query: "(min-width: 1440px)" });
  return (
    <div className="timeline" id="testimonial">
      <h1 className="heading title">TIMELINE</h1>
      <VerticalTimeline className="timelineContainer">
        {timeLine.map((element) => {
          let isWorkIcon = element.icon === "Work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              className="vertical-timeline-element--work verticalTimeline verticalDate"
              dateClassName="date"
              icon={isWorkIcon ? <WorkIcon fontSize="12" /> : <SchoolIcon />}
              contentStyle={{}}
              iconStyle={isWorkIcon ? workIconStyle : schoolIconStyle}
              iconClassName="icon"
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {isLaptop ? <i className="customDate">{element.date}</i> : null}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Testimonial;
