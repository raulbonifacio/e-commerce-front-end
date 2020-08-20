import React from "react";

function Cart() {
	return (
		<div className="dropdown position-relative">
			<div className="btn-group">
				<button className="btn btn-outline-dark">
					Shopping Cart
					<i className="fas fa-shopping-cart mx-2"></i>
				</button>
				<button
					type="button"
					class="btn btn-outline-dark dropdown-toggle dropdown-toggle-split"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					<span class="sr-only">Toggle Dropdown</span>
				</button>
				<div className="dropdown-menu dropdown-menu-right w-100 ">
					<p href="#" className="dropdown-header">
						Your cart itens
					</p>
				</div>
			</div>
		</div>
	);
}

export default Cart;
