import React from "react";
import Navbar from "../parts/Navbar";
import Container from "../components/Container";

const Blog = (props) => {
	return (
		<div>
			<Navbar />
			<Container>
				<div className="mt-12">Blog</div>
			</Container>
		</div>
	);
};

export default Blog;
