<template>
	<nav class="nav">
		<router-link to="/" class="button">Home</router-link>
		<router-link to="/products" class="button">Products</router-link>
		<router-link to="/checkout" class="button">Checkout</router-link>
	</nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
	display: flex;
	align-items: center;
	gap: 20px;
	background-color: $dark;
	padding: 10px;
}

.button {
	color: $white;
	text-decoration: none;
	position: relative;
	padding: 10px;
	text-decoration: none;
	transition: $tr;

	&::after {
		position: absolute;
		content: "";
		bottom: 4px;
		left: 50%;
		transform: translateX(-50%);
		width: 0;
		height: 2px;
		background-color: $bright;

		transition: 0.3s ease-in-out all;
	}

	&:hover {
		color: $bright;
	}
}

.router-link-active.router-link-exact-active::after {
	width: 80%;
}
</style>
