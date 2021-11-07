import React, { useState } from "react";
import "./works.css";
import "../model.css";
import HttpIcon from "@mui/icons-material/Http";
import ChatIcon from "@mui/icons-material/Chat";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CircleIcon from "@mui/icons-material/Circle";
import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery } from "react-responsive";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const data = [
  {
    id: "1",
    icon: "web",
    title: "Web Development",
    desc: "I developed a website for a construction company. I used React JS to make this website and used Netlify to host it.",
    img: "./assets/houseBuilds.png",
    link: "https://www.housebuildsolutions.net/",
  },
  {
    id: "2",
    icon: "weather",
    title: "Weather App",
    desc: "This app lets user see the weather of their location. I used Node JS(Express JS) to make this app. This app get uses openweather's website's API to get weather data.",
    img: "./assets/weatherApp.png",
    link: "https://jubeen-weather-application.herokuapp.com/",
  },
  {
    id: "3",
    icon: "chat",
    title: "Chat App",
    desc: "This app is chat room app. I used Node JS(Express JS) and Socket.io to make this.",
    img: "./assets/chatApp.png",
    link: "https://jubeen-chat-app.herokuapp.com/",
  },
];

function Works(props) {
  const [currentSlider, setcurrentSlider] = useState(0);
  // const [modelOpen, setmodelOpen] = useState(false);
  // const [modelState, setmodelState] = useState({
  //   img: "",
  //   title: "",
  //   desc: "",
  //   link: "",
  // });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 425px)" });
  console.log(isTabletOrMobile);

  const handleClick = (way) => {
    way === "left"
      ? setcurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
      : setcurrentSlider(
          currentSlider < data.length - 1 ? currentSlider + 1 : 0
        );
  };

  const handleTouch = () => {
    if (currentSlider > data.length) {
      setcurrentSlider(0);
    } else {
      setcurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2);
    }
  };

  const checkIcon = (icon) => {
    switch (icon) {
      case "web":
        return <HttpIcon />;

      case "weather":
        return <WbSunnyIcon />;

      default:
        return <ChatIcon />;
    }
  };

  return (
    <div id="works" className="works">
      <h1>Works</h1>
      {/* {modelOpen === true ? (
        <div className="modelContainer">
          <div className="imageContainer">
            <img src={modelState.img} alt="image" />
            <div className="closeModel" onClick={()=>setmodelOpen(false)}>
                <CloseIcon style={{fontSize:30}}/>
            </div>
          </div>
          <div className="descContainer">
            <p>{modelState.desc}</p>
          </div>

          <button
            onClick={() => {
              window.open(modelState.link,'_blank')
            }}
            className="btn btn-link"
          >
            Link
          </button>
        </div>
      ) : null} */}

      <div
        className="slider"
        onTouchMove={handleTouch}
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((item) => {
          return (
            // <div className="container" >
            //   <div
            //     className="item"
            //     // onClick={isTabletOrMobile==true?
            //     //   ()=>{
            //     //     setmodelState({
            //     //       img: item.img,
            //     //       title: item.title,
            //     //       desc: item.desc,
            //     //       link: item.link,
            //     //     });
            //     //     setmodelOpen(true);
            //     //   }
            //     //   :null}
            //   >
            //     <div className="left">
            //       <div className="leftContainer">
            //         <div className="imgContainer">
            //           {/* <img src={item.icon} alt="" /> */}
            //           {checkIcon(item.icon)}
            //           {/* <PhoneAndroidIcon className='img' /> */}
            //         </div>
            //         <h2>{item.title}</h2>
            //         <p>{item.desc} </p>
            //         <span>
            //           <a href={item.link} target="_blank">
            //             Link
            //           </a>
            //         </span>
            //       </div>
            //     </div>
            //     <div className="right">
            //       <img src={item.img} alt="" />
            //     </div>
            //   </div>
            // </div>
            <Carousel>
              <img src='https://brainhubeu.github.io/react-carousel/static/mona-7a1ceae9bdb8c43272eb101c091c5408.jpg' />
            </Carousel>
          );
        })}
      </div>
      <img
        className="arrow left"
        onClick={() => handleClick("left")}
        src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/arrow.png"
      />
      <img
        className="arrow right"
        onClick={() => handleClick("right")}
        src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/arrow.png"
      />
      <div className="pages">
        <CircleIcon
          className="dots"
          style={currentSlider === 0 ? { color: "#15023a" } : null}
        />
        <CircleIcon
          className="dots"
          style={currentSlider === 1 ? { color: "#15023a" } : null}
        />
        <CircleIcon
          className="dots"
          style={currentSlider === 2 ? { color: "#15023a" } : null}
        />
      </div>
    </div>
  );
}

export default Works;
