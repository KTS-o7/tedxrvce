/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import tanuJain from "./../assets/images/speakers/tanu_jain.jpg";
import dhainu from "./../assets/images/speakers/dd.jpg";
import sampada from "./../assets/images/speakers/ssg.jpeg";
import prashant from "./../assets/images/speakers/pp.jpg";
import nitish from "./../assets/images/speakers/nm.jpeg";
import vivek from "./../assets/images/speakers/vs.jpg";

import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import Crousel from "./Carousel";
import { Link } from "react-router-dom";
import Speakers from "./Speakers";

const information =
  "Tanu Jain is a 2015 batch IAS officer. After becoming an IAS officer, she continued her social service works as well as motivational speaking sessions. Recently, Tanu Jain decided to quit her job as an IAS officer and become a full-time teacher.";

function HomePageCarousal() {
  const [slides, setSlides] = useState(1);
  const [height, setHeight] = useState(100);
  const screenWidth = window.innerWidth;

  useEffect(() => {
    if (screenWidth < 768) {
      setSlides(1);
      setHeight(50);
    } else if (screenWidth < 667) {
      setSlides(1);
      setHeight(10);
    }
  }, [screenWidth]);

  // Create refs for navigation buttons
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  return (
    <>
      <div className="max-h-[4000px] h-full w-full pb-44">
        <div className="bg-red-600 flex justify-center items-center md:h-32 h-14 w-full">
          <h1 className="md:text-5xl text-2xl font-bold text-white px-8 tracking-widest font-serif">
            SPEAKERS
          </h1>
        </div>

        <Swiper
          className="flex items-center flex-row justify-center"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={slides}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          navigation={true}
          modules={[EffectCoverflow, Autoplay, Navigation]}
        >
          {/* Sudhir Kumar Mishra */}
          <SwiperSlide className="flex justify-center">
            <div className="flex flex-col justify-center md:mb-10 pb-7 ">
              <div className="h-[460px] rounded-full w-[850px] absolute z-0 bg-red-600 md:block hidden"></div>
              <div className="md:h-[450px]  md:w-[850px] z-10 flex md:gap-44 md:my-12 my-8 md:mx-0 mx-3  border-2 border-red-600 rounded-2xl relative">
                <div className="md:w-[850px] flex md:gap-4 rounded-2xl bg-zinc-900 p-3 md:flex-row flex-col">
                  <div className="overflow-hidden rounded-xl md:w-1/2 md:none md:block hidden">
                    <div className="h-full w-full rounded-xl md:overflow-hidden img-bghover img-bg2"></div>
                  </div>

                  <div className="md:hidden flex justify-center items-center rounded-xl">
                    <img
                      src="https://www.brahmos.com/images/gallery/sudhir-mishra-1-aug-2014.jpg"
                      alt="tanu"
                      className="object-cover"
                    />
                  </div>

                  <div className="md:w-1/2 flex flex-col justify-between gap-3 p-3 ">
                    <h1 className="md:text-3xl text-2xl font-semibold md:text-left text-center font-serif md:bg-zinc-900 bg-red-600 ">
                      Sudhir Kumar Mishra
                    </h1>
                    <p className="md:text-left text-center mt-3">
                      Sudhir Kumar Mishra, a distinguished Indian engineer,
                      defense scientist, and dedicated civil servant, currently
                      holds the esteemed position of Director General at the
                      Defence Research & Development Organisation. Additionally,
                      he serves as the Chief Executive Officer and Managing
                      Director of BrahMos Aerospace, a renowned joint venture
                      between the defense ministries of India and Russia.
                    </p>
                    <div className="flex z-20 gap-6 md:justify-between md:w-[50%] justify-center md:h-auto mt-3">
                      <a
                        href="https://twitter.com/sudhirmishraone?lang=en"
                        rel="noreferrer "
                        target="_blank"
                      >
                        <button className="Btn4">
                          <span className="svgContainer4">
                            <svg
                              viewBox="0 0 512 512"
                              height="1.7em"
                              xmlns="http://www.w3.org/2000/svg"
                              className="svgIcon"
                              fill="black"
                            >
                              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                            </svg>
                          </span>
                          <span className="BG4" />
                        </button>
                      </a>
                    </div>

                    <Link to="/tanujain">
                      <button className="button w-full mt-1 mb-3">
                        <span className="button_lg">
                          <span className="button_sl" />
                          <span className="button_text">More Information</span>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Dhianu Das */}
          <SwiperSlide className="flex justify-center">
            <div className="flex flex-col justify-center md:mb-10 pb-7 ">
              <div className="h-[460px] rounded-full w-[850px] absolute z-0 bg-red-600 md:block hidden"></div>
              <div className="md:h-[450px]  md:w-[850px] z-10 flex md:gap-44 md:my-12 my-8 md:mx-0 mx-3  border-2 border-red-600 rounded-2xl relative">
                <div className="md:w-[850px] flex md:gap-4 rounded-2xl bg-zinc-900 p-3 md:flex-row flex-col">
                  <div className="overflow-hidden rounded-xl md:w-1/2 md:none md:block hidden">
                    <div className="h-full w-full rounded-xl md:overflow-hidden img-bghover img-bg3"></div>
                  </div>

                  <div className="md:hidden flex justify-center items-center rounded-xl">
                    <img src={dhainu} alt="tanu" className="object-cover" />
                  </div>

                  <div className="md:w-1/2 flex flex-col justify-between gap-3 p-3 ">
                    <h1 className="md:text-3xl text-2xl font-semibold md:text-left text-center font-serif md:bg-zinc-900 bg-red-600 ">
                      Dhianu Das
                    </h1>
                    <p className="md:text-left text-center mt-3">
                      Mr. Dhainu Das is a distinguished business leader, serial
                      entrepreneur, and investor renowned for his commitment to
                      empowering startups and entrepreneurs across India. With a
                      wealth of experience in investment, operations, strategy,
                      and development, Das has mentored numerous startups to
                      success while leading major business turnarounds and
                      establishing new ventures.
                    </p>
                    <div className="flex z-20 gap-6 md:justify-between md:w-[50%] justify-center md:h-auto mt-3">
                      <a
                        href="https://www.linkedin.com/in/dhianu/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in"
                        rel="noreferrer "
                        target="_blank"
                      >
                        <button className="Btn3">
                          <span className="svgContainer3">
                            <svg
                              viewBox="0 0 448 512"
                              height="1.6em"
                              xmlns="http://www.w3.org/2000/svg"
                              className="svgIcon"
                              fill="white"
                            >
                              <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                            </svg>
                          </span>
                          <span className="BG3" />
                        </button>
                      </a>

                      <a
                        href="https://twitter.com/AgilityVenture"
                        rel="noreferrer "
                        target="_blank"
                      >
                        <button className="Btn4">
                          <span className="svgContainer4">
                            <svg
                              viewBox="0 0 512 512"
                              height="1.7em"
                              xmlns="http://www.w3.org/2000/svg"
                              className="svgIcon"
                              fill="black"
                            >
                              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                            </svg>
                          </span>
                          <span className="BG4" />
                        </button>
                      </a>
                    </div>

                    <Link to="/tanujain">
                      <button className="button w-full mt-1 mb-3">
                        <span className="button_lg">
                          <span className="button_sl" />
                          <span className="button_text">More Information</span>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Tanu Jain */}
          <SwiperSlide className="flex justify-center">
            <div className="flex flex-col justify-center md:mb-10 pb-7 ">
              <div className="h-[460px] rounded-full w-[850px] absolute z-0 bg-red-600 md:block hidden"></div>
              <div className="md:h-[450px]  md:w-[850px] z-10 flex md:gap-44 md:my-12 my-8 md:mx-0 mx-3  border-2 border-red-600 rounded-2xl relative">
                <div className="md:w-[850px] flex md:gap-4 rounded-2xl bg-zinc-900 p-3 md:flex-row flex-col">
                  <div className="overflow-hidden rounded-xl md:w-1/2 md:none md:block hidden">
                    <div className="h-full w-full rounded-xl md:overflow-hidden img-bghover img-bg"></div>
                  </div>

                  <div className="md:hidden flex justify-center items-center rounded-xl">
                    <img src={tanuJain} alt="tanu" className="object-fill" />
                  </div>

                  <div className="md:w-1/2 flex flex-col justify-between gap-3 p-3 ">
                    <h1 className="md:text-3xl text-2xl font-semibold md:text-left text-center font-serif md:bg-zinc-900 bg-red-600 ">
                      Tanu Jain
                    </h1>
                    <p className="md:text-left text-center mt-3">
                      In the poetic rhythm of life, she gracefully embraces a
                      multitude of roles crafting smiles in the realm of
                      dentistry, skillfully navigates diverse bureaucratic
                      landscapes and engages as a speculative thinker, exploring
                      the intricate tapestry of existence with contemplative
                      depth.In her role as a Mock Interview panelist, speaker,
                      wordsmith and contemplative mind, she intricately spins
                      her tale.
                    </p>
                    <div className="flex z-20 gap-6 md:justify-between md:w-[50%] justify-center md:h-auto mt-3">
                      <a
                        href="https://www.instagram.com/dr.tanujain/"
                        rel="noreferrer "
                        target="_blank"
                      >
                        <button className="Btn1 ">
                          <span className="svgContainer1">
                            <svg
                              fill="white"
                              className="svgIcon"
                              viewBox="0 0 448 512"
                              height="1.5em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                          </span>
                          <span className="BG1" />
                        </button>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/dr-tanu-jain-4aa28a131"
                        rel="noreferrer "
                        target="_blank"
                      >
                        <button className="Btn3">
                          <span className="svgContainer3">
                            <svg
                              viewBox="0 0 448 512"
                              height="1.6em"
                              xmlns="http://www.w3.org/2000/svg"
                              className="svgIcon"
                              fill="white"
                            >
                              <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                            </svg>
                          </span>
                          <span className="BG3" />
                        </button>
                      </a>

                      <a
                        href="https://twitter.com/DrTanuJain1"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <button className="Btn4">
                          <span className="svgContainer4">
                            <svg
                              viewBox="0 0 512 512"
                              height="1.7em"
                              xmlns="http://www.w3.org/2000/svg"
                              className="svgIcon"
                              fill="black"
                            >
                              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                            </svg>
                          </span>
                          <span className="BG4" />
                        </button>
                      </a>
                    </div>

                    <Link to="/tanujain">
                      <button className="button w-full mt-1 mb-3">
                        <span className="button_lg">
                          <span className="button_sl" />
                          <span className="button_text">More Information</span>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Sampada Singh Gurjar */}
          <SwiperSlide className="flex justify-center">
            <div className="flex flex-col justify-center md:mb-10 pb-7 ">
              <div className="h-[460px] rounded-full w-[850px] absolute z-0 bg-red-600 md:block hidden"></div>
              <div className="md:h-[450px]  md:w-[850px] z-10 flex md:gap-44 md:my-12 my-8 md:mx-0 mx-3  border-2 border-red-600 rounded-2xl relative">
                <div className="md:w-[850px] flex md:gap-4 rounded-2xl bg-zinc-900 p-3 md:flex-row flex-col">
                  <div className="overflow-hidden rounded-xl md:w-1/2 md:none md:block hidden">
                    <div className="h-full w-full rounded-xl md:overflow-hidden img-bghover img-bg4"></div>
                  </div>

                  <div className="md:hidden flex justify-center items-center rounded-xl">
                    <img src={sampada} alt="tanu" className="object-cover" />
                  </div>

                  <div className="md:w-1/2 flex flex-col justify-between gap-3 p-3 ">
                    <h1 className="md:text-3xl text-2xl font-semibold md:text-left text-center font-serif md:bg-zinc-900 bg-red-600 ">
                      Sampada Singh Gurjar
                    </h1>
                    <p className="md:text-left text-center mt-3">
                      Mrs. Sampada Singh Gurjar is currently the Deputy
                      Collector of Narmadapuram. She is an amazing speaker,
                      mentor, and notable alumni of Jabalpur Engineering
                      College. She completed her Btech. and has achieved huge
                      milestones at a very young age. She secured the first rank
                      in MPPSC 2017 and was appointed as the Deputy Collector in
                      the Singrauli district.
                    </p>

                    <button className="button w-full mt-1 mb-3">
                      <span className="button_lg">
                        <span className="button_sl" />
                        <span className="button_text">More Information</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Prashant Pole */}
          <SwiperSlide className="flex justify-center">
            <div className="flex flex-col justify-center md:mb-10 pb-7 ">
              <div className="h-[460px] rounded-full w-[850px] absolute z-0 bg-red-600 md:block hidden"></div>
              <div className="md:h-[450px]  md:w-[850px] z-10 flex md:gap-44 md:my-12 my-8 md:mx-0 mx-3  border-2 border-red-600 rounded-2xl relative">
                <div className="md:w-[850px] flex md:gap-4 rounded-2xl bg-zinc-900 p-3 md:flex-row flex-col">
                  <div className="overflow-hidden rounded-xl md:w-1/2 md:none md:block hidden">
                    <div className="h-full w-full rounded-xl md:overflow-hidden img-bghover img-bg5"></div>
                  </div>

                  <div className="md:hidden flex justify-center items-center rounded-xl">
                    <img src={prashant} alt="tanu" className="object-cover" />
                  </div>

                  <div className="md:w-1/2 flex flex-col justify-between gap-3 p-3 ">
                    <h1 className="md:text-3xl text-2xl font-semibold md:text-left text-center font-serif md:bg-zinc-900 bg-red-600 ">
                      Prashant Pole
                    </h1>
                    <p className="md:text-left text-center mt-3">
                      With over three decades of unparalleled expertise, Mr.
                      Prashant Pole stands as a beacon of excellence in the
                      telecommunications realm. His career of more than 35
                      years,serves as a testament to his commitment to
                      innovation and progress in the industry. His influence
                      extends far beyond.Through various training programs,he
                      imparts invaluable wisdom in cutting-edge technologies
                      like GSM, CDMA, LTE, and more.
                    </p>
                    <div className="flex z-20 gap-6 md:justify-between md:w-[50%] justify-center md:h-auto mt-3">
                      <a
                        href="https://www.linkedin.com/in/prashant-pole-b969273/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in"
                        rel="noreferrer "
                        target="_blank"
                      >
                        <button className="Btn3">
                          <span className="svgContainer3">
                            <svg
                              viewBox="0 0 448 512"
                              height="1.6em"
                              xmlns="http://www.w3.org/2000/svg"
                              className="svgIcon"
                              fill="white"
                            >
                              <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                            </svg>
                          </span>
                          <span className="BG3" />
                        </button>
                      </a>

                      <a
                        href="https://twitter.com/prashantpole?lang=en"
                        rel="noreferrer "
                        target="_blank"
                      >
                        <button className="Btn4">
                          <span className="svgContainer4">
                            <svg
                              viewBox="0 0 512 512"
                              height="1.7em"
                              xmlns="http://www.w3.org/2000/svg"
                              className="svgIcon"
                              fill="black"
                            >
                              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                            </svg>
                          </span>
                          <span className="BG4" />
                        </button>
                      </a>
                    </div>
                    <Link to="/tanujain">
                      <button className="button w-full mt-1 mb-3">
                        <span className="button_lg">
                          <span className="button_sl" />
                          <span className="button_text">More Information</span>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Nitish Mishra */}
          <SwiperSlide className="flex justify-center">
            <div className="flex flex-col justify-center md:mb-10 pb-7 ">
              <div className="h-[460px] rounded-full w-[850px] absolute z-0 bg-red-600 md:block hidden"></div>
              <div className="md:h-[450px]  md:w-[850px] z-10 flex md:gap-44 md:my-12 my-8 md:mx-0 mx-3  border-2 border-red-600 rounded-2xl relative">
                <div className="md:w-[850px] flex md:gap-4 rounded-2xl bg-zinc-900 p-3 md:flex-row flex-col">
                  <div className="overflow-hidden rounded-xl md:w-1/2 md:none md:block hidden">
                    <div className="h-full w-full rounded-xl md:overflow-hidden img-bghover img-bg6"></div>
                  </div>

                  <div className="md:hidden flex justify-center items-center rounded-xl">
                    <img src={nitish} alt="tanu" className="object-cover" />
                  </div>

                  <div className="md:w-1/2 flex flex-col justify-between gap-3 p-3 ">
                    <h1 className="md:text-3xl text-2xl font-semibold md:text-left text-center font-serif md:bg-zinc-900 bg-red-600 ">
                      Nitish Mishra
                    </h1>
                    <p className="md:text-left text-center mt-3">
                      &quot;Where imagination meets artistry and artistry meets
                      innovation.&quot; Crafting cinematic magic in every frame
                      and note, Nitish Mishra, a Maestro of Melody, stands out
                      as an excellent director, editor, and cinematographer of
                      music videos at Canvas Films. He is a visionary founder of
                      &quot;Ashwamedh Studios,&quot; which released films like
                      &quot;Tiger Guards of Kanha,&quot; and a profound creative
                      head at &quot;HELIX&quot;.
                    </p>
                    <div className="flex z-20 gap-6 md:justify-between md:w-[50%] justify-center md:h-auto mt-3">
                      <a
                        href="https://www.instagram.com/rhythmicnitish/?hl=en"
                        rel="noreferrer "
                        target="_blank"
                      >
                        <button className="Btn1 ">
                          <span className="svgContainer1">
                            <svg
                              fill="white"
                              className="svgIcon"
                              viewBox="0 0 448 512"
                              height="1.5em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                          </span>
                          <span className="BG1" />
                        </button>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/nitish-mishra-29b3a575/?originalSubdomain=in"
                        rel="noreferrer "
                        target="_blank"
                      >
                        <button className="Btn3">
                          <span className="svgContainer3">
                            <svg
                              viewBox="0 0 448 512"
                              height="1.6em"
                              xmlns="http://www.w3.org/2000/svg"
                              className="svgIcon"
                              fill="white"
                            >
                              <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                            </svg>
                          </span>
                          <span className="BG3" />
                        </button>
                      </a>
                    </div>

                    <Link to="/tanujain">
                      <button className="button w-full mt-1 mb-3">
                        <span className="button_lg">
                          <span className="button_sl" />
                          <span className="button_text">More Information</span>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Vivek Samtani */}
          <SwiperSlide className="flex justify-center">
            <div className="flex flex-col justify-center md:mb-10 pb-7 ">
              <div className="h-[460px] rounded-full w-[850px] absolute z-0 bg-red-600 md:block hidden"></div>
              <div className="md:h-[450px]  md:w-[850px] z-10 flex md:gap-44 md:my-12 my-8 md:mx-0 mx-3  border-2 border-red-600 rounded-2xl relative">
                <div className="md:w-[850px] flex md:gap-4 rounded-2xl bg-zinc-900 p-3 md:flex-row flex-col">
                  <div className="overflow-hidden rounded-xl md:w-1/2 md:none md:block hidden">
                    <div className="h-full w-full rounded-xl md:overflow-hidden img-bghover img-bg7"></div>
                  </div>

                  <div className="md:hidden flex justify-center items-center rounded-xl">
                    <img src={vivek} alt="tanu" className="object-cover" />
                  </div>

                  <div className="md:w-1/2 flex flex-col justify-between gap-3 p-3 ">
                    <h1 className="md:text-3xl text-2xl font-semibold md:text-left text-center font-serif md:bg-zinc-900 bg-red-600 ">
                      Vivek Samtani
                    </h1>
                    <p className="md:text-left text-center mt-3">
                      Vivek Samtani, hailing from Jabalpur, ascended to comedic
                      stardom with his magnetic performances. Transitioning from
                      humble open-mic gigs to television triumphs, his journey
                      embodies sheer determination and raw talent. Infusing
                      storytelling and satire, Vivek&apos;s humor strikes a
                      chord, captivating audiences nationwide. Beyond stand-up,
                      his ventures into writing and acting underscore his
                      multifaceted brilliance.
                    </p>
                    <div className="flex z-20 gap-6 md:justify-between md:w-[50%] justify-center md:h-auto mt-3">
                      <a
                        href="https://www.instagram.com/viveksamtani/?hl=en"
                        rel="noreferrer "
                        target="_blank"
                      >
                        <button className="Btn1 ">
                          <span className="svgContainer1">
                            <svg
                              fill="white"
                              className="svgIcon"
                              viewBox="0 0 448 512"
                              height="1.5em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                          </span>
                          <span className="BG1" />
                        </button>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/vivek-samtani-17286a277/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in"
                        rel="noreferrer "
                        target="_blank"
                      >
                        <button className="Btn3">
                          <span className="svgContainer3">
                            <svg
                              viewBox="0 0 448 512"
                              height="1.6em"
                              xmlns="http://www.w3.org/2000/svg"
                              className="svgIcon"
                              fill="white"
                            >
                              <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                            </svg>
                          </span>
                          <span className="BG3" />
                        </button>
                      </a>

                      <a
                        href="https://twitter.com/samtanivivek?lang=en"
                        rel="noreferrer "
                        target="_blank"
                      >
                        <button className="Btn4">
                          <span className="svgContainer4">
                            <svg
                              viewBox="0 0 512 512"
                              height="1.7em"
                              xmlns="http://www.w3.org/2000/svg"
                              className="svgIcon"
                              fill="black"
                            >
                              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                            </svg>
                          </span>
                          <span className="BG4" />
                        </button>
                      </a>
                    </div>

                    <Link to="/tanujain">
                      <button className="button w-full mt-1 mb-3">
                        <span className="button_lg">
                          <span className="button_sl" />
                          <span className="button_text">More Information</span>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default HomePageCarousal;
