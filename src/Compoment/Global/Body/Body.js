import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../Page/HomePage/HomePage";
import CategoryProduct from "../../Page/Detail/CategoryProduct";
import Search from "../../Page/Detail/Search";
import Product from "../../Page/Detail/Product";
import Cart from "../../Page/CardProduct/Card";
import Order from "../../Page/Order/Order";
import "./Body.css";
import Category from "../../Page/Marketing/CategoryMar/Category";
import ProductMarketing from "../../Page/Product/ProductMarketing";
import PageCategoryBlog from "../../Page/Blog/PageCategoryBlog";
import Footer from "../Footer/Footer";
import GetInTouch from "../Footer/GetInTouch";
import AboutUs from "../../Page/AboutUs/AboutUs";
const Body = () => {
  return (
    <div className="body-page">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product-category" element={<CategoryProduct />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/search/:searchQuery" element={<Search />}></Route>
        <Route path="/product/:searchQuery" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/thiet-ke-website" element={<Category />}></Route>
        <Route path="/blog" element={<PageCategoryBlog />}></Route>
        <Route path="/product-marketing/:slug" element={<ProductMarketing />}></Route>
      </Routes>
      <GetInTouch></GetInTouch>
      <Footer></Footer>
    </div>
  );
};

export default Body;
