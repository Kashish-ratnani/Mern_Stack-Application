import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <Container fluid className="px-3 px-md-5">
        <Row className="d-flex justify-content-center align-items-center rows">
          <Col xs={12} md={8} lg={6}>
            <Card className="newsletter-card w-100">
              <Card.Body className="text-center">
                <img
                  src="https://i.imgur.com/Dh7U4bp.png"
                  width="200"
                  alt="Newsletter"
                />
                <span className="d-block mt-3">
                  Subscribe to our newsletter in order not to miss new arrivals,
                  promotions, and discounts of our store
                </span>
                <div className="mx-2 mx-md-5">
                  <InputGroup className="mb-3 mt-4">
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      className="form-control-custom"
                    />
                    <Button variant="success" className="border-rad">
                      Subscribe
                    </Button>
                  </InputGroup>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Newsletter;
