import React, { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import {
  mobilePortfolio,
  designPortfolio,
  frontendPortfolio,
  backendPortfolio,
  NetPorfolio,
  LaravelPortfolio,
  freelancingPortfolio,
} from "../../data";
import "./portfolio.css";
import "../../global.css";
import { Modal } from "react-bootstrap";

function Porfolio(props) {
  const list = [
    {
      id: "frontend",
      title: "React JS",
    },
    {
      id: "backend",
      title: "Node JS",
    },
    {
      id: "dotNet",
      title: "ASP.NET/C#",
    },
    {
      id: "laravel",
      title: "Laravel",
    },
    {
      id: "mobile",
      title: "React Native",
    },
    {
      id: "freelancing",
      title: "Freelancing",
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
      case "dotNet":
        setdata(NetPorfolio);
        break;
      case "laravel":
        setdata(LaravelPortfolio);
        break;
      case "mobile":
        setdata(mobilePortfolio);
        break;
      case "freelancing":
        setdata(freelancingPortfolio);
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
              key={item.id}
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
            {item !== undefined ? item.title : null}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modelImageContainer">
            {item?.video ? (
              <iframe
                src={item?.video}
                width="320"
                height="180"
                frameborder="0"
                allowfullscreen
                title="Book my event"
              ></iframe>
            ) : (
              <img
                className="modelImage"
                src={item !== undefined ? item.img : null}
                alt="Alternate"
              />
            )}
            {/* <img
                className="modelImage"
                src={item !== undefined ? item.img : null}
                alt="Alternate"
              /> */}
          </div>

          <p className="modelDesc">{item !== undefined ? item.desc : null}</p>
          <div className="bottom-button-container">
            <a
              href={item !== undefined ? item.link : null}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Link
            </a>
            {item?.hostedLink && (
              <a
                href={item.hostedLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ marginLeft: "1rem" }}
              >
                Hosted Link
              </a>
            )}
          </div>
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
              key={item.id}
            >
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Porfolio;
