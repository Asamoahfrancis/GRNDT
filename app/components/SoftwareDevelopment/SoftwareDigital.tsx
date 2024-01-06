"use client";
import React from "react";
import Image from "next/image";
import useWidth from "@/app/hook/useWidth";
const SoftwareDigital = () => {
  const [width] = useWidth(0);
  return (
    <div className="w-full">
      <section className="grid max-w-[1444px] mx-auto grid-cols-1 md:grid-cols-2 px-[10px] md:px-[50px] mt-20">
        <div className="text-sm order-last md:order-first">
          <p className="mt-8 text-textColor mb-3 text-sm">
            SOFTWARE DEVELOPMENT
          </p>
          <p className="text-[30px] text-lightRadientGreen">
            Software Development
          </p>
          <div className="text-textColor">
            <p className=" my-6 text-textColor ">
              At <span className="text-lightRadientGreen">GRNDT</span>, We
              specialize in delivering premier software development solutions
              tailored to empower businesses in the digital landscape. Our
              dedicated team of developers is committed to providing
              high-quality, personalized software solutions that cater to the
              unique requirements of each client.
            </p>
            <p className=" my-6 text-textColor ">
              Our comprehensive suite of software development services spans
              various domains, ensuring effective solutions for diverse business
              needs. Whether you require a bespoke web application, a mobile
              app, or a desktop application, our expertise is poised to bring
              your concepts to fruition. Recognizing the significance of
              user-friendly interfaces and seamless functionality, we endeavor
              to craft intuitive software experiences that captivate users and
              yield tangible results.
            </p>
            <p className=" my-6 text-textColor ">
              We embrace the transformative potential of innovation and
              technology in driving business growth and elevating customer
              experiences. Our highly skilled team of software developers blends
              technical prowess with creative problem-solving, consistently
              delivering exceptional results that surpass client expectations.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          {width >= 768 ? (
            <Image
              src="/softwarepic.png"
              alt="Picture of the author"
              sizes="100vw"
              style={{
                width: "70%",
                height: "auto",
              }}
              width={500}
              height={300}
            />
          ) : (
            <Image
              src="/softwarepic.png"
              alt="Picture of the author"
              sizes="100vw"
              style={{
                width: "90%",
                height: "auto",
              }}
              width={500}
              height={300}
            />
          )}
        </div>
      </section>
      <section className=" my-10 mb-20 md:px-[100px] px-[10px] max-w-[1444px] mx-auto">
        <h1 className=" text-lightRadientGreen text-xl">
          Our Software Development Services
        </h1>
        <section>
          <ul className="ml-8 marker:text-lightRadientGreen marker:text-2xl list-disc pl-5 space-y-6 text-textColor text-sm">
            <li>
              <span className=" text-lightRadientGreen">
                Custom Software Development:
              </span>
              We craft tailored software solutions, starting from scratch and
              aligning them precisely with your specific business requirements.
              Our seasoned developers leverage the latest technologies and
              adhere to industry best practices, ensuring the creation of
              scalable, robust, and secure software applications that enhance
              efficiency and boost productivity.
            </li>

            <li>
              <span className=" text-lightRadientGreen">
                Web Application Development:{" "}
              </span>
              Our range of web application development services spans diverse
              requirements. Whether you seek a robust enterprise web application
              or an engaging customer-facing portal, our team possesses the
              expertise to craft dynamic and responsive web solutions that
              enhance your online presence.
            </li>
            <li>
              <span className=" text-lightRadientGreen">
                Mobile App Development:{" "}
              </span>
              We excel in the creation of mobile applications that captivate
              users, providing seamless experiences across both iOS and Android
              platforms. Throughout the entire process, from conceptualization
              to launch, we collaborate closely with you to comprehend your
              goals and transform them into feature-rich mobile apps that
              effectively engage your target audience.
            </li>
            <li>
              <span className=" text-lightRadientGreen">
                UX/UI Design and Prototyping:{" "}
              </span>
              We hold the belief that outstanding software transcends mere
              functionality; it should offer an immersive and intuitive user
              experience. Our committed design team collaborates seamlessly with
              our developers to craft visually striking interfaces and
              prototypes, aiming to delight users and strengthen your brand
              identity.
            </li>
            <li>
              <span className=" text-lightRadientGreen">
                E-commerce Solutions:{" "}
              </span>
              We recognize the pivotal role e-commerce plays in the contemporary
              business landscape. Our e-commerce solutions empower you to extend
              your reach, boost sales, and offer a delightful shopping
              experience to your customers. From intuitive user interfaces to
              secure payment gateways, we design comprehensive e-commerce
              platforms customized for your specific industry and target market.
            </li>
            <li>
              <span className=" text-lightRadientGreen">CMS Development: </span>
              Simplifying website content management is our expertise. With our
              Content Management System (CMS) development services, you can
              effortlessly take charge of your website. We construct
              user-friendly CMS platforms, facilitating seamless content
              creation, editing, and publishing. This ensures your website
              remains up-to-date and engaging with ease.
            </li>
            <li>
              <span className=" text-lightRadientGreen">
                {" "}
                API Integration:{" "}
              </span>
              Elevate the capabilities of your software systems through the
              seamless integration of third-party APIs. Our specialists excel in
              API integration, facilitating data exchange, automation, and
              unlocking new possibilities for your business.
            </li>
            <li>
              <span className=" text-lightRadientGreen">
                {" "}
                Software Testing and Quality Assurance:{" "}
              </span>
              Excellence is the core of our operations. Through meticulous
              software testing and quality assurance processes, we guarantee a
              thorough examination of your software for functionality,
              performance, security, and compatibility. We spare no effort to
              deliver a dependable and impeccable product.
            </li>
            <li>
              <span className=" text-lightRadientGreen">
                {" "}
                Maintenance and Support:{" "}
              </span>
              Our commitment extends beyond project completion. We offer
              continuous maintenance and support services to keep your software
              up-to-date, secure, and optimized for peak performance. Our
              responsive support team is available around the clock, ensuring
              that your software continues to be a valuable asset to your
              business.
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
};

export default SoftwareDigital;
