<template>
	<table class="cart__table">
		<thead>
			<tr>
				<th>Img</th>
				<th>Product</th>
				<th>Color</th>
				<th>Price</th>
				<th>Qty</th>
				<th>Total</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<CartTableRow v-for="row in cartTable" :key="row.id" :id="row.id" :title="row.title" :color="row.color" :price="row.price" :quantity="row.quantity" />
		</tbody>
	</table>
</template>

<script>
import CartTableRow from "@/components/CartTableRow.vue";
import { mapGetters } from "vuex";

export default {
	components: {
		CartTableRow,
	},
	computed: {
		...mapGetters({
			cartTable: ["getCart"],
		}),
	},
};
</script>

<style lang="scss" scoped>
.cart__table {
	width: 100%;
	text-align: center;
	border: 2px solid $bright;
	border-collapse: collapse;

	& th {
		padding: 8px;
		border-bottom: 1px solid $bright;
		background-color: $dark;
	}
}
</style>
