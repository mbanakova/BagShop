<template>
	<tr>
		<td><font-awesome icon="shopping-bag" /></td>
		<td>{{ title }}</td>
		<td>{{ color }}</td>
		<td>{{ price }} ₽</td>
		<td>{{ quantity }}</td>
		<td>{{ price * quantity }} ₽</td>
		<td>
			<div class="menu-btn" @click.prevent="deleteItem(id)">
				<div class="menu-burger"></div>
			</div>
			<button class="cart__delete-item" @click.prevent="deleteItem(id)" title="delete item"><font-awesome icon="trash" /></button>
		</td>
	</tr>
</template>

<script>
export default {
	props: ["id", "title", "color", "price", "quantity"],
	methods: {
		deleteItem() {
			const item = {
				id: this.id,
				price: this.price,
				quantity: this.quantity,
			};
			this.$store.dispatch("deleteFromCart", item);
		},
	},
};
</script>

<style lang="scss" scoped>
td {
	border-bottom: 1px solid $bright;
	padding: 8px;
}

.cart__delete-item {
	border: none;
	background-color: transparent;
	width: 30px;
	height: 30px;
	color: $accent;
	cursor: pointer;
	transition: $tr;

	&:hover {
		color: darken($accent, 15%);
	}

	& svg {
		width: 14px;
		height: auto;
	}
}
</style>
