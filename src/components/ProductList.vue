<template>
	<ul>
		<ProductItem />
		<ProductItem />
		<ProductItem />
		<ProductItem />
	</ul>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";

export default {
	name: "Products",
	components: {
		ProductItem,
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
