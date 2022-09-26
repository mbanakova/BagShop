<template>
	<div class="hero">
		<div class="hero__info">
			<p class="hero__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam harum, ratione quidem placeat animi consequatur fugiat iure. Nisi, optio perferendis quam veritatis expedita dolorum sequi?</p>
			<a class="app__button" href="#recommended" v-smooth-scroll>Collection</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "Hero",
};
</script>

<style lang="scss" scoped>
.hero {
	min-height: 100vh;
	background-image: url("../assets/hero.jpg");
	background-position: center top;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
}

.hero__info {
	position: absolute;
	content: "";
	top: 50%;
	transform: translateY(-50%);
	right: 50%;
	width: 40%;
	background-color: rgba($color: $dark, $alpha: 0.7);
	color: $white;
	padding: 40px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.hero__text {
	margin: 0;
}
</style>
