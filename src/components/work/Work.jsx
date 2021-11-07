import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./work.css";

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

export default function Work() {
  return (
    <div className="workcontainer" id='works'>
        <h1>WORKS</h1>
      <Carousel plugins={["arrows", "infinite"]}>
        {data.map((item) => (
          <div className="carousel">
            <h4>{item.title}</h4>
            <div className="left">
              <div>
                <p>{item.desc}</p>
                <button type="button" class="btn" onClick={()=>{window.open(item.link,"_blank")}}>Link</button>
              </div>
              <img src={item.img} />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
