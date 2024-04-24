/* eslint-disable no-unused-vars */
// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
});

const Crousel = ({ name,info }) => {
  return (
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
              {name}
            </h1>
            <p className="md:text-left text-center mt-3">
             {info}
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

            {/* <div className='md:hidden flex justify-evenly items-center text-red-600 font-semibold'>
											<h1 className='text-sm'>
												Session Time : 12 PM
											</h1>
											<h1 className='text-sm'>
												Date : 15 february
											</h1>
										</div>

										<h1 className='md:block hidden mt-2'>
											Session Time : 12 PM
										</h1>
										<h1 className='md:block hidden mt-2'>
											Date : 15 february
										</h1> */}

            {/* <Link to='/tanujain'> */}
            <button className="button w-full mt-1 mb-3">
              <span className="button_lg">
                <span className="button_sl" />
                <span className="button_text">More Information</span>
              </span>
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crousel;
