<template>
	<main class="home">
		<Hero />
		<div class="container">
			<div class="recommended" id="recommended">
				<h2>Recommended:</h2>
				<ProductList />
			</div>
		</div>
	</main>
</template>

<script>
// @ is an alias to /src
import ProductList from "@/components/ProductList.vue";
import Hero from "@/components/Hero.vue";

export default {
	name: "Home",
	components: {
		ProductList,
		Hero,
	},
};
</script>

<style lang="scss" scoped></style>
