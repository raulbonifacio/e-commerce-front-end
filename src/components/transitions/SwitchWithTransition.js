import React, {useState} from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Switch, useLocation } from "react-router-dom";

function SwitchWithTransition(props) {
	//const [key, setkey] = useState('');
	const location = useLocation();
	return (
		<SwitchTransition>
			<CSSTransition
				classNames={props.classNames}
				timeout={props.timeout}
				key={location.pathname}
			>
				<div>
					<Switch location={location}>{props.children}</Switch>
				</div>
			</CSSTransition>
		</SwitchTransition>
	);
}

export default SwitchWithTransition;
