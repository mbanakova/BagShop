<template>
	<footer class="footer">
		<div class="container">
			<div class="framework"><img src="../assets/logo.png" alt="" /> This website runs on Vue.js</div>
			<div class="copyright">© mbanakova, {{ getYear }}</div>
		</div>
	</footer>
</template>

<script>
export default {
	data() {
		return {
			year: null,
		};
	},
	computed: {
		getYear() {
			return new Date().getFullYear();
		},
	},
};
</script>

<style lang="scss" scoped>
.footer {
	background-color: $dark;
	color: $white;
	padding: 20px 0;
	font-size: 14px;
}

.framework {
	display: flex;
	align-items: center;
	gap: 10px;
	& img {
		width: 16px;
		display: inline-block;
	}
}

.container {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
}
</style>
