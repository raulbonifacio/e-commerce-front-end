import { applyMiddleware, createStore } from "redux";

import { createLogger } from "redux-logger";

import thunk from "redux-thunk";

import reducers from "./reducers";

const preloadedStateKey = "e-commerce-state";

const preloadedState =
	JSON.parse(localStorage.getItem(preloadedStateKey)) || {};

const logger = createLogger();

const store = createStore(
	reducers,
	preloadedState,
	applyMiddleware(logger, thunk)
);

store.subscribe((state) =>
	localStorage.setItem(preloadedStateKey, JSON.stringify(state))
);

export default store;
