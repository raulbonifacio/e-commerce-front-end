export default function autoReduce(initialState, handlerGroup) {
	return function (state = initialState, { type, payload }) {
		if (Object.keys(handlerGroup).includes(type)) {
			return handlerGroup[type](state, payload);
		} else {
			return state;
		}
	};
}
