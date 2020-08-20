import React, { useState } from "react";

function Search() {
	const [inputValue, setInputValue] = useState("");

	const handleOnSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<form onSubmit={handleOnSubmit}>
			<div className="input-group">
				<input
					id=""
					className="form-control"
					type="text"
					name="search"
					placeholder="Search in here..."
					value={inputValue}
					onChange={(event) => setInputValue(event.target.value)}
				/>
				<div className="input-group-append">
					<button className="btn btn-outline-dark">
						<i className="fas fa-search"></i>
					</button>
				</div>
			</div>
		</form>
	);
}

export default Search;
