import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import bgImg from "../assets/5093130_10725.jpg";

const Hero = () => {
  return (
    <div
      id="intro-example"
      className="p-5 text-center position-relative"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="position-absolute w-100 h-100"
        style={{
          backgroundColor: "rgba(189, 189, 189, 0.4)", // Adjust opacity as needed
          zIndex: 1, // Ensure overlay is on top of other elements
          top: 0, // Position the overlay at the top of the container
          left: 0, // Position the overlay at the left of the container
        }}
      ></div>
      <Container>
        <Row>
          <Col>
            <div>
              <h1
                className="mb-3"
                style={{
                  fontSize: "4rem",
                  fontWeight: "bold",
                  color: "rgb(227, 2, 219)",
                }}
              >
                Grow your Bussines
              </h1>
              <h5
                className="mb-4"
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "rgb(92, 24, 89)",
                }}
              >
                Best in the world when it comes to Marketing
              </h5>
              <Button variant="outline-dark" size="lg" className="m-2">
                Start tutorial
              </Button>
              <Button variant="outline-dark" size="lg" className="m-2">
                Download our App
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
