<template>
	<table class="cart__table">
		<thead>
			<tr>
				<th>Img</th>
				<th>Product</th>
				<th>Price</th>
				<th>Qty</th>
				<th>Total</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<CartTableRow />
			<CartTableRow />
			<CartTableRow />
		</tbody>
	</table>
</template>

<script>
import CartTableRow from "@/components/CartTableRow.vue";

export default {
	components: {
		CartTableRow,
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
