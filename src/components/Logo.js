import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function Logo() {
	const { url } = useRouteMatch();
	return (
		<h2 className="text-center text-lg-right">
			<Link to={`${url}/home`} className="text-dark">
				Livraria Destaque
			</Link>
		</h2>
	);
}

export default Logo;
