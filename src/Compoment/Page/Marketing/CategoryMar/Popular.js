import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import dataFeatures from "../../../../Context/Data/FeaturesPageMarketing";
import "./Popular.css";
import Title from "../../../Global/Title/Title";
const Popular = () => {
  const FeaturesTop = dataFeatures.filter((item) => item.top === true);
  return (
    <div className="popular space-compoment">
      <Container>
        <Row>
            <Col>
            <Title title="Dịch vụ Digital Marketing" des="Dịch vụ phổ biến dành cho bạn"></Title>
            </Col>
        </Row>
        <Row>
          <div className="features flex flex-row">
            {FeaturesTop.map((item) => (
              <div className="thumb-features flex flex-column">
                <h4>{item.title}</h4>
                <img src={item.images} alt={item.title} />
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </Row>
        <Row>
          <div className="view-more">
            <button>
              Xem Thêm <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Popular;
