import React, { useState } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./work.css";
import '../model.css'
import { useMediaQuery } from "react-responsive";
import CloseIcon from "@mui/icons-material/Close";

const data = [
  {
    id: "1",
    icon: "web",
    title: "WEB DEVELOPMENT",
    desc: "I developed a website for a construction company. I used React JS to make this website and used Netlify to host it.",
    img: "./assets/houseBuilds.png",
    link: "https://www.housebuildsolutions.net/",
  },
  {
    id: "2",
    icon: "weather",
    title: "WEATHER APP",
    desc: "This app lets user see the weather of their location. I used Node JS(Express JS) to make this app. This app get uses openweather's website's API to get weather data.",
    img: "./assets/weatherApp.png",
    link: "https://jubeen-weather-application.herokuapp.com/",
  },
  {
    id: "3",
    icon: "chat",
    title: "CHAT APP",
    desc: "This app is chat room app. I used Node JS(Express JS) and Socket.io to make this.",
    img: "./assets/chatApp.png",
    link: "https://jubeen-chat-app.herokuapp.com/",
  },
];

export default function Work() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 425px)" });

  const [modelOpen, setmodelOpen] = useState(false);
  const [modelState, setmodelState] = useState({
    img: "",
    title: "",
    desc: "",
    link: "",
  });

  return (
    <div className="workcontainer" id="works">
      <div>
        <h1>WORKS</h1>
      </div>
      {modelOpen === true && isTabletOrMobile===true ? (
        <div className="modelContainer">
          <div className="imageContainer">
            <img src={modelState.img} alt="image" />
            <div className="closeModel" onClick={() => setmodelOpen(false)}>
              <CloseIcon style={{ fontSize: 30 }} />
            </div>
          </div>
          <div className="descContainer">
            <p>{modelState.desc}</p>
          </div>

          <button
            onClick={() => {
              window.open(modelState.link, "_blank");
            }}
            className="btn buttonContainer"
          >
            Link
          </button>
        </div>
      ) : null}
      <Carousel className="carouselContainer" plugins={["arrows", "infinite"]}>
        {data.map((item) => (
          <div
            className="carousel"
            onClick={
              isTabletOrMobile == true
                ? () => {
                    setmodelState({
                      img: item.img,
                      title: item.title,
                      desc: item.desc,
                      link: item.link,
                    });
                    setmodelOpen(true);
                  }
                : null
            }
          >
            <h4>{item.title}</h4>
            <div className="left">
              <div>
                <p>{item.desc}</p>
                <button
                  type="button"
                  class="btn"
                  onClick={() => {
                    window.open(item.link, "_blank");
                  }}
                >
                  Link
                </button>
              </div>
              <img src={item.img} />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
