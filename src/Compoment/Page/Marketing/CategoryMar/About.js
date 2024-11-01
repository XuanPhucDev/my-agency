import React from "react";
import "./About.css";
import { Col, Container, Row } from "react-bootstrap";
import BannerImages1 from "../../../../Asset/Images/images1.png";
import BannerImages2 from "../../../../Asset/Images/images2.png";
import BannerImages3 from "../../../../Asset/Images/images3.png";
import imageContentBanner from "../../../../Asset/Images/Product-Marketing/hand.png";
import person1 from "../../../../Asset/Images/Homepage/person1.jpg";
import iconPerson1 from "../../../../Asset/Images/Homepage/icon-person1.png";
import person2 from "../../../../Asset/Images/Homepage/person2.jpg";
import iconPerson2 from "../../../../Asset/Images/Homepage/icon-person2.png";
import iconText from "../../../../Asset/Images/Homepage/icon-text.png";
const About = () => {
  return (
    <div className="about-marketing">
      <Container>
        <Row>
          <Col lg={3}>
            <div className="person-1">
              <img className="image-person" src={person1} alt="" />
              <img className="icon-person" src={iconPerson1} alt="" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="text-about-us">
              <img className="rotate" src={iconText} alt="" />
              <h3>Giải pháp SEO & Digital Marketing Toàn Diện</h3>
              <p>
                Chào mừng bạn đến với D.A.C, nơi chúng tôi chuyên cách mạng hóa
                hiển thị trực tuyến thông qua SEO và Digital Marketing
              </p>
              <button>
                Xem chi tiết <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </Col>
          <Col lg={3}>
            <div className="person-2">
              <img className="image-person" src={person2} alt="" />
              <img className="icon-person" src={iconPerson2} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
