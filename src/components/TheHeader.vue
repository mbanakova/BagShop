<template>
	<header class="header">
		<div class="header__wrapper">
			<div class="container">
				<TheNav />
				<div class="cart">
					<font-awesome icon="shopping-cart" />
					<p class="cart__info">Cart (0)</p>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import TheNav from "@/components/TheNav.vue";

export default {
	components: {
		TheNav,
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

.cart {
	display: flex;
	align-items: center;
	cursor: pointer;
}

svg {
	fill: currentColor;
	width: 24px;
	height: auto;
	margin-right: 10px;
}
</style>
