import React, { useState } from "react";
//import Carousel from "@brainhubeu/react-carousel";
// import "@brainhubeu/react-carousel/lib/style.css";
import "./work.css";
import "../model.css";
import { useMediaQuery } from "react-responsive";
import '../../global.css'
import { ProgressBar, Carousel } from "react-bootstrap";
const label = "9/10"
const data = [
  {
    id: 1,
    title: "JavaScript",
    img: "https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png",
    desc: "I have done online bootcamp course on JavaScript course from udemy and have 1 year of experience",
    progress: 90,
    label: label
  },
  {
    id: 2,
    title: "HTML and CSS",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/1280px-CSS3_and_HTML5_logos_and_wordmarks.svg.png",
    desc: "I have learned HTML and CSS in the unversity and expanded my knowledge through bootcamp course of web development from udemy.",
    progress: 90,
    label: label
  },
  {
    id: 3,
    title: "React JS",
    img: "https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png",
    desc: "I have 1 year of industrial expereince of React JS which i achieved from my side projects, university projects and internship",
    progress: 90,
    label: label
  },
  {
    id: 4,
    title: "Node JS",
    img: "https://res.cloudinary.com/practicaldev/image/fetch/s--rQS9VcWG--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zojuy79lo3fn3qdt7g6p.png",
    desc: "I self taught Node JS and used it to make few web applications.",
    progress: 90,
    label: label
  },
  {
    id: 5,
    title: "ASP Net and C#",
    img: "https://e7.pngegg.com/pngimages/534/663/png-clipart-net-framework-software-framework-c-microsoft-asp-net-microsoft-blue-angle.png",
    desc: "I have created online book management system using C# and ASP.NET in the Backend",
    progress: 90,
    label: label
  },
  {
    id: 6,
    title: "Laravel PHP",
    img: "https://e7.pngegg.com/pngimages/719/649/png-clipart-laravel-software-framework-web-framework-php-zend-framework-framework-icon-angle-text.png",
    desc: "I have it used to make cross platform mobile application for the final year project.",
    progress: 90,
    label: label
  },
  {
    id: 7,
    title: "React Native",
    img: "https://pajaaleksic.com/wp-content/uploads/2019/07/react-native-workshop.jpg",
    desc: "I have it used to make cross platform mobile application for the final year project.",
    progress: 90,
    label: label
  },
  {
    id: 8,
    title: "TypeScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png",
    desc: "I am currently using TypeScript along with Node Js and Nest JS to create Rest API in my intership",
    progress: 90,
    label: label
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
      <h1 className="heading">SKILLS</h1>
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
                <div className="titleContainer w-75">
                  <img src={item.img} alt={item.title}  className="mx-2"/>
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
