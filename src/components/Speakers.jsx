import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";


import "swiper/css";
//import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Speakers = ({profilePic, name, information, instaLink, linkedinLink, twittLink, sessionTime, sessionDay, URL}) => {
	return (
		<SwiperSlide className='flex justify-center'>
			<div className='flex flex-col justify-center md:mb-10 pb-7 '>
				<div className='h-[460px] rounded-full w-[850px] absolute z-0 bg-red-600'></div>
				<div className='md:h-[450px]  md:w-[850px] z-10 flex md:gap-44 md:my-12 my-8 md:mx-0 mx-3  border-2 border-red-600 rounded-2xl relative'>
					<div className='md:w-[850px] flex md:gap-4 rounded-2xl bg-zinc-900 p-3 md:flex-row flex-col'>
						<div className='overflow-hidden rounded-xl md:w-1/2 md:none md:block hidden'>
							<div className='h-full w-full rounded-xl md:overflow-hidden img-bghover img-bg'></div>
						</div>

						<div className='md:hidden flex justify-center items-center rounded-xl'>
							<img
								src={profilePic}
								alt={name}
								className='object-fill'
							/>
						</div>

						<div className='md:w-1/2 flex flex-col justify-between gap-3 p-3 '>
							<h1 className='md:text-3xl text-2xl font-semibold md:text-left text-center font-serif md:bg-zinc-900 bg-red-600 '>
								{name}
							</h1>
							<p className='md:text-left text-center mt-3'>
								{information}
							</p>
							<div className='flex z-20 gap-6 md:justify-between md:w-[50%] justify-center md:h-auto mt-3'>
								<a
									href={instaLink}
									rel='noreferrer '
									target='_blank'
								>
									<button className='Btn1 '>
										<span className='svgContainer1'>
											<svg
												fill='white'
												className='svgIcon'
												viewBox='0 0 448 512'
												height='1.5em'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
											</svg>
										</span>
										<span className='BG1' />
									</button>
								</a>

								<a
									href={linkedinLink}
									rel='noreferrer '
									target='_blank'
								>
									<button className='Btn3'>
										<span className='svgContainer3'>
											<svg
												viewBox='0 0 448 512'
												height='1.6em'
												xmlns='http://www.w3.org/2000/svg'
												className='svgIcon'
												fill='white'
											>
												<path d='M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z' />
											</svg>
										</span>
										<span className='BG3' />
									</button>
								</a>

								<a
									href={twittLink}
									rel='noreferrer '
									target='_blank'
								>
									<button className='Btn4'>
										<span className='svgContainer4'>
											<svg
												viewBox='0 0 512 512'
												height='1.7em'
												xmlns='http://www.w3.org/2000/svg'
												className='svgIcon'
												fill='black'
											>
												<path d='M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z' />
											</svg>
										</span>
										<span className='BG4' />
									</button>
								</a>
							</div>

							<div className='md:hidden flex justify-evenly items-center text-red-600 font-semibold'>
								<h1 className='text-sm'>
									Session Time : {sessionTime}
								</h1>
								<h1 className='text-sm'>Date : {sessionDay}</h1>
							</div>

							<h1 className='md:block hidden mt-2'>
								Session Time : {sessionTime}
							</h1>
							<h1 className='md:block hidden mt-2'>
								Date : {sessionDay}
							</h1>

							<Link to={URL}>
								<button className='button w-full mt-1 mb-3'>
									<span className='button_lg'>
										<span className='button_sl' />
										<span className='button_text'>
											More Information
										</span>
									</span>
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</SwiperSlide>
	);
};

export default Speakers;
