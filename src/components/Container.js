import React from "react";

const Container = (props) => {
	return (
		<div>
			<div className="container mx-auto px-4 md:px-16 lg:px-24 xl:px-48">
				{props.children}
			</div>
		</div>
	);
};

export default Container;
