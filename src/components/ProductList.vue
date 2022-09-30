<template>
	<ul>
		<ProductItem v-for="product in products" :key="product.id" :id="product.id" :title="product.title" :color="product.color" :img="product.img" :price="product.price" :quantity="product.quantity" />
	</ul>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
import { mapGetters } from "vuex";

export default {
	name: "Products",
	components: {
		ProductItem,
	},

	computed: {
		...mapGetters({
			products: ["getProducts"],
		}),
	},
};
</script>

<style lang="scss" scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
	margin: 0;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-column-gap: 30px;
}
</style>
