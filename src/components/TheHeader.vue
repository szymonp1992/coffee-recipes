<template>
  <header>
    <nav>
      <ul>
        <router-link to="/recipes">Recipes</router-link>
        <router-link to="/my-account">My account</router-link>
        <a v-if="isLoggedIn" @click="logOut">Log Out</a>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("logOut");
      this.$store.dispatch("updateLoggedInUser", null);
    },
  },
};
</script>

<style scoped>
header {
  height: 100px;
  background: #0f023b;
  margin-bottom: 20px;
}
nav {
  margin-right: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
nav ul {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  gap: 40px;
}
nav ul a {
  color: white;
  list-style: none;
  font-size: 20px;
  border: 2px solid white;
  border-radius: 20px;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
}
</style>