import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faComments,
  faUndoAlt,
} from "@fortawesome/free-solid-svg-icons";

const Excellence = () => {
  return (
    <section className="bg-light py-3 py-md-5 py-xl-8">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={10} lg={8} xl={7} xxl={6}>
            <h2 className="mb-4 display-5 text-center">
              Experience Excellence
            </h2>
            <p className="text-secondary mb-5 text-center lead fs-4">
              We stand out as the epitome of customer-centricity, offering the
              best benefits like free shipping and 24/7 support.
            </p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <Container fluid>
              <Row className="gy-3 gy-md-4">
                <Col xs={12} lg={4}>
                  <Card border="dark">
                    <Card.Body className="p-3 p-md-4 p-xxl-5 d-flex justify-content-center align-items-center">
                      <div className="me-3 text-primary">
                        <FontAwesomeIcon icon={faTruck} size="3x" />
                      </div>
                      <div>
                        <h4 className="mb-1">Free Shipping</h4>
                        <p className="m-0 text-secondary">
                          Eliminates shipping costs
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} lg={4}>
                  <Card border="dark">
                    <Card.Body className="p-3 p-md-4 p-xxl-5 d-flex justify-content-center align-items-center">
                      <div className="me-3 text-primary">
                        <FontAwesomeIcon icon={faComments} size="3x" />
                      </div>
                      <div>
                        <h4 className="mb-1">24/7 Support</h4>
                        <p className="m-0 text-secondary">
                          Better shopping experience
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} lg={4}>
                  <Card border="dark">
                    <Card.Body className="p-3 p-md-4 p-xxl-5 d-flex justify-content-center align-items-center">
                      <div className="me-3 text-primary">
                        <FontAwesomeIcon icon={faUndoAlt} size="3x" />
                      </div>
                      <div>
                        <h4 className="mb-1">Free Returns</h4>
                        <p className="m-0 text-secondary">
                          Customer's peace of mind
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Excellence;
