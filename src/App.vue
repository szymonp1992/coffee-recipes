<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import RecipeCard from "./components/RecipeCard.vue";
import BaseButton from "./components/BaseButton.vue";

export default {
  components: { TheHeader, RecipeCard, BaseButton },
};
  
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, Arial, sans-serif;
}
</style>