<template>
	<li class="product__item">
		<h3 class="product__title">Eco bag</h3>
		<div class="product__img">
			<!-- <img src="" alt="" /> -->
			<font-awesome icon="shopping-bag" />
		</div>
		<div class="product__group product__color">
			<h4>Color:</h4>
			<p>pink</p>
		</div>
		<div class="product__group product__price">
			<h4>Price:</h4>
			<p>500 ₽</p>
		</div>
		<div class="product__group product__quantity">
			<h4>Quantity:</h4>
			<input class="product__input" type="number" name="" id="" />
		</div>
		<button class="app__button" type="button">Add to cart</button>
	</li>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.product__item {
	padding: 20px;
	border-radius: 6px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
}

.product__title {
	align-self: flex-start;
	font-size: 24px;
	color: $navy;
	margin: 0;
}

svg {
	width: 100px;
	height: auto;
	color: $accent;
}

.product__group {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;

	& h4,
	& p {
		margin: 0;
	}
}

.product__add {
	background-color: $navy;
	padding: 20px;
	display: flex;
	justify-content: flex-end;
}

.product__input {
	max-width: 70px;
}
</style>
