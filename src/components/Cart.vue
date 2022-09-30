<template>
	<div class="cart-container">
		<div v-if="this.cartIsOpen" class="cart-backdrop" @click="toggleCart"></div>
		<div class="cart" :class="cartClass">
			<div class="cart__header">
				<div class="cart__title">
					<font-awesome icon="shopping-cart" />
					<p class="cart__info">Cart ({{ getTotalItems }})</p>
				</div>
				<div class="menu-btn" @click="toggleCart">
					<div class="menu-burger"></div>
				</div>
			</div>
			<div class="cart__body" v-if="cartIsNotEmpty">
				<CartTable />
				<div class="cart__footer">
					<h3>Total: {{ getTotalCost }} ₽</h3>
					<button class="app__button" type="button">Checkout</button>
				</div>
			</div>
			<p class="cart__empty" v-else>You have no items in the cart yet!</p>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import CartTable from "@/components/CartTable.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
	name: "Home",
	components: {
		CartTable,
	},
	data() {
		return {
			isOpen: false,
		};
	},
	computed: {
		...mapGetters(["cartIsOpen", "getTotalItems", "getTotalCost", "cartIsNotEmpty"]),
		cartClass() {
			return {
				isopen: this.cartIsOpen,
			};
		},
	},
	methods: mapMutations(["toggleCart"]),
};
</script>

<style lang="scss" scoped>
.cart-container {
	height: 100%;
	width: 100%;
}

.cart-backdrop {
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 100;
	position: fixed;
	top: 58px;
	left: 0;
	transition: 1s all ease-in-out;
}
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
	position: fixed;
	transform: translateX(100%);
	box-sizing: border-box;
	transition: all 0.5s ease-out;
	opacity: 0;

	&.isopen {
		transform: translateX(0);
		opacity: 1;
	}
}

.cart__header {
	padding: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.menu-btn {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30px;
	height: 30px;
	right: 0;
	transition: $tr;
	border-radius: 5px;
	cursor: pointer;

	&:hover .menu-burger::before,
	&:hover .menu-burger::after {
		background-color: $accent;
	}
}

.menu-burger {
	width: 34px;
	height: 34px;
	box-shadow: none;
	transition: $tr;
	position: relative;

	&::before,
	&::after {
		position: absolute;
		content: "";
		width: 32px;
		height: 4px;
		right: 0;
		background-color: $white;
		border-radius: 5px;
		transition: $tr;
	}

	&::before {
		transform: rotate(45deg) translate(12px, 9px);
	}

	&::after {
		transform: rotate(-45deg) translate(-9px, 12px);
	}
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
	padding: 20px;
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
