"use client";

import React from "react";

import Eshop from "../../../public/images/Website/Ecomerce-shop/image.png";
import Admin from "../../../public/images/Website/Admin/image.png";
import Jshop from "../../../public/images/Website/Jwelry-shop/image.png";
import Card from "../../../components/Card/Card";

const listWeb = [
  {
    url: "https://wiicamp-intern-24-10-beta.vercel.app/",
    image: Eshop,
    title: "Ecommercial Website",
    context:
      "Welcome to E-Shop, where convenience meets choice! Shop effortlessly and explore a diverse range of products tailored to your needs.",
    hastag: ["Ecommerce", "ShopSmartShopOnline", "ShoppingDestination"],
  },
  {
    url: "https://deploy-shop-website.vercel.app/",
    image: Jshop,
    title: "Jewelry Website",
    context:
      "Indulge in elegance at our Jewelry Shop - discover exquisite pieces crafted to adorn your moments with timeless beauty.",
    hastag: ["Jewelry", "AdornWithElegance", "TimelessBeautyInJewels"],
  },
  {
    url: "https://deploy-admin-website.vercel.app/",
    image: Admin,
    title: "Admin Website",
    context: "Manager categories, products ...etc",
    hastag: ["admin", "manager", "order"],
  },
];
const Portfolio = () => {
  return (
    <div className="flex flex-row w-full justify-between flex-wrap">
      {listWeb.map((item, index) => {
        return <Card key={item.title} data={{ ...item, index }} />;
      })}
    </div>
  );
};

export default Portfolio;
