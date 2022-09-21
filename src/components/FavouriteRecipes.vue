<template>
  <section class="search">
    <filter-recipes
      @searchByName="filterRecipesByName"
      @searchByMethod="filterRecipesByMethod"
      @filterOn="displayFilteredRecipes"
    ></filter-recipes>
  </section>
  <section class="recipes">
    <ul v-if="filteredRecipes.length">
      <recipe-card
        v-for="recipe in filteredRecipes"
        :key="recipe.id"
        :brewer="recipe.brewer"
        :author="recipe.author"
        :coffeeAmount="recipe.amountOfCoffee"
        :grindSize="recipe.grindSize"
        :amountOfWater="recipe.amountOfWater"
        :description="recipe.recipeDetails"
        :name="recipe.recipeName"
        :favouredBy="recipe.favouriteOf"
      ></recipe-card>
    </ul>
    <h3 v-else>No recipes found.</h3>
  </section>
</template>

<script>
import RecipeCard from "./RecipeCard.vue";
import FilterRecipes from "./FilterRecipes.vue";

export default {
  components: { RecipeCard, FilterRecipes },
  data() {
    return {
      nameSearch: "",
      checkedMethods: ["aeropress", "v60", "other"],
      filteredRecipes: [],
    };
  },
  computed: {
    myRecipes() {
      const allRecipes = this.$store.getters.allRecipes;
      const onlyMyRecipes = allRecipes.filter(
        (recipe) => recipe.favouriteOf.includes(this.$store.getters.loggedInUser)
      );
      return onlyMyRecipes;
    },
  },
  methods: {
    filterRecipesByName(name) {
      this.nameSearch = name;
    },
    filterRecipesByMethod(methods) {
      this.checkedMethods = methods;
    },
    displayFilteredRecipes() {
      const recipesFoundByName = this.myRecipes.filter((recipe) =>
        recipe.recipeName.toLowerCase().includes(this.nameSearch.toLowerCase())
      );
      const recipesFoundByMethod = this.myRecipes.filter((recipe) =>
        this.checkedMethods.includes(recipe.brewer.toLowerCase())
      );
      const recipesToDisplay = recipesFoundByName.filter((recipe) =>
        recipesFoundByMethod.includes(recipe)
      );
      this.filteredRecipes = recipesToDisplay;
    },
  },
  mounted() {
    this.displayFilteredRecipes();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}

h3 {
  text-align: center;
}
</style>