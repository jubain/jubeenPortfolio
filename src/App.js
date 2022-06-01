import React, { useState, useEffect } from "react";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Porfolio";
import Work from "./components/work/Work";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [menuOpen, setmenuOpen] = useState(false);

  const [githubData, setGithubData] = useState([])
  const [githubUser, setGithubUser] = useState("jubain")

  const fetchData = () => {
    return fetch(`https://api.github.com/repos/${githubUser}/CV/contents`)
      .then((response) => {
        console.log(response.json())
        //return response.blob()
      })
      // .then((blob) => {
      //   const url = window.URL.createObjectURL(
      //     new Blob([blob]),
      //   );
      //   const link = document.createElement('a');
      //   link.href = url;
      //   link.setAttribute(
      //     'download',
      //     `Jubeen Amatya CV.pdf`,
      //   );

      //   // Append to html link element page
      //   document.body.appendChild(link);

      //   // Start download
      //   link.click();

      //   // Clean up and remove the link
      //   link.parentNode.removeChild(link);

      // });
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="app">
      <Topbar setmenuOpen={setmenuOpen} menuOpen={menuOpen} />
      <Menu setmenuOpen={setmenuOpen} menuOpen={menuOpen} />
      <div className="sections">
        <Intro fetchData={fetchData} />
        <Portfolio fetchData={fetchData} />
        <Work fetchData={fetchData} />
        <Testimonial fetchData={fetchData} />
        <Contact fetchData={fetchData} />
      </div>
    </div>
  );
}

export default App;
