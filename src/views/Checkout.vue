<template>
	<main class="checkout">
		<base-dialog :show="!!error" title="Not enough data!" @close="handleError">
			<p>{{ error }}</p>
		</base-dialog>
		<div class="container">
			<h1>Checkout</h1>
			<form @submit.prevent="submitForm" class="form">
				<div class="form__group">
					<h2>Contacts:</h2>
					<div class="form__inputs" :class="validateUserName">
						<label for="user-name">Name:</label>
						<input type="text" name="user-name" id="user-name" v-model.trim="userName" />
					</div>
					<div class="form__inputs" :class="validateUserEmail">
						<label for="user-email">Email:</label>
						<input type="email" name="user-email" id="user-email" v-model.trim="userEmail" />
					</div>
				</div>

				<div class="form__group">
					<h2>Delivery type:</h2>
					<div class="form__inputs">
						<input class="checkbox" type="radio" name="delivery" id="selfPickup" value="selfPickup" v-model="delivery" />
						<label class="checkbox-label" for="selfPickup">Self pickup</label>
					</div>
					<div class="form__inputs">
						<input class="checkbox" type="radio" name="delivery" id="deliver" value="deliver" v-model="delivery" />
						<label class="checkbox-label" for="deliver">Deliver to room</label><input v-if="delivery === 'deliver'" class="room" :class="validateRoom" type="text" placeholder="615" v-model.trim="room" />
					</div>
				</div>

				<div class="form__group">
					<h2>Payment type:</h2>
					<div class="form__inputs">
						<input class="checkbox" type="radio" name="payment" value="cash" id="cash" v-model="payment" />
						<label class="checkbox-label" for="cash">Cash</label>
					</div>
					<div class="form__inputs">
						<input class="checkbox" type="radio" name="payment" value="online" id="online" v-model="payment" />
						<label class="checkbox-label" for="online">Online transaction</label>
					</div>
				</div>
				<button class="app__button">Confirm</button>
			</form>
		</div>
		<transition name="slide" appear>
			<div class="info info--warning" v-if="!isValid">{{ error }}</div></transition
		>
	</main>
</template>

<script>
export default {
	name: "Checkout",
	data() {
		return {
			userName: "",
			userEmail: "",
			delivery: "selfPickup",
			room: "",
			payment: "cash",
			error: null,
			isValid: true,
		};
	},
	computed: {
		validateUserName() {
			return { invalid: this.userName.length < 2 };
		},
		validateUserEmail() {
			return { invalid: !this.userEmail.includes("@"), warning: !this.userEmail.includes(".ru") };
		},
		validateRoom() {
			return { empty: this.delivery === "deliver" && this.room === "" };
		},
	},
	methods: {
		validateForm() {
			if (this.userName.length < 2) {
				this.error = "Name must be at least 2 characters";
				return;
			} else if (!this.userEmail.includes("@") || !this.userEmail.includes(".ru")) {
				this.error = "Email must contain @ and .ru";
				return;
			} else if (this.delivery === "deliver" && this.room === "") {
				this.error = "Add the room number";
				return;
			} else console.log("submitted");
		},
		submitForm() {
			this.validateForm();
			setTimeout(() => {
				this.error = false;
			}, 2000);
		},
		handleError() {
			this.error = null;
		},
	},
};
</script>

<style lang="scss" scoped>
.checkout {
	padding-top: 20px;
}

.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
}

h1 {
	margin: 0;
}

h2 {
	margin: 0;
	text-align: center;
	font-size: 18px;
}

.form {
	display: flex;
	flex-direction: column;
	gap: 25px;
	padding: 20px 30px;
	border-radius: 6px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
	background-color: $white;
}

.form__group {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.form__inputs {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 15px;
	position: relative;

	&.warning input {
		color: $warning;
	}
	&.invalid input {
		color: $accent;
	}
}
input[type="text"],
input[type="email"] {
	color: $success;
	font-weight: 700;
	padding: 5px;
	display: block;
	max-width: 190px;
	border: 2px solid $light;
	border-radius: 4px;
	outline: none;
	transition: $tr;

	&:focus {
		border: 2px solid $bright;
	}

	&::placeholder {
		color: $light;
	}
}

.checkbox {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	position: absolute;
}

.checkbox-label {
	position: relative;
	padding-left: 30px;
	transition: $tr;
	cursor: pointer;
}

.checkbox:checked + .checkbox-label::after {
	display: block;
}

.checkbox-label::before {
	//circle
	position: absolute;
	content: "";
	top: 50%;
	transform: translateY(-50%);
	left: 0;
	height: 22px;
	width: 22px;
	border: 4px solid $light;
	box-sizing: border-box;
	border-radius: 50%;
	transition: $tr;
}

.checkbox-label::after {
	//dot
	position: absolute;
	content: "";
	top: 6px;
	left: 7px;
	height: 8px;
	width: 8px;
	border-radius: 50%;
	background-color: $bright;
	box-sizing: border-box;
	display: none;
	transition: $tr;
}

/* ??????????????, ?????????????????? */

.checkbox-label:hover::before {
	border-color: darken($light, 10%);
}

.checkbox-label:hover::after {
	background-color: darken($bright, 10%);
}

input.room {
	position: absolute;
	content: "";
	top: 50%;
	transform: translateY(-50%);
	right: 0;
	max-width: 90px;
	transition: $tr;

	&.empty {
		border-color: $accent;
	}
}
.info {
	padding: 20px;
	text-align: center;
	border: 1px solid #82fdd2;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
	width: 300px;
	margin: 0 auto;

	&--warning {
		border: 1px solid $warning;
		background-color: lighten($warning, 50%);
	}
}
.slide-enter-active,
.slide-leave-active {
	transition: transform 0.5s;
}
.slide-enter-from {
	transform: translateX(-100vw);
}
.slide-enter,
.slide-leave-to {
	transform: translateX(100vw);
}
</style>
