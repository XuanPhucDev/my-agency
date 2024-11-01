import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Benefits.css";
import DataBenefits from "../../../../Context/Data/DataBenefits";
const Benefits = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <div className="Benefits">
      <Container>
        <Row>
          <Col>
            <div className="tagline">
              <h3>Lợi ích của SEO & Digital Marketing</h3>
            </div>
          </Col>
        </Row>
        <div className="content">
          <Row>
            {DataBenefits.map((item, index) => (
              <Col
                key={index}
                onMouseEnter={() => handleMouseEnter(index)} // Khi di chuột vào
                onMouseLeave={handleMouseLeave} // Khi di chuột ra
                className={`${hoveredIndex === index ? "active" : ""}${index === 0 && hoveredIndex === null ? "active": ""}`}
              >
                <a href={item.link}>
                  <div
                    className="case-study flex flex-row"
                    style={{ backgroundImage: `url(${item.images})` }}
                  >
                    <div className="overlay"></div>
                    <div className="content-case">
                      <h4>{item.headline}</h4>
                      <p>{item.content}</p>
                    </div>
                  </div>
                </a>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Benefits;