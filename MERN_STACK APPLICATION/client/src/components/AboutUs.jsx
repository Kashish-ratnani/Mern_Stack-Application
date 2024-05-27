import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Img from "../assets/167088.jpg";
const AboutUs = () => {
  return (
    <section className="py-3 py-md-5 py-xl-8">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={10} lg={8} xl={7} xxl={6}>
            <h2 className="mb-4 display-5 text-center">About Us</h2>
            <p className="text-secondary mb-5 text-center lead fs-4">
              We believe in the power of teamwork and collaboration. Our diverse
              experts work tirelessly to deliver innovative solutions tailored
              to our clients' needs.
            </p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="gy-4 gy-lg-0 align-items-lg-center">
          <Col xs={12} lg={6}>
            <img
              className="img-fluid rounded border border-dark"
              loading="lazy"
              src={Img}
              alt="About Us"
            />
          </Col>
          <Col xs={12} lg={6} xxl={6}>
            <Row className="justify-content-lg-end">
              <Col xs={12} lg={11}>
                <div className="about-wrapper">
                  <p className="lead mb-4 mb-md-5">
                    As a socially responsible entity, we are deeply committed to
                    positively impacting the communities we serve and the world
                    at large. Through various initiatives and partnerships, we
                    actively contribute to environmental sustainability, social
                    welfare, and educational advancement.
                  </p>
                  <Row className="gy-4 mb-4 mb-md-5">
                    <Col xs={12} md={6}>
                      <Card className="border border-dark">
                        <Card.Body className="p-4">
                          <h3 className="display-5 fw-bold text-primary text-center mb-2">
                            370+
                          </h3>
                          <p className="fw-bold text-center m-0">
                            Qualified Experts
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} md={6}>
                      <Card className="border border-dark">
                        <Card.Body className="p-4">
                          <h3 className="display-5 fw-bold text-primary text-center mb-2">
                            18k+
                          </h3>
                          <p className="fw-bold text-center m-0">
                            Satisfied Clients
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Button
                    href="#!"
                    variant="primary"
                    size="lg"
                    className="bsb-btn-2xl"
                  >
                    Explore{" "}
                    <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
