<template>
	<main class="checkout">
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
						<input type="radio" name="delivery" id="selfPickup" value="selfPickup" v-model="delivery" />
						<label for="selfPickup">Self pickup</label>
					</div>
					<div class="form__inputs">
						<input type="radio" name="delivery" id="deliver" value="deliver" v-model="delivery" />
						<label for="deliver">Deliver to room</label>
					</div>
				</div>

				<div class="form__group">
					<h2>Payment type:</h2>
					<div class="form__inputs">
						<input type="radio" name="payment" value="cash" id="cash" v-model="payment" />
						<label for="cash">Cash</label>
					</div>
					<div class="form__inputs">
						<input type="radio" name="payment" value="online" id="online" v-model="payment" />
						<label for="online">Online transaction</label>
					</div>
				</div>
				<button class="app__button">Confirm</button>
			</form>
		</div>
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
			payment: "cash",
		};
	},
	components: {
		// ProductList,
	},
	computed: {
		validateUserName() {
			return { invalid: this.userName.length < 2 };
		},
		validateUserEmail() {
			return { invalid: !this.userEmail.includes("@") };
		},
	},
	methods: {
		submitForm() {
			if (this.userName.length < 2) {
				console.log("invalid data");
				return;
			} else if (this.userEmail.indexOf("@") < 0) {
				console.log("invalid email");
				return;
			}
			console.log(this.userName);
			console.log(this.userEmail);
			console.log(this.delivery);
			console.log(this.payment);
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

h1,
h2 {
	margin: 0;
}

.form {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	padding: 20px;
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
	border: 2px solid $grey;
	border-radius: 4px;
	outline: none;
	transition: $tr;

	&:focus {
		border: 2px solid $bright;
	}
}
</style>
