import React from "react";
import Frontal from "../components/HomeComponent/Frontal";
import Zigzag from "../components/ReuserbleComponents/Zigzag";
import ServicesSection from "../components/ReuserbleComponents/ServicesSection";
import SmallZigzag from "../components/ReuserbleComponents/SmallZigzag";
import Testimonies from "../components/ReuserbleComponents/Testimonies";
import Trustedcustomers from "../components/ReuserbleComponents/Trustedcustomers";
import dynamic from "next/dynamic";

const MessageUsSection = dynamic(
  () => import("../components/ReuserbleComponents/MessageUsSection"),
  { ssr: false }
);
const serviceData = [
  {
    id: "s1",
    title: "Software Development",
    data: "Employing top-tier web and mobile development tools and languages, we engineer flawless and user-friendly websites and web applications tailored for our clients.",
    logo: "/code-circle.png",
    links: "/software-development",
  },
  {
    id: "s2",
    title: "Branding",
    data: "We create visually striking logos and websites, while executing impactful digital marketing campaigns to unleash the full potential of your business.",
    logo: "/ranking.png",
    links: "/Branding",
  },
  {
    id: "s3",
    title: "User Experience Design",
    data: `We engage in user research
    and meticulously synthesize
    the findings, transforming
    them into clear user flows,
    information architectures,
    and interaction prototypes.`,
    logo: "/monitor.png",
    links: "/user-experience",
  },
  {
    id: "s4",
    title: "Web Hosting",
    data: `We provide budget-friendly,
    optimized, secure, and fast web
    hosting services for websites
    and applications, ensuring a
    99% uptime to support the
    growth of your business.`,
    logo: "/cloud-connection.png",
    links: "/web-hosting",
  },
];
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
