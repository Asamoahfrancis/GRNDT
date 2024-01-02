import React from "react";
import NavBar from "../components/ReuserbleComponents/NavBar";
import Frontal from "../components/HomeComponent/Frontal";
import Zigzag from "../components/ReuserbleComponents/Zigzag";
import ServicesSection from "../components/ReuserbleComponents/ServicesSection";
import SmallZigzag from "../components/ReuserbleComponents/SmallZigzag";
import Testimonies from "../components/ReuserbleComponents/Testimonies";
import Trustedcustomers from "../components/ReuserbleComponents/Trustedcustomers";
import MessageUsSection from "../components/ReuserbleComponents/MessageUsSection";
import Footer from "../components/ReuserbleComponents/Footer";
const Home = () => {
  return (
    <div>
      <Frontal />
      <Zigzag />
      <ServicesSection />
      <SmallZigzag />
      <Testimonies />
      <Trustedcustomers />
      <MessageUsSection />
    </div>
  );
};

export default Home;
