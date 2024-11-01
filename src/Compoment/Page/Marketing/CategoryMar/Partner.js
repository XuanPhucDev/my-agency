import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAxios from "../../../../Context/API/UseAxios";
import Slider from "react-slick";
import "./Partner.css";
const Partner = () => {
  const dataPartner = useAxios(
    "https://6716463e33bc2bfe40bd35cb.mockapi.io/demoapi-xuanphuc/userData"
  );
  const settings = {
    infinite: true, // Lặp lại slider
    speed: 500, // Tốc độ chuyển slide
    slidesToShow: 4, // Số slide hiển thị cùng lúc
    slidesToScroll: 1, // Số slide cuộn mỗi lần
    autoplay: true, // Tự động chuyển slide
    pauseOnHover: true,
    autoplaySpeed: 1500, // Thời gian giữa các lần chuyển
  };
  return (
    <div className="partner flex flex-row">
      <Container>
        <Row>
          <Col lg={3}>
            <h4>Các đối tác của D.A.C</h4>
          </Col>
          <Col lg={9}>
            <div className="slide-partner">
              <Slider {...settings}>
                {dataPartner.map((item) => (
                  <div>
                    <img src={item.images} alt={item.title} />
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Partner;
