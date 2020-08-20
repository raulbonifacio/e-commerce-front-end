import React from "react";
import { Switch, useRouteMatch, Redirect, Route } from "react-router-dom";

import Home from "./Home";
import Customer from "./Customer";
import Header from "components/Header";
import Footer from "components/Footer";
import Catalog from "./Catalog";
import Navbar from "components/Navbar";

function Store() {
	const { path } = useRouteMatch();
	return (
		<div className="vh-100">
			<Header />
			<Navbar />
			<Switch>
				<Route path={`${path}/catalog`}>
					<Catalog />
				</Route>
				<Route path={`${path}/customer`}>
					<Customer />
				</Route>
				<Route path={`${path}/home`}>
					<Home />
				</Route>
				<Route path={`${path}/`}>
					<Redirect to={`${path}/home`} />
				</Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default Store;
