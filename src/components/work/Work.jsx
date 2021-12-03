import React, { useState,useEffect } from "react";
//import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./work.css";
import "../model.css";
import { useMediaQuery } from "react-responsive";
import CloseIcon from "@mui/icons-material/Close";
import { ProgressBar, Carousel } from "react-bootstrap";

// const data = [
//   {
//     id: "1",
//     icon: "web",
//     title: "WEB DEVELOPMENT",
//     desc: "I developed a website for a construction company. I used React JS to make this website and used Netlify to host it.",
//     img: "./assets/houseBuilds.png",
//     link: "https://www.housebuildsolutions.net/",
//   },
//   {
//     id: "2",
//     icon: "weather",
//     title: "WEATHER APP",
//     desc: "This app lets user see the weather of their location. I used Node JS(Express JS) to make this app. This app get uses openweather's website's API to get weather data.",
//     img: "./assets/weatherApp.png",
//     link: "https://jubeen-weather-application.herokuapp.com/",
//   },
//   {
//     id: "3",
//     icon: "chat",
//     title: "CHAT APP",
//     desc: "This app is chat room app. I used Node JS(Express JS) and Socket.io to make this.",
//     img: "./assets/chatApp.png",
//     link: "https://jubeen-chat-app.herokuapp.com/",
//   },
// ];

const data = [
  {
    id: 1,
    title: "JavaScript",
    img: "https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png",
    desc: "I have done online bootcamp course on JavaScript course from udemy and have used it to make websites and a dice game.",
    progress: 70,
    label:'7/10'
  },
  {
    id: 2,
    title: "HTML and CSS",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/1280px-CSS3_and_HTML5_logos_and_wordmarks.svg.png",
    desc: "I have learned HTML and CSS in the unversity and expanded my knowledge through bootcamp course of web development from udemy.",
    progress: 70,
    label:'7/10'
  },
  {
    id: 3,
    title: "React JS",
    img: "https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png",
    desc: "I have good knowledge of React and have used to make this webpage.",
    progress: 80,
    label:'6/10'
  },
  {
    id: 4,
    title: "Node JS",
    img: "https://cdn.liveagent.com/app/uploads/2020/11/MySQL-Logo.png",
    desc: "I self taught Node JS and used it to make few web applications.",
    progress: 75,
    label:'5.5/10'
  },
  {
    id: 5,
    title: "React Native",
    img: "https://pajaaleksic.com/wp-content/uploads/2019/07/react-native-workshop.jpg",
    desc: "I have it used to make cross platform mobile application for the final year project.",
    progress: 75,
    label:'5.5/10'
  },
  {
    id: 6,
    title: "MySQL",
    img: "https://cdn.liveagent.com/app/uploads/2020/11/MySQL-Logo.png",
    desc: "I have good knowledege of MySQL which I got from my university's course and have used in few university assignment projects.",
    progress: 80,
    label:'6/10'
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
                  className="d-block w-100 img"
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
    // <div className="workcontainer" id="works">
    //     <h1 className="title">WORKS</h1>
    //   {modelOpen === true && isTabletOrMobile===true ? (
    //     <div className="modelContainer">
    //       <div className="imageContainer">
    //         <img src={modelState.img} alt="image" />
    //         <div className="closeModel" onClick={() => setmodelOpen(false)}>
    //           <CloseIcon style={{ fontSize: 30 }} />
    //         </div>
    //       </div>
    //       <div className="descContainer">
    //         <p>{modelState.desc}</p>
    //       </div>

    //       <button
    //         onClick={() => {
    //           window.open(modelState.link, "_blank");
    //         }}
    //         className="btn buttonContainer"
    //       >
    //         Link
    //       </button>
    //     </div>
    //   ) : null}
    //   <Carousel className="carouselContainer" plugins={["arrows", "infinite"]}>
    //     {data.map((item) => (
    //       <div
    //         className="carousel"
    //         onClick={
    //           isTabletOrMobile == true
    //             ? () => {
    //                 setmodelState({
    //                   img: item.img,
    //                   title: item.title,
    //                   desc: item.desc,
    //                   link: item.link,
    //                 });
    //                 setmodelOpen(true);
    //               }
    //             : null
    //         }
    //       >
    //         <h4>{item.title}</h4>
    //         <div className="left">
    //           <div>
    //             <p>{item.desc}</p>
    //             <button
    //               type="button"
    //               class="btn"
    //               onClick={() => {
    //                 window.open(item.link, "_blank");
    //               }}
    //             >
    //               Link
    //             </button>
    //           </div>
    //           <img src={item.img} />
    //         </div>
    //       </div>
    //     ))}
    //   </Carousel>
    // </div>
  );
}
