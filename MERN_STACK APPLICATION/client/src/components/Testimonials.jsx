import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <section className="my-5">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={10} xl={8} className="text-center">
            <h3 className="mb-4">Testimonials</h3>
            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum porro a pariatur veniam.
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="text-center">
          <Col md={4} className="mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
                alt="Maria Smantha"
              />
            </div>
            <h5 className="mb-3">Maria Smantha</h5>
            <h6 className="text-primary mb-3">Web Developer</h6>
            <p className="px-xl-3">
              <FontAwesomeIcon icon={faQuoteLeft} className="pe-2" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
              id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
            </p>
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              {[1, 2, 3, 4, 5].map((item) => (
                <li key={item}>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="fa-sm text-warning"
                  />
                </li>
              ))}
              <li>
                <FontAwesomeIcon
                  icon={faStarHalfAlt}
                  className="fa-sm text-warning"
                />
              </li>
            </ul>
          </Col>
          <Col md={4} className="mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
                alt="Lisa Cudrow"
              />
            </div>
            <h5 className="mb-3">Lisa Cudrow</h5>
            <h6 className="text-primary mb-3">Graphic Designer</h6>
            <p className="px-xl-3">
              <FontAwesomeIcon icon={faQuoteLeft} className="pe-2" />
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid commodi.
            </p>
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              {[1, 2, 3, 4, 5].map((item) => (
                <li key={item}>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="fa-sm text-warning"
                  />
                </li>
              ))}
            </ul>
          </Col>
          <Col md={4}>
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
                alt="John Smith"
              />
            </div>
            <h5 className="mb-3">John Smith</h5>
            <h6 className="text-primary mb-3">Marketing Specialist</h6>
            <p className="px-xl-3">
              <FontAwesomeIcon icon={faQuoteLeft} className="pe-2" />
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti.
            </p>
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              {[1, 2, 3, 4].map((item) => (
                <li key={item}>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="fa-sm text-warning"
                  />
                </li>
              ))}
              <li>
                <FontAwesomeIcon
                  icon={faStarHalfAlt}
                  className="fa-sm text-warning"
                />
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
