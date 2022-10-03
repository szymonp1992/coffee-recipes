import { createRouter, createWebHistory } from "vue-router";

import Recipes from "../components/Recipes.vue";
import MyAccount from "../components/MyAccount.vue";
import FavouriteRecipes from "../components/FavouriteRecipes.vue";
import SubmittedRecipes from "../components/SubmittedRecipes.vue";
import RecipesList from "../components/RecipesList.vue";
import AddRecipe from "../components/AddRecipe.vue";
import Register from "../components/Register.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/recipes",
    },
    {
      path: "/recipes",
      component: Recipes,
      children: [
        { path: "/recipes/recipes-list", component: RecipesList },
        { path: "/recipes/add-recipe", component: AddRecipe },
      ],
    },
    {
      path: "/my-account",
      component: MyAccount,
      children: [
        {
          path: "/my-account/favourite-recipes",
          component: FavouriteRecipes,
        },
        {
          path: "/my-account/submitted-recipes",
          component: SubmittedRecipes,
        },
      ],
    },
    {
      path: "/register",
      component: Register,
    }
  ],
});

export default router;
