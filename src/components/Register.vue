<template>
  <form @submit.prevent="addNewUser">
    <label for="login">New account login:</label>
    <input type="text" id="login" name="login" v-model="newLogin" :class="{red: existingLoginError || emptyLoginError}" />
    <label for="login">New account password:</label>
    <input
      type="password"
      id="password"
      name="password"
      v-model="newPassword"
      :class="{red: emptyPasswordError || passwordCheckError}"
    />
    <base-button type="submit">Register</base-button>
    <p :class="{ hidden: !existingLoginError }">
      An account with this login already exists. Choose another login
    </p>
    <p :class="{ hidden: !emptyLoginError }">You have to enter a login</p>
    <p :class="{ hidden: !emptyPasswordError }">You have to enter a password</p>
    <p :class="{ hidden: !passwordCheckError }">
      Your password needs to be at least 8 characters long
    </p>
    <h2 :class="{ hidden: !registrationComplete }">Registration successfull. Redirecting to login page...</h2>
  </form>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  components: { BaseButton },
  data() {
    return {
      newLogin: "",
      newPassword: "",
      newUser: {},
      existingLoginError: false,
      emptyLoginError: false,
      emptyPasswordError: false,
      passwordCheckError: false,
      registrationComplete: false,
    };
  },
  methods: {
    redirectToLogin() {
        this.$router.push("/my-account")
    },
    addNewUser() {
      this.existingLoginError = false;
      this.emptyLoginError = false;
      this.emptyPasswordError = false;
      this.passwordCheckError = false;
      const users = this.$store.getters.allUsers;
      const isExistingUser = users.find((user) => user.login === this.newLogin);
      if (isExistingUser) {
        this.existingLoginError = true;
      }
      if (this.newLogin === "") {
        this.emptyLoginError = true;
      }
      if (this.newPassword === "") {
        this.emptyPasswordError = true;
      }
      if (this.newPassword.length < 8) {
        this.passwordCheckError = true;
      }
      if (
        isExistingUser ||
        this.newLogin === "" ||
        this.newPassword === "" ||
        this.newPassword.length < 8
      ) {
        return;
      }
      this.newUser = {
        login: this.newLogin,
        password: this.newPassword,
      };
      this.$store.dispatch("addNewUser", this.newUser);
      this.newLogin = "";
      this.newPassword = "";
      this.registrationComplete = true;
      setTimeout(this.redirectToLogin, 2000);
    },
  },
};
</script>

<style scoped>
h3,
h4 {
  text-align: center;
  margin: 1rem auto;
}
form {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 0.5rem;
}
input {
  margin: auto 5px;
  display: inline-block;
  border: 2px solid #0f023b;
  border-radius: 20px;
  line-height: 1.25rem;
  padding: 0.5rem;
  min-width: 20%;
  max-width: 25%;
}
input.red {
    border: 2px solid red;
    background-color: rgb(255, 198, 198)
}
p {
  color: red;
  font-weight: bold;
}
.hidden {
  display: none;
}
</style>