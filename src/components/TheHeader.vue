<template>
	<header class="header">
		<div class="header__wrapper">
			<div class="container">
				<TheNav />
				<div class="cart-toggle" @click="toggleCart" :class="cartClass">
					<font-awesome icon="shopping-cart" />
					<p class="cart__info">Cart ({{ getTotalItems }})</p>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import TheNav from "@/components/TheNav.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
	components: {
		TheNav,
	},
	data() {
		return {
			isOpen: false,
		};
	},
	methods: mapMutations(["toggleCart"]),
	computed: {
		...mapGetters(["cartIsOpen", "getTotalItems"]),
		cartClass() {
			return {
				isopen: this.cartIsOpen,
			};
		},
	},
	created() {
		this.cartToggle;
	},
};
</script>

<style lang="scss" scoped>
.header {
	min-height: 59px;
}
.header__wrapper {
	background-color: $dark;
	color: $white;
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	width: 100%;
}

.container {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.cart-toggle {
	display: flex;
	align-items: center;
	cursor: pointer;
	transition: $tr;

	&:hover {
		color: $bright;
	}
}

svg {
	fill: currentColor;
	width: 24px;
	height: auto;
	margin-right: 10px;
}
</style>
