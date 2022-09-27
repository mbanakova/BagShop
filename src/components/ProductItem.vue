<template>
	<li class="product__item" :id="id">
		<h3 class="product__title">{{ title }}</h3>
		<div class="product__img">
			<!-- <img src="" alt="" /> -->
			<font-awesome icon="shopping-bag" />
		</div>
		<div class="product__group product__color">
			<h4>Color:</h4>
			<span class="product__color-square" :style="{ backgroundColor: color }"></span>
			<p>{{ color }}</p>
		</div>
		<div class="product__group product__price">
			<h4>Price:</h4>
			<p>{{ price }} ₽</p>
		</div>
		<div class="product__group product__quantity">
			<h4>Quantity:</h4>
			<input class="product__input" type="number" min="1" v-model="quantity" />
		</div>
		<button class="app__button" type="button" @click="addToCart(id)">Add to cart</button>
	</li>
</template>

<script>
export default {
	props: ["id", "title", "color", "img", "price"],
	data() {
		return {
			quantity: 1,
		};
	},
	methods: {
		async addToCart() {
			const item = {
				id: this.id,
				title: this.title,
				color: this.color,
				price: this.price,
				quantity: this.quantity,
			};
			this.$store.dispatch("addToCart", item);
		},
	},
};
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

.product__color-square {
	width: 20px;
	height: 20px;
	border: 1px solid $light;
	border-radius: 50%;
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
