import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPalette,
  faShareAlt,
  faCode,
  faChartLine,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

const Service = () => {
  return (
    <section className="py-5 py-xl-8">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={10} lg={8} xl={7} xxl={6}>
            <h2 className="mb-4 display-5 text-center">Services</h2>
            <p className="text-secondary mb-5 text-center">
              We have a team of experienced and talented professionals who can
              help you with every aspect of the product development process,
              from ideation to prototyping to launch.
            </p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </Col>
        </Row>
      </Container>

      <Container className="overflow-hidden">
        <Row className="gy-5">
          <Col xs={12} sm={6} lg={4}>
            <div className="text-center px-xl-2">
              <FontAwesomeIcon
                icon={faSearch}
                className="bi-1-circle-fill text-primary mb-4"
                size="3x"
              />
              <h5 className="m-2">SEO Consulting</h5>
              <p className="m-0 text-secondary">
                We can help you to improve your website's visibility in search
                engine results pages (SERPs). This can lead to more traffic to
                your website.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <div className="text-center px-xl-2">
              <FontAwesomeIcon
                icon={faPalette}
                className="bi-1-circle-fill text-primary mb-4"
                size="3x"
              />
              <h5 className="m-2">UI/UX Designing</h5>
              <p className="m-0 text-secondary">
                We can help you to improve your website's visibility in search
                engine results pages (SERPs). This can lead to more traffic to
                your website.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <div className="text-center px-xl-2">
              <FontAwesomeIcon
                icon={faShareAlt}
                className="bi-1-circle-fill text-primary mb-4"
                size="3x"
              />
              <h5 className="m-2">Social Media Marketing</h5>
              <p className="m-0 text-secondary">
                We can help you to improve your website's visibility in search
                engine results pages (SERPs). This can lead to more traffic to
                your website.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <div className="text-center px-xl-2">
              <FontAwesomeIcon
                icon={faCode}
                className="bi-1-circle-fill text-primary mb-4"
                size="3x"
              />
              <h5 className="m-2">Web Development</h5>
              <p className="m-0 text-secondary">
                We can help you to improve your website's visibility in search
                engine results pages (SERPs). This can lead to more traffic to
                your website.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <div className="text-center px-xl-2">
              <FontAwesomeIcon
                icon={faChartLine}
                className="bi-1-circle-fill text-primary mb-4"
                size="3x"
              />
              <h5 className="m-2">SEO Optimization</h5>
              <p className="m-0 text-secondary">
                We can help you to improve your website's visibility in search
                engine results pages (SERPs). This can lead to more traffic to
                your website.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <div className="text-center px-xl-2">
              <FontAwesomeIcon
                icon={faHeadset}
                className="bi-1-circle-fill text-primary mb-4"
                size="3x"
              />
              <h5 className="m-2">Customer Support</h5>
              <p className="m-0 text-secondary">
                We can help you to improve your website's visibility in search
                engine results pages (SERPs). This can lead to more traffic to
                your website.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Service;
