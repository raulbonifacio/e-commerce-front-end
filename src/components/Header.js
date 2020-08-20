import React from "react";

import Search from "./Search";
import UserActions from "./UserActions";
import Logo from "./Logo";

function Header() {
	return (
		<header className="bg-light">
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-3 py-4">
						<Logo />
					</div>
					<div className="col-12 col-lg-6 py-4">
						<Search />
					</div>
					<div className="col-12 col-lg-3 py-4">
						<UserActions />
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
