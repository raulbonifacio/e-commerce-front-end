import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Admin from "./Admin";
import Store from "./Store";
import Login from "./Login";

function Root() {
	return (
		<React.Fragment>
			<Switch>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/admin">
					<Admin />
				</Route>
				<Route path="/store">
					<Store />
				</Route>
				<Route path="/">
					<Redirect to="/store" />
				</Route>
			</Switch>
		</React.Fragment>
	);
}

export default Root;
