<template>
	<TheHeader />
	<Cart />
	<router-view v-slot="slotProps">
		<transition name="route" mode="out-in"> <component :is="slotProps.Component"> </component> </transition
	></router-view>
	<TheFooter />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import Cart from "@/components/Cart.vue";

export default {
	name: "Home",
	components: {
		TheHeader,
		TheFooter,
		Cart,
	},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

*,
*::before,
*::after {
	box-sizing: border-box;
}

img {
	max-width: 100%;
	width: 100%;
	height: auto;
	display: block;
}

html {
	font-family: "Roboto", sans-serif;
}

body {
	margin: 0;
	padding: 0;
	overflow-x: hidden;
	overflow-y: scroll;
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}

.app__button {
	text-decoration: none;
	font: inherit;
	background-color: $bright;
	border: 2px solid $bright;
	color: white;
	cursor: pointer;
	border-radius: 10px;
	font-weight: 500;
	padding: 5px 40px;
	display: block;
	align-self: flex-end;
	transition: all 0.3s ease-in-out;
	position: relative;
	text-align: center;

	&::after {
		position: absolute;
		content: "»";
		top: 4px;
		right: 1em;
		width: 10px;
		height: 10px;
		transition: $tr;
		opacity: 0;
	}

	&:hover::after,
	&:active::after {
		opacity: 1;
		right: 1.2em;
	}
}
</style>
