<template>
	<div class="cart">
		<div class="cart__header">
			<div class="cart__title">
				<font-awesome icon="shopping-cart" />
				<p class="cart__info">Cart (0)</p>
			</div>
			<button>
				<font-awesome icon="xmark" />
			</button>
		</div>
		<div class="cart__body">
			<CartTable />
			<div class="cart__footer">
				<h3>Total: $1.00</h3>
				<button class="app__button" type="button">Checkout</button>
			</div>
			<p class="cart__empty">You have no items in the cart yet!</p>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import CartTable from "@/components/CartTable.vue";

export default {
	name: "Home",
	components: {
		CartTable,
	},
};
</script>

<style lang="scss" scoped>
.cart {
	position: absolute;
	content: "";
	top: 0;
	right: 0;
	width: 500px;
	height: 100vh;
	z-index: 200;
	background-color: $navy;
	color: $white;
}

.cart__header {
	padding: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.cart__title {
	display: flex;
	align-items: center;
	gap: 10px;
}

.cart__info {
	margin: 0;
}

.cart__body {
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 30px;
}

.cart__empty {
	margin: 0;
	text-align: center;
}

.cart__footer {
	display: flex;
	justify-content: space-between;
	align-items: center;

	& h3 {
		margin: 0;
	}
}
</style>
