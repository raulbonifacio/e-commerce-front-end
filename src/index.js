import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import 'bootstrap';

import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

import "./styles/main.scss";
import * as serviceWorker from "./serviceWorker";

import Root from "pages";
import store from "./state/store";

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Root />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);

serviceWorker.unregister();
