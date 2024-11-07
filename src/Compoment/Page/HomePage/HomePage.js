import React, { useState, useEffect } from "react";
import "./HomePage.css";
import Banner from "../Marketing/CategoryMar/Banner";
import Partner from "../Marketing/CategoryMar/Partner";
import About from "../Marketing/CategoryMar/About";
import Popular from "../Marketing/CategoryMar/Popular";
import Vision from "../Marketing/CategoryMar/Vision";
import Benefits from "../Marketing/CategoryMar/Benefits";
import Product from "../Marketing/CategoryMar/Product";
import Timeline from "../Marketing/CategoryMar/Timeline";
import usePageTitle from "../../../Features/TitlePage";
import Feedback from "../Marketing/CategoryMar/Feedback";
import Blog from "../Blog/BlogHomePage";
import ContactHomePage from "../Contact/ContactHomePage";
import FeedbackCustomer from "../Marketing/CategoryMar/Feedback";
const HomePage = () => {
  // usePageTitle("Home Page - Ông Xuân");
  // const textBanner = ["Agency Marketing", "D.A.C"];

  // const [currentText, setCurrentText] = useState("");
  // const [isDeleting, setIsDeleting] = useState(false);
  // const [loopIndex, setLoopIndex] = useState(0);
  // const [charIndex, setCharIndex] = useState(0);
  // const [typingSpeed, setTypingSpeed] = useState(100);
  // useEffect(() => {
  //   const handleTyping = () => {
  //     const fullText = textBanner[loopIndex];

  //     if (!isDeleting) {
  //       // Tiến hành thêm từng ký tự
  //       setCurrentText(fullText.substring(0, charIndex + 1));
  //       setCharIndex(charIndex + 1);
  //       setTypingSpeed(200); // Tốc độ khi thêm ký tự
  //     } else {
  //       // Tiến hành xóa từng ký tự
  //       setCurrentText(fullText.substring(0, charIndex - 1));
  //       setCharIndex(charIndex - 1);
  //       setTypingSpeed(100); // Tốc độ khi xóa ký tự
  //     }

  //     // Khi hoàn tất thêm ký tự, chuyển sang chế độ xóa
  //     if (!isDeleting && charIndex === fullText.length) {
  //       setTimeout(() => setIsDeleting(true), 250); // Đợi 1 giây trước khi xóa
  //     }

  //     // Khi hoàn tất xóa ký tự, chuyển sang chuỗi tiếp theo
  //     if (isDeleting && charIndex === 0) {
  //       setIsDeleting(false);
  //       setLoopIndex(
  //         (prevLoopIndex) => (prevLoopIndex + 1) % textBanner.length
  //       ); // Quay vòng qua các chuỗi
  //     }
  //   };

  //   const typingTimeout = setTimeout(handleTyping, typingSpeed);

  //   // Xóa timeout khi component bị unmount
  //   return () => clearTimeout(typingTimeout);
  // }, [charIndex, isDeleting, loopIndex, textBanner, typingSpeed]);
  return (
    <div className="homepage">
      <Banner></Banner>
      <Partner></Partner>
      <About></About>
      <Popular></Popular>
      <Vision></Vision>
      <Benefits></Benefits>
      <Product></Product>
      <FeedbackCustomer></FeedbackCustomer>
      <Blog></Blog>
      <ContactHomePage></ContactHomePage>
      {/* <Timeline></Timeline> */}
    </div>

    //   <div className="banner">
    //     <div className="background-images"></div>
    //     <div className="overlay"></div>
    //     <div className="text-thumb">
    //       <h3>Welcome To My Shop</h3>
    //       <h2>
    //         We Are {""}
    //         {currentText}
    //         <span className="cursor">|</span>
    //       </h2>
    //       <h3>Enjoy and feelings</h3>
    //       <button>Buy Product In Here</button>
    //     </div>
    //   </div>
    //   <AboutUs></AboutUs>
    //   <InfoProduct></InfoProduct>
  );
};

export default HomePage;
