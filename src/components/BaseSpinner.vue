<template>
	<div class="spinner">
		<div class="loadingio-spinner-spin-vuij00813aj">
			<div class="roll">
				<div><div></div></div>
				<div><div></div></div>
				<div><div></div></div>
				<div><div></div></div>
				<div><div></div></div>
				<div><div></div></div>
				<div><div></div></div>
				<div><div></div></div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.spinner {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
}
@keyframes roll {
	0% {
		opacity: 1;
		backface-visibility: hidden;
		transform: translateZ(0) scale(1.5, 1.5);
	}
	100% {
		opacity: 0;
		backface-visibility: hidden;
		transform: translateZ(0) scale(1, 1);
	}
}
.roll div > div {
	position: absolute;
	width: 12px;
	height: 12px;
	border-radius: 50%;
	background: $accent;
	animation: roll 1s linear infinite;
}
.roll div:nth-child(1) > div {
	left: 74px;
	top: 44px;
	animation-delay: -0.875s;
}
.roll > div:nth-child(1) {
	transform: rotate(0deg);
	transform-origin: 80px 50px;
}
.roll div:nth-child(2) > div {
	left: 65px;
	top: 65px;
	animation-delay: -0.75s;
}
.roll > div:nth-child(2) {
	transform: rotate(45deg);
	transform-origin: 71px 71px;
}
.roll div:nth-child(3) > div {
	left: 44px;
	top: 74px;
	animation-delay: -0.625s;
}
.roll > div:nth-child(3) {
	transform: rotate(90deg);
	transform-origin: 50px 80px;
}
.roll div:nth-child(4) > div {
	left: 23px;
	top: 65px;
	animation-delay: -0.5s;
}
.roll > div:nth-child(4) {
	transform: rotate(135deg);
	transform-origin: 29px 71px;
}
.roll div:nth-child(5) > div {
	left: 14px;
	top: 44px;
	animation-delay: -0.375s;
}
.roll > div:nth-child(5) {
	transform: rotate(180deg);
	transform-origin: 20px 50px;
}
.roll div:nth-child(6) > div {
	left: 23px;
	top: 23px;
	animation-delay: -0.25s;
}
.roll > div:nth-child(6) {
	transform: rotate(225deg);
	transform-origin: 29px 29px;
}
.roll div:nth-child(7) > div {
	left: 44px;
	top: 14px;
	animation-delay: -0.125s;
}
.roll > div:nth-child(7) {
	transform: rotate(270deg);
	transform-origin: 50px 20px;
}
.roll div:nth-child(8) > div {
	left: 65px;
	top: 23px;
	animation-delay: 0s;
}
.roll > div:nth-child(8) {
	transform: rotate(315deg);
	transform-origin: 71px 29px;
}
.loadingio-spinner-spin-vuij00813aj {
	width: 40px;
	height: 40px;
	display: inline-block;
	overflow: hidden;
	background: $white;
}
.roll {
	width: 100%;
	height: 100%;
	position: relative;
	transform: translateZ(0) scale(0.4);
	backface-visibility: hidden;
	transform-origin: 0 0; /* see note above */
}
.roll div {
	box-sizing: content-box;
}
</style>
