import React from "react";
import Navbar from "../parts/Navbar";
import Hero from "../parts/Hero";

const Home = (props) => {
	return (
		<div>
			<Navbar />
			<div className="mt-4 sm:mt-12 mb-10">
				<Hero />
			</div>
		</div>
	);
};

export default Home;
