import React from "react";
import Container from "../components/Container";
import imgHero from "../data/img/imgHero.jpg";
import avatar from "../data/img/avatar.jpg";

const Hero = (props) => {
	return (
		<div>
			<Container>
				<div className="flex flex-row justify-between items-center lg:space-x-8">
					<div className="flex-1">
						<div className="bg-gray-900 rounded-lg p-6 sm:p-0 sm:bg-transparent flex sm:flex-none items-center sm:items-start space-x-6 sm:space-x-0">
							<img
								src={avatar}
								alt="imgHero"
								className="rounded-full w-24 h-24 object-cover object-center block sm:hidden"
							/>
							<div>
								<h1 className="mb-0 sm:mb-2 lg:mb-4 font-light text-lg sm:text-2xl md:text-2xl lg:text-4xl text-indigo-100 sm:text-indigo-400 leading-relaxed tracking-normal">
									Hy,
								</h1>
								<h1 className="font-light text-lg sm:text-2xl md:text-2xl lg:text-4xl text-indigo-100 sm:text-indigo-400 leading-relaxed tracking-normal">
									I'm
									<span className="ml-2 font-semibold text-indigo-100 sm:text-indigo-500">
										Edi Koswara
									</span>
								</h1>
								<p className="font-extralight text-sm sm:text-lg mt-2 lg:mt-4 text-gray-100 sm:text-gray-500">
									- Web Developer
								</p>
							</div>
						</div>

						<div className="hidden sm:block">
							<p className="mt-8 font-light text-sm text-gray-500 leading-relaxed w-4/5">
								I help our clients create brands, build digital products and
								services, innovate, find opportunities and validate ideas.
							</p>
							<button className="px-8 py-2 rounded-md bg-indigo-500 text-indigo-100 font-semibold hover:bg-indigo-700 shadow-md mt-14">
								More About Me
							</button>
						</div>
					</div>
					<div>
						<div className="hidden sm:block relative w-96 h-96 lg:h-96 lg:w-96 sm:w-80 sm:h-80">
							<div className="inset-0 w-full h-full inset-0 transform rounded-3xl rotate-3 bg-gradient-to-r from-blue-500 to-indigo-500 absolute shadow-2xl"></div>
							<img
								src={imgHero}
								alt="imgHero"
								className="w-full h-full inset-0 object-cover object-center absolute rounded-3xl shadow-lg"
							/>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Hero;
