import React, { useState, useEffect } from "react";
//import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./work.css";
import "../model.css";
import { useMediaQuery } from "react-responsive";
import CloseIcon from "@mui/icons-material/Close";
import { ProgressBar, Carousel } from "react-bootstrap";

const data = [
  {
    id: 1,
    title: "JavaScript",
    img: "https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png",
    desc: "I have done online bootcamp course on JavaScript course from udemy and have 6 months of experience",
    progress: 80,
    label: '8.5/10'
  },
  {
    id: 2,
    title: "HTML and CSS",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/1280px-CSS3_and_HTML5_logos_and_wordmarks.svg.png",
    desc: "I have learned HTML and CSS in the unversity and expanded my knowledge through bootcamp course of web development from udemy.",
    progress: 70,
    label: '7/10'
  },
  {
    id: 3,
    title: "React JS",
    img: "https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png",
    desc: "I have 6 months of expereince of React JS",
    progress: 80,
    label: '8.5/10'
  },
  {
    id: 4,
    title: "Node JS",
    img: "https://res.cloudinary.com/practicaldev/image/fetch/s--rQS9VcWG--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zojuy79lo3fn3qdt7g6p.png",
    desc: "I self taught Node JS and used it to make few web applications.",
    progress: 75,
    label: '5.5/10'
  },
  {
    id: 5,
    title: "React Native",
    img: "https://pajaaleksic.com/wp-content/uploads/2019/07/react-native-workshop.jpg",
    desc: "I have it used to make cross platform mobile application for the final year project.",
    progress: 60,
    label: '5.5/10'
  },
  {
    id: 6,
    title: "TypeScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png",
    desc: "I am currently learning typescript via udemy online course",
    progress: 10,
    label: '1/10'
  },
];
export default function Work() {
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="workcontainer" id="works">
      <h1 className="title">SKILLS</h1>
      {isMobile === true ? (
        <Carousel
          fade
          className="carousel"
          activeIndex={index}
          onSelect={handleSelect}
          variant="dark"
        >
          {data.map((item) => {
            return (
              <Carousel.Item className="carouselItem">
                <img
                  className="d-block img"
                  src={item.img}
                  alt="First slide"
                />
                <Carousel.Caption className="caption">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <ProgressBar className="bar" now={item.progress} label={item.label} min={0} />
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      ) : (
        <div className="skillsContainer">
          {data.map((item) => {
            return (
              <div className="itemContainer">
                <div className="titleContainer">
                  <img src={item.img} alt="image" />
                  <h4>{item.title}</h4>
                </div>
                <p>{item.desc}</p>
                <ProgressBar className="bar" now={item.progress} label={item.label} min={0} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
