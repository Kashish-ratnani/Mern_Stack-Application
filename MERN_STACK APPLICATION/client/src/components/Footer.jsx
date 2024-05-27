import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faDribbble,
  faTwitter,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import { faHome, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="text-white text-center text-lg-start bg-dark">
      <Container className="p-4">
        <Row className="mt-4">
          <Col lg={4} md={12} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">About company</h5>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti.
            </p>
            <p>
              Blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias.
            </p>
            <div className="mt-4">
              {/* Social media buttons */}
              <a href="#" className="btn btn-floating btn-light btn-lg mx-1">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="btn btn-floating btn-light btn-lg mx-1">
                <FontAwesomeIcon icon={faDribbble} />
              </a>
              <a href="#" className="btn btn-floating btn-light btn-lg mx-1">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="btn btn-floating btn-light btn-lg mx-1">
                <FontAwesomeIcon icon={faGooglePlusG} />
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4 pb-1">Contact</h5>
            <ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
              <li className="mb-3">
                <span className="fa-li">
                  <FontAwesomeIcon icon={faHome} />
                </span>
                <span className="ms-2">Warsaw, 00-967, Poland</span>
              </li>
              <li className="mb-3">
                <span className="fa-li">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className="ms-2">contact@example.com</span>
              </li>
              <li className="mb-3">
                <span className="fa-li">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span className="ms-2">+ 48 234 567 88</span>
              </li>
            </ul>
          </Col>

          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Opening hours</h5>
            <Table className="text-center text-white">
              <tbody className="fw-normal">
                <tr>
                  <td>Mon - Thu:</td>
                  <td>8am - 9pm</td>
                </tr>
                <tr>
                  <td>Fri - Sat:</td>
                  <td>8am - 1am</td>
                </tr>
                <tr>
                  <td>Sunday:</td>
                  <td>9am - 10pm</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        <a className="text-white" href="#">
          Rest-API
        </a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
