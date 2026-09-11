import Typed from "typed.js";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import photo from "../assets/hero-bg.webp";
import AppProjects from "./AppProjects";
import AnimatedBackground from "../components/AnimatedBackground";

// Import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../index.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Main() {
  const [toggleMenu, setToggleMenu] = useState(false);
  // typed js by react
  const TypedElement = useRef(null);

  useEffect(() => {
    if (!TypedElement.current) return;

    const typed = new Typed(TypedElement.current, {
      strings: ["Developer", "Trainer"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 500,
      loop: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  // Framer Motion
  const cubeRef = useRef(null);

  // استخدام useAnimationFrame لتحديث الدوران
  useAnimationFrame((t) => {
    if (!cubeRef.current) return;

    const rotate = (t / 10) % 360; // دوران مستمر
    cubeRef.current.style.transform = `rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });
  // Swiper
  // const pagination = {
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return '<span class="' + className + '">' + (index + 1) + "</span>";
  //   },
  // };
  // onAutoplayTimeLeft
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div>
    <AnimatedBackground/>
      {/* start header  */}
      <header className=" mx-auto flex shadow-[0px_4px_16px_rgba(17,_17,_26,_0.1),_0px_8px_32px_rgba(17,_17,_26,_0.05)] py-4   bg-primary font-[sans-serif] min-h-[75px] tracking-wide relative z-50">
        <div className="container mx-auto px-3 flex flex-wrap items-center gap-5 ">
          <a href="https://mahmoud-abdelkarim777.github.io/PRODIGY_WD_04_Portfolio/">
            <p className="text-2xl font-bold text-white">
              MAHMOUD
              <span className="text-2xl font-bold text-redDark">.JS</span>
            </p>
          </a>

          <div
            id="collapseMenu"
            className={`${
              toggleMenu ? null : "hidden"
            } lg:!flex lg:ml-auto max-lg:before:fixed max-lg:before:bg-white max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
          >
            <button
              onClick={() => {
                setToggleMenu(!toggleMenu);
              }}
              id="toggleClose"
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            <ul className="lg:flex gap-4 max-lg:space-y-3 max-lg:fixed max-lg:bg-primary max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className="mb-6 hidden max-lg:block">
                <a href="https://mahmoud-abdelkarim777.github.io/PRODIGY_WD_04_Portfolio/">
                  <p className="text-2xl font-bold text-white">
                    MAHMOUD
                    <span className="text-2xl font-bold text-redDark">.JS</span>
                  </p>
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="#home"
                  className="hover:text-redDark text-[#aaa] font-semibold block text-[15px] swinging-animation-a-1 "
                >
                  Home
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="#about"
                  className="hover:text-redDark text-[#aaa] font-semibold block text-[15px] swinging-animation-a-2 "
                >
                  About
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="#skills"
                  className="hover:text-redDark text-[#aaa] font-semibold block text-[15px] swinging-animation-a-3"
                >
                  Skills
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="#services"
                  className="hover:text-redDark text-[#aaa] font-semibold block text-[15px] swinging-animation-btn-1"
                >
                  Services
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="#projects"
                  className="hover:text-redDark text-[#aaa] font-semibold block text-[15px] swinging-animation-btn-2"
                >
                  Projects
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="#contact"
                  className="hover:text-redDark text-[#aaa] font-semibold block text-[15px] swinging-animation-btn-3"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center max-lg:ml-auto space-x-4">
            <button
              id="toggleOpen"
              onClick={() => {
                setToggleMenu(!toggleMenu);
              }}
              className="lg:hidden"
            >
              <svg
                className="w-7 h-7"
                fill="#dc3545"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      {/* end header  */}
      <main className="relative z-10" >
        {/* start hero section  */}
        <section
          id="home"
          className="bg-secondary bg-opacity-95  flex flex-col md:flex-row items-center py-4"
        >
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center container mx-auto px-3">
            <div>
              <p className="text-white font-medium mb-4 ">
                Hi there, I am <br />{" "}
                <p className="text-white text-3xl md:text-4xl font-medium zoom-animation">
                  Mahmoud Abdelkarim
                </p>
              </p>
              <p className="text-2xl text-white font-medium">
                I &apos;m a Front-End{" "}
                <span className="text-redDark" ref={TypedElement}></span>
              </p>
              <p className="text-[#aaa] my-4">
                Need a professional web developer? <br /> You&apos;ve come to
                the best place.
              </p>
              <div>
                <a
                  href="/Mahmoud-Abdelkarim-Khalaf-Resume.pdf"
                  download
                  className="swinging-animation-btn hover:-translate-y-2 transition-all duration-500 px-4 py-2 inline-block h-[40px] bg-btn2 hover:bg-white hover:text-btn2 text-white font-semibold rounded-lg me-3"
                >
                  Download CV
                </a>
                <a
                  href="#contact"
                  className="swinging-animation-a hover:-translate-y-2 transition-all duration-500 px-4 py-2 inline-block h-[40px] bg-btn hover:bg-white hover:text-btn text-white font-semibold rounded-lg"
                >
                  Let&apos;s Talk
                </a>
              </div>
            </div>
            {/*  Framer Motion  */}
            <div className="hidden md:block">
              <div className="scene">
                <motion.div ref={cubeRef} className="cube">
                  <div className="side front">React</div>
                  <div className="side back">Java Script</div>
                  <div className="side left">Git & Github</div>
                  <div className="side right">Tailwind css</div>
                  <div className="side top">Bootstrap</div>
                  <div className="side bottom">Css</div>
                </motion.div>
                {/* الأنماط الخاصة بالمكعب */}
                <style>
                  {`
                  .scene {
                    width: 200px;
                    height: 200px;
                    perspective: 600px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 50px auto;
                  }

                  .cube {
                    width: 100px;
                    height: 100px;
                    position: relative;
                    transform-style: preserve-3d;
                  }

                  .side {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background: rgba(255, 0, 0, 0.7);
                    border: 1px solid white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    color: white;
                  }

                  .front { transform: rotateY(0deg) translateZ(50px); background: rgba(255, 0, 0, 0.7); }
                  .back { transform: rotateY(180deg) translateZ(50px); background: rgba(0, 255, 0, 0.7); }
                  .left { transform: rotateY(-90deg) translateZ(50px); background: rgba(0, 0, 255, 0.7); }
                  .right { transform: rotateY(90deg) translateZ(50px); background: rgba(255, 255, 0, 0.7); }
                  .top { transform: rotateX(90deg) translateZ(50px); background: rgba(255, 0, 255, 0.7); }
                  .bottom { transform: rotateX(-90deg) translateZ(50px); background: rgba(0, 255, 255, 0.7); }
                `}
                </style>
              </div>
            </div>
            {/*  Framer Motion */}
            <div className="flex flex-row md:flex-col gap-8 md:gap-2 justify-center mt-4">
              <a
                href="https://github.com/Mahmoud-Abdelkarim777"
                className="swinging-animation-btn"
              >
                <i className="fa-brands fa-github text-red-400 text-2xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mahmoud-abdelkarim-%F0%9F%87%B5%F0%9F%87%B8-487452229/"
                className="zoom-animation"
              >
                <i className="fa-brands fa-linkedin text-red-400 text-2xl"></i>
              </a>
              <a
                href="mailto:mabdelkarimkhalaf777@gmail.com"
                className="swinging-animation-a"
              >
                <i className="fa-regular fa-envelope text-red-400 text-2xl"></i>
              </a>
            </div>
          </div>
        </section>
        {/* end hero section  */}
        {/* start about section  */}
        <section id="about" className="bg-primary py-16">
          <div className="container px-3 mx-auto ">
            <div className="relative">
              <div
                className="flex flex-col justify-center items-center after:content-['About-Me'] 
            after:text-6xl after:w-[320px] after:absolute after:bottom-10 after:left-1/2 after:-translate-x-1/2 
            after:opacity-5 after:text-white after:uppercase after:text-transparent after-text-stroke"
              >
                <h1 className="text-4xl text-white font-semibold fade-in-up animate-delay animate-slide-up">
                  About Me
                </h1>
                <p className="text-white text-lg font-semibold">Get To Know</p>
                <p className="text-center flex justify-center bg-redDark h-1 w-[100px] mt-1"></p>
              </div>
            </div>
            <div className="content">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div>
                  <img src={photo} alt="personal photo" />
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-white text-left">
                    Hello there, <br /> My name is{" "}
                    <span className="font-bold text-redDark">
                      Mahmoud Abdelkarim
                    </span>
                    , I&apos;m a React.js frontend web developer. <br /> During
                    this duration, i have learned a lot of technologies like
                    crud, created many cool website projects. <br /> So i&apos;m
                    always seeking to have an opportunity that matches my
                    skills, to make the best use of all that i have learned.
                  </p>
                  <a
                    href="#contact"
                    className="px-4 py-2 inline-block h-[40px] 
                  bg-btn hover:bg-white hover:text-btn text-white 
                  font-semibold rounded-lg mt-8 hover:-translate-y-2 transition-all duration-500"
                  >
                    Let&apos;s Talk
                  </a>
                </div>
              </div>
              <div className="mt-4">
                <p className="my-4 bg-btn text-white inline-block w-44 text-center py-2 rounded-lg font-bold">
                  WORK EXPERIENCE
                </p>
                <ul className="list-inside [list-style-type:circle] text-lg text-white">
                  <li>
                    Internship as front-End Developer ReactJs at{" "}
                    <a
                      href="https://www.ejada.com/"
                      className="font-bold text-redDark hover:text-white"
                      target="_blank"
                    >
                      Ejada
                    </a>{" "}
                    company (FullTime - Remote) (May 2024 - August 2024).
                  </li>
                  <li>
                    Internship as front-End Developer at{" "}
                    <a
                      href="https://iti.gov.eg/home"
                      className="font-bold text-redDark hover:text-white"
                      target="_blank"
                    >
                      ITI
                    </a>{" "}
                    (HTML &amp; CSS) (Feb 2024 ) .
                  </li>
                  <li>
                    Internship as front end at{" "}
                    <a
                      href="https://www.linkedin.com/company/prodigy-infotech/posts/?feedView=all"
                      className="font-bold text-redDark hover:text-white"
                      target="_blank"
                    >
                      Prodigy info tech
                    </a>{" "}
                    company ( Remote) ( 1th September 2024 - Present).
                  </li>
                  <li>
                    Training front end in{" "}
                    <a
                      href="https://www.linkedin.com/company/msp-tech-club-al-azhar-university/posts/?feedView=all"
                      className="font-bold text-redDark hover:text-white"
                      target="_blank"
                    >
                      {" "}
                      MSP Tech Club
                    </a>{" "}
                    - Al Azhar University (2023).
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <p className="my-4 bg-btn text-white inline-block w-44 text-center py-2 rounded-lg font-bold">
                  EDUCATION
                </p>
                <ul className="list-inside [list-style-type:circle] text-lg text-white">
                  <li className="text-lg">
                    Graduated from Faculty of computers and information Assiut
                    University{" "}
                    <a href="https://www.eelu.edu.eg/" target="_blank">
                      ({" "}
                      <span className="text-redDark hover:text-white font-bold">
                        EELU
                      </span>{" "}
                      )
                    </a>{" "}
                    (2020 - 2024).
                  </li>
                  <li className="text-lg">
                    Graduation Project ( A+ ), Gold Price Prediction.
                  </li>
                  <li className="text-lg">GPA 3.17 out of 4 ( B- ), Good.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* end about section  */}
        {/* start skills section  */}
        <section id="skills" className="bg-secondary py-16">
          <div className="container px-3 mx-auto text-center">
            <div className="relative">
              <div
                className="flex flex-col justify-center items-center after:content-['My-Skills'] 
            after:text-6xl after:w-[320px] after:absolute after:bottom-10 after:left-1/2 after:-translate-x-1/2 after:opacity-5 after:text-white after:uppercase after:text-transparent after-text-stroke"
              >
                <h1 className="text-4xl text-white font-semibold fade-in-up animate-delay animate-slide-up">
                  My Skills
                </h1>
                <p className="text-white text-lg font-semibold">
                  What Skills I Have
                </p>
                <p className="text-center flex justify-center bg-redDark h-1 w-[100px] mt-1"></p>
              </div>
            </div>
            <div className="content mt-4">
              <Swiper
                breakpoints={{
                  320: {
                    slidesPerView: 1, // شاشة صغيرة
                  },
                  768: {
                    slidesPerView: 3, // شاشة متوسطة
                  },
                  1024: {
                    slidesPerView: 5, // شاشة كبيرة
                  },
                }}
                spaceBetween={30}
                loop={true}
                centeredSlides={true}
                speed={500}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                // pagination={pagination}
                // modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide className="bg-primary">
                  <span className="rounded p-3 flex items-center justify-center">
                    <svg
                      stroke="currentColor"
                      fill="#dc3545"
                      strokeWidth="0"
                      viewBox="0 0 384 512"
                      height="4rem"
                      width="4rem"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path>
                    </svg>
                  </span>
                  <p className="text-white">HTML5</p>
                </SwiperSlide>
                <SwiperSlide className="bg-primary">
                  <span className="rounded p-3 flex items-center justify-center">
                    <svg
                      stroke="currentColor"
                      fill="#dc3545"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="4rem"
                      width="4rem"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"></path>
                    </svg>
                  </span>
                  <p className="text-white">CSS3</p>
                </SwiperSlide>
                <SwiperSlide className="bg-primary">
                  <span className="rounded p-3 flex items-center justify-center">
                    <svg
                      stroke="currentColor"
                      fill="#dc3545"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="4rem"
                      width="4rem"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path>
                    </svg>
                  </span>
                  <p className="text-white">Java Scriipt</p>
                </SwiperSlide>
                <SwiperSlide className="bg-primary">
                  <span className="rounded p-3 flex items-center justify-center">
                    <svg
                      stroke="#dc3545"
                      fill="#dc3545"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="4rem"
                      width="4rem"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"></path>
                      <path d="M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2"></path>
                      <path
                        fill="#dc3545"
                        stroke="#011627"
                        d="M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z"
                      ></path>
                    </svg>
                  </span>
                  <p className="text-white">Bootstrap5</p>
                </SwiperSlide>
                <SwiperSlide className="bg-primary">
                  <span className="rounded p-3 flex items-center justify-center">
                    <svg
                      stroke="currentColor"
                      fill="#dc3545"
                      strokeWidth="0"
                      role="img"
                      viewBox="0 0 24 24"
                      height="4rem"
                      width="4rem"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title></title>
                      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                    </svg>
                  </span>
                  <p className="text-white">Tailwind CSS</p>
                </SwiperSlide>
                <SwiperSlide className="bg-primary">
                  <span className="rounded p-3 flex items-center justify-center">
                    <svg
                      stroke="currentColor"
                      fill="#dc3545"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="4rem"
                      width="4rem"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m21.62 11.108-8.731-8.729a1.292 1.292 0 0 0-1.823 0L9.257 4.19l2.299 2.3a1.532 1.532 0 0 1 1.939 1.95l2.214 2.217a1.53 1.53 0 0 1 1.583 2.531c-.599.6-1.566.6-2.166 0a1.536 1.536 0 0 1-.337-1.662l-2.074-2.063V14.9c.146.071.286.169.407.29a1.537 1.537 0 0 1 0 2.166 1.536 1.536 0 0 1-2.174 0 1.528 1.528 0 0 1 0-2.164c.152-.15.322-.264.504-.339v-5.49a1.529 1.529 0 0 1-.83-2.008l-2.26-2.271-5.987 5.982c-.5.504-.5 1.32 0 1.824l8.731 8.729a1.286 1.286 0 0 0 1.821 0l8.69-8.689a1.284 1.284 0 0 0 .003-1.822"></path>
                    </svg>
                  </span>
                  <p className="text-white">GIT</p>
                </SwiperSlide>
                <SwiperSlide className="bg-primary">
                  <span className="rounded p-3 flex items-center justify-center">
                    <svg
                      stroke="currentColor"
                      fill="#dc3545"
                      strokeWidth="0"
                      viewBox="0 0 496 512"
                      height="4rem"
                      width="4rem"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </span>
                  <p className="text-white">Github</p>
                </SwiperSlide>
                <SwiperSlide className="bg-primary">
                  <span className="rounded p-3 flex items-center justify-center">
                    <svg
                      stroke="currentColor"
                      fill="#dc3545"
                      strokeWidth="0"
                      viewBox="0 0 320 512"
                      height="4rem"
                      width="4rem"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path>
                    </svg>
                  </span>
                  <p className="text-white">Responsive Design</p>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                  <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                  </svg>
                  <span ref={progressContent}></span>
                </div>
              </Swiper>
            </div>
          </div>
        </section>
        {/* end skills section  */}
        {/* start Services section  */}
        <section id="services" className="bg-primary py-16">
          <div className="container px-3 mx-auto  text-center">
            <div className="relative">
              <div
                className="flex flex-col justify-center items-center after:content-['Services'] 
            after:text-6xl after:w-[320px] after:absolute after:bottom-10 after:left-1/2 after:-translate-x-1/2 after:opacity-5 after:text-white after:uppercase after:text-transparent after-text-stroke"
              >
                <h1 className="text-4xl text-white font-semibold fade-in-up animate-delay animate-slide-up">
                  Services
                </h1>
                <p className="text-white text-lg font-semibold">What I offer</p>
                <p className="text-center flex justify-center bg-redDark h-1 w-[100px] mt-1"></p>
              </div>
            </div>
            <div className="content">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <article className="flex items-center gap-4 p-3">
                  <i className="fa-solid fa-circle-check text-redDark"></i>
                  <p className="font-bold text-lg text-white">Web Design</p>
                </article>
                <article className="flex items-center gap-4 p-3">
                  <i className="fa-solid fa-circle-check text-redDark"></i>
                  <p className="font-bold text-lg text-white">Landing Page</p>
                </article>
                <article className="flex items-center gap-4 p-3">
                  <i className="fa-solid fa-circle-check text-redDark"></i>
                  <p className="font-bold text-lg text-white">
                    Responsive Design
                  </p>
                </article>
                <article className="flex items-center gap-4 p-3">
                  <i className="fa-solid fa-circle-check text-redDark"></i>
                  <p className="font-bold text-lg text-white">Dashboard</p>
                </article>
                <article className="flex items-center gap-4 p-3">
                  <i className="fa-solid fa-circle-check text-redDark"></i>
                  <p className="font-bold text-lg text-white">E-commerce</p>
                </article>
                <article className="flex items-center gap-4 p-3">
                  <i className="fa-solid fa-circle-check text-redDark"></i>
                  <p className="font-bold text-lg text-white">Owl Carousel</p>
                </article>
                <article className="flex items-center gap-4 p-3">
                  <i className="fa-solid fa-circle-check text-redDark"></i>
                  <p className="font-bold text-lg text-white">
                    Dealing with API
                  </p>
                </article>
                <article className="flex items-center gap-4 p-3">
                  <i className="fa-solid fa-circle-check text-redDark"></i>
                  <p className="font-bold text-lg text-white">form Submit</p>
                </article>
              </div>
            </div>
          </div>
        </section>
        {/* end Services section  */}
        {/* start Projects section  */}
        <section id="projects" className="bg-primary py-16">
          <div className="container px-3 mx-auto  text-center">
            <div className="relative">
              <div
                className="flex flex-col justify-center items-center after:content-['Projects'] 
            after:text-6xl after:w-[320px] after:absolute after:bottom-10 after:left-1/2 after:-translate-x-1/2 after:opacity-5 after:text-white after:uppercase after:text-transparent after-text-stroke"
              >
                <h1 className="text-4xl text-white font-semibold fade-in-up animate-delay animate-slide-up">
                  Projects
                </h1>
                <p className="text-white text-lg font-semibold">
                  My Recent Work
                </p>
                <p className="text-center flex justify-center bg-redDark h-1 w-[100px] mt-1"></p>
              </div>
            </div>
            <div>
              <AppProjects />
            </div>
            <div className="text-center mt-5">
              <a
                href="https://github.com/Mahmoud-Abdelkarim777"
                target="_blank"
                className=" transition-all duration-500 bg-btn  
            text-white border-2 border-white hover:bg-white hover:text-btn 
            font-bold p-2  rounded-lg"
              >
                View more
              </a>
            </div>
          </div>
        </section>
        {/* end Projects section  */}
        
        {/* start Contact me section  */}
        <section id="contact" className="bg-secondary py-16">
          <div className="container px-3 mx-auto text-center">
            <div className="relative">
              <div
                className="flex flex-col justify-center items-center after:content-['Contact'] 
            after:text-6xl after:w-[320px] after:absolute after:bottom-10 after:left-1/2 after:-translate-x-1/2 after:opacity-5 after:text-white after:uppercase after:text-transparent after-text-stroke"
              >
                <h1 className="text-4xl text-white font-semibold fade-in-up animate-delay animate-slide-up">
                  Contact Me
                </h1>
                <p className="text-white text-lg font-semibold">Get In Touch</p>
                <p className="text-center flex justify-center bg-redDark h-1 w-[100px] mt-1"></p>
              </div>
            </div>
            <div className="conten mt-4">
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col justify-between items-center">
                  <div
                    className="text-center bg-secondary rounded-lg py-3 
                    hover:bg-subSecondary border hover:border-main 
                    transition-all duration-500 ease-in-out mb-5 
                    w-full h-1/2 md:w-3/4 
                    flex flex-col items-center justify-center gap-3"
                  >
                    <div className="text-white">
                      <i className="text-3xl font-bold  fa-brands fa-whatsapp text-main"></i>
                    </div>
                    <p className="text-lg font-bold text-white">whats App</p>
                    <p className="text-lg font-bold text-white">
                      +201018253715
                    </p>
                    <a href="https://wa.me/201018253715" target="_blank">
                      <p className="text-lg font-bold text-main hover:text-black text-white">
                        Send a message
                      </p>
                    </a>
                  </div>
                  <div
                    className="text-center bg-secondary rounded-lg py-3 
                    hover:bg-subSecondary border hover:border-main 
                    transition-all duration-500 ease-in-out 
                    w-full h-1/2 md:w-3/4
                    flex flex-col items-center justify-center gap-3"
                  >
                    <div className="text-white">
                      <i className="text-3xl font-bold fa-brands fa-linkedin text-main"></i>
                    </div>
                    <p className="text-lg font-bold text-white">Linked In</p>
                    <p className="text-lg font-bold text-white">
                      Mahmoud Abdelkarim 🇵🇸
                    </p>
                    <a
                      href="https://www.linkedin.com/in/mahmoud-abdelkarim-%F0%9F%87%B5%F0%9F%87%B8-487452229/"
                      target="_blank"
                    >
                      <p className="text-lg font-bold text-white hover:text-black">
                        Send a message
                      </p>
                    </a>
                  </div>
                </div>
                <div>
                  <form
                    id="contactForm"
                    action="https://formsubmit.co/0cbcf501944e0b0f4c6ae2be89d781d2"
                    method="POST"
                    className="w-full"
                    target="_blank"
                  >
                    <input
                      type="hidden"
                      name="_subject"
                      value="New submission!"
                    />
                    <input
                      type="hidden"
                      name="_blacklist"
                      value="spammy pattern, banned term, phrase"
                    />
                    <input type="hidden" name="_captcha" value="false" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Full Name"
                      className="border border-main p-3 mb-3 rounded-lg w-full bg-secondary text-white"
                      required=""
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      className="border border-main p-3 mb-3 rounded-lg w-full bg-secondary text-white"
                      required=""
                    />
                    <textarea
                      name="message"
                      id="message"
                      rows="7"
                      placeholder="Your Message"
                      className="border border-main p-3 mb-3 rounded-lg w-full bg-secondary text-white"
                      required=""
                    />
                    <input
                      type="submit"
                      value="Send Msg to Gmail"
                      className="bg-btn hover:-translate-y-2 transition-all duration-500 text-white hover:text-btn hover:bg-white border border-main font-bold p-3 rounded-lg cursor-pointer"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end Contact me section  */}
        <div className="border border-main w-72 p-3 rounded-3xl bg-secondary opacity-70 fixed z-20 bottom-3 left-1/2 -translate-x-1/2">
          <ul className="flex justify-around items-center">
            <li>
              <a href="#home" className="active">
                <i className="fa-solid fa-house font-bold text-lg text-white hover:text-redDark"></i>
              </a>
            </li>
            <li>
              <a href="#about" className="active">
                <i className="fa-solid fa-user-large font-bold text-lg text-white hover:text-redDark"></i>
              </a>
            </li>
            <li>
              <a href="#skills" className="active">
                <i className="fa-solid fa-layer-group font-bold text-lg text-white hover:text-redDark"></i>
              </a>
            </li>
            <li>
              <a href="#services" className="active">
                <i className="fa-solid fa-taxi font-bold text-lg text-white hover:text-redDark"></i>
              </a>
            </li>
            <li>
              <a href="#projects" className="active">
                <i className="fa-solid fa-book font-bold text-lg text-white hover:text-redDark"></i>
              </a>
            </li>
            <li>
              <a href="#contact" className="active">
                <i className="fa-solid fa-address-card font-bold text-lg text-white hover:text-redDark"></i>
              </a>
            </li>
          </ul>
        </div>
      </main>
      {/* start Footer section  */}
      <footer className="relative z-10 w-full bg-primary p-2 pt-10 fade-in-up-footer animate-footer animate-delay">
        <div className="text-center">
          <p className="font-bold text-3xl my-5 cursor-pointer text-redDark">
            <span className="text-white hover:text-redDark ">MAHMOUD</span>.JS
          </p>
          <ul className="flex flex-col md:flex-row justify-center items-center gap-6 mb-5">
            <li>
              <a
                href="#home"
                className="font-bold text-lg text-[#aaa] hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="font-bold text-lg hover:text-white text-[#aaa]"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="font-bold text-lg hover:text-white text-[#aaa]"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="font-bold text-lg hover:text-white text-[#aaa]"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="font-bold text-lg hover:text-white text-[#aaa]"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="font-bold text-lg hover:text-white text-[#aaa]"
              >
                Contact Us
              </a>
            </li>
          </ul>
          <div className="mb-5">
            <ul className="flex justify-center items-center gap-5">
              <li>
                <a
                  href="https://www.linkedin.com/in/mahmoud-abdelkarim-%F0%9F%87%B5%F0%9F%87%B8-487452229/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin font-bold text-lg text-[#aaa] hover:text-white rounded-lg"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Mahmoud-Abdelkarim777"
                  target="_blank"
                >
                  <i className="fa-brands fa-github font-bold text-lg text-[#aaa] hover:text-white rounded-2xl"></i>
                </a>
              </li>
              <li>
                <a
                  href="mailto:mabdelkarimkhalaf777@gmail.com?subject=Hello&amp;body=I wanted to reach out to you."
                  target="_blank"
                >
                  <i className="fa-solid fa-envelope font-bold text-lg text-[#aaa] hover:text-white rounded-2xl"></i>
                </a>
              </li>
            </ul>
          </div>
          <p className="mb-20 font-bold text-white">
            © 2024 Mahmoud. All Rights Reserved.
          </p>
        </div>
      </footer>
      {/* end Footer section  */}
    </div>
  );
}
