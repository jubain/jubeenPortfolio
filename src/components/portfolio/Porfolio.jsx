import React, { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import { webPortfolio, mobilePortfolio, designPortfolio } from "../../data";
import "./portfolio.css";
import { Modal } from "react-bootstrap";

function Porfolio(props) {
  const list = [
    {
      id: "web",
      title: "Web Application",
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
      case "web":
        setdata(webPortfolio);
        break;
      case "mobile":
        setdata(mobilePortfolio);
        break;
      case "graphic":
        setdata(designPortfolio);
        break;
      default:
        setdata(webPortfolio);
        break;
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>PROJECTS</h1>
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
          <Modal.Title className="modelTitle" id="contained-modal-title-vcenter">
            {item!=undefined? item.title:null}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="modelImage" src={item!=undefined? item.img:null} />
          <p className="modelDesc">
            {item!=undefined? item.desc:null}
          </p>
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
