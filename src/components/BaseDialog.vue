<template>
	<teleport to="body">
		<div v-if="show" @click="tryClose" class="backdrop"></div>
		<dialog open v-if="show">
			<header>
				<slot name="header">
					<h2>{{ title }}</h2>
				</slot>
			</header>
			<section>
				<slot></slot>
			</section>
			<base-spinner></base-spinner>
		</dialog>
	</teleport>
</template>

<script>
export default {
	props: {
		show: {
			type: Boolean,
			required: true,
		},
		title: {
			type: String,
			required: false,
		},
		fixed: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	emits: ["close"],
	methods: {
		tryClose() {
			if (this.fixed) {
				return;
			}
			this.$emit("close");
		},
	},
};
</script>

<style lang="scss" scoped>
.backdrop {
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.75);
	z-index: 10;
}

dialog {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 300px;
	z-index: 100;
	border: none;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 0 0 20px;
	margin: 0;
	overflow: hidden;
	background-color: $white;
}

header {
	background-color: $accent;
	color: $white;
	padding: 10px 20px;
}

header h2 {
	margin: 0;
	font-size: 16px;
}

section {
	padding: 20px;
	font-size: 14px;
}

menu {
	padding: 20px;
	display: flex;
	justify-content: flex-end;
	margin: 0;
}
</style>
