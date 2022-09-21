<template>
  <h3>My account</h3>
  <div class="loggedOut" v-if="!isLoggedIn">
    <form @submit.prevent="verifyLogin">
      <label for="login">Login:</label>
      <input type="text" id="login" name="login" v-model="accountLogin" />
      <label for="login">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        v-model="accountPassword"
      />
      <base-button type="submit">Log In</base-button>
      <p v-if="loginError">
        Your login and/or password is not correct. Maybe a typo? Or an identity
        theft? Try again
      </p>
    </form>
  </div>
  <div class="loggedIn" v-else>
    <h4>
      <router-link to="/my-account/submitted-recipes">HERE</router-link> you can
      see all recipes you've submitted.
    </h4>
    <h4>
      <router-link to="/my-account/favourite-recipes">HERE</router-link> are
      your favourite recipes.
    </h4>
    <router-view></router-view>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  data() {
    return {
      accountLogin: "",
      accountPassword: "",
      loginError: false,
    };
  },
  components: {
    BaseButton,
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    verifyLogin() {
      const users = this.$store.getters.allUsers;
      const loggingUser = users.find(
        (user) => user.login === this.accountLogin
      );
      if (!loggingUser) {
        this.loginError = true;
        return;
      }
      if (loggingUser.password === this.accountPassword) {
        this.$store.dispatch("logIn");
        this.$store.dispatch("updateLoggedInUser", this.accountLogin);
      } else {
        this.loginError = true;
      }
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
p {
  color: red;
  font-weight: bold;
}
</style>