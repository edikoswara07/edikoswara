import React from "react";
import About from "../views/About";
import Blog from "../views/Blog";
import Home from "../views/Home";

import { Switch, Route } from "react-router-dom";

const index = (props) => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/About" component={About} />
			<Route path="/Blog" component={Blog} />
			<Route path="*">Not Found</Route>
		</Switch>
	);
};

export default index;
