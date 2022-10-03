<template>
  <nav>
    <ul>
      <router-link to="/recipes/recipes-list" @click="setSelectedTab('recipes-list')">Recipes List</router-link>
      <router-link to="/recipes/add-recipe" @click="setSelectedTab('add-recipe')">Add Recipe</router-link>
    </ul>
  </nav>
  <add-to-fav-error :class="{ errorHidden: !addToFavError}">
  </add-to-fav-error>
  <form-validation-error :class="{ errorHidden: !formValidError}">

  </form-validation-error>
  <keep-alive>
  <component :is="activeTab"></component>
  </keep-alive>
  <recipes-list
    v-if="this.$router.currentRoute._value.path === '/recipes'"
  ></recipes-list>
</template>

<script>
import RecipesList from "./RecipesList.vue";
import AddRecipe from "./AddRecipe.vue"
import AddToFavError from "./AddToFavError.vue"
import FormValidationError from "./FormValidationError.vue"

export default {
  components: { RecipesList, AddRecipe, AddToFavError, FormValidationError },
  props: ['loggedOutStatus'],
  data() {
    return {
      activeTab: 'recipes-list',
      listIsActive: false,
      addingIsActive: false,
    };
  },
  methods: {
    setSelectedTab(cmp) {
      this.activeTab = cmp;
    },
  },
  computed: {
  addToFavError(){
    return this.$store.getters.addToFavError;
  },
  formValidError() {
    return this.$store.getters.formValidationError;
  }
}
}
</script>

<style scoped>
nav {
  margin: auto 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
nav ul {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
}
nav ul a {
  width: 100%;
  color: black;
  list-style: none;
  font-size: 20px;
  border: 2px solid black;
  border-radius: 20px;
  padding: 10px;
  text-decoration: none;
  text-align: center;
}

.active {
  color: white;
  border-color: red;
  background-color: red;
}
.errorHidden {
  opacity: 0;
  z-index: -100;
}
</style>