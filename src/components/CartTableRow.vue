<template>
	<tr>
		<td><font-awesome icon="shopping-bag" /></td>
		<td>{{ title }}, {{ color }}</td>
		<td>{{ price }} ₽</td>
		<td>{{ quantity }}</td>
		<td>{{ price * quantity }} ₽</td>
		<td>
			<button><font-awesome icon="xmark" /></button>
		</td>
	</tr>
</template>

<script>
export default {
	props: ["id", "title", "color", "price", "quantity"],
};
</script>

<style lang="scss" scoped>
td {
	border-bottom: 1px solid $bright;
	padding: 8px;
}
</style>
