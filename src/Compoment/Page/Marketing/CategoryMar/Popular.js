import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import dataFeatures from "../../../../Context/Data/FeaturesPageMarketing";
import "./Popular.css";
const Popular = () => {
  const FeaturesTop = dataFeatures.filter((item) => item.top === true);
  return (
    <div className="popular">
      <Container>
        <Row>
          <div className="heading-popular">
            <Col>
              <h3>Các dịch vụ Digital Marketing phổ biến để xây dựng doanh nghiệp của bạn</h3>
            </Col>
          </div>
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
