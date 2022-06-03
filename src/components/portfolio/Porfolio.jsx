import React, { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import { mobilePortfolio, designPortfolio, frontendPortfolio, backendPortfolio } from "../../data";
import "./portfolio.css";
import '../../global.css'
import { Modal } from "react-bootstrap";

function Porfolio(props) {
  const list = [
    {
      id: "frontend",
      title: "Frontend",
    },
    {
      id: "backend",
      title: "Backend",
    },
    {
      id: "mobile",
      title: "Mobile Applications",
    },
    {
      id: "graphic",
      title: "Graphics",
    },
  ];

  const [selected, setselected] = useState("featured");
  const [data, setdata] = useState([]);

  // For Modal
  const [modalShow, setModalShow] = React.useState(false);
  const [item, setitem] = useState();

  useEffect(() => {
    switch (selected) {
      case "frontend":
        setdata(frontendPortfolio);
        break;
      case "backend":
        setdata(backendPortfolio);
        break;
      case "mobile":
        setdata(mobilePortfolio);
        break;
      case "graphic":
        setdata(designPortfolio);
        break;
      default:
        setdata(frontendPortfolio);
        break;
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1 className="heading">PROJECTS</h1>
      <ul>
        {list.map((item) => {
          return (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setselected={setselected}
              id={item.id}
            />
          );
        })}
      </ul>
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => setModalShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title
            className="modelTitle"
            id="contained-modal-title-vcenter"
          >
            {item != undefined ? item.title : null}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modelImageContainer">
            <img
              className="modelImage"
              src={item != undefined ? item.img : null}
            />
          </div>

          <p className="modelDesc">{item != undefined ? item.desc : null}</p>
          <a href={item != undefined ? item.link : null} target='_blank'>Link</a>
        </Modal.Body>
      </Modal>

      <div className="container">
        {data.map((item) => {
          return (
            <div
              className="item"
              onClick={() => {
                setModalShow(true);
                setitem(item);
              }}
            >
              <img src={item.img} />
              <h3>{item.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Porfolio;
