<template>
  <base-card>
    <form @submit.prevent="submitRecipe">
      <div class="brewer">
        <label for="method">Select method: </label>
        <input
          type="radio"
          id="aeropress"
          name="method"
          value="Aeropress"
          v-model="brewer"
        /><label for="aeropress">Aeropress</label>
        <input
          type="radio"
          id="v60"
          name="method"
          value="V-60"
          v-model="brewer"
        /><label for="v60">V-60</label>
        <input
          type="radio"
          id="other"
          name="method"
          value="Other"
          v-model="brewer"
        /><label for="other">Other</label>
      </div>
      <div class="grams-of-coffee">
        <label for="grams-of-coffee">Grams of coffee: </label>
        <input
          type="number"
          id="grams-of-coffee"
          name="grams-of-coffee"
          v-model="gramsOfCoffee"
        />
      </div>
      <div class="grind-size">
        <label for="fine">Grind size: </label>
        <input
          type="radio"
          id="aeropress"
          name="grind-size"
          value="Fine"
          v-model="grindSize"
        /><label for="fine">Fine</label>
        <input
          type="radio"
          id="medium-fine"
          name="grind-size"
          value="Medium-fine"
          v-model="grindSize"
        /><label for="medium-fine">Medium-fine</label>
        <input
          type="radio"
          id="medium"
          name="grind-size"
          value="Medium"
          v-model="grindSize"
        /><label for="medium">Medium</label>
        <input
          type="radio"
          id="medium-coarse"
          name="grind-size"
          value="Medium-coarse"
          v-model="grindSize"
        /><label for="medium-coarse">Medium-coarse</label>
        <input
          type="radio"
          id="coarse"
          name="grind-size"
          value="Coarse"
          v-model="grindSize"
        /><label for="coarse">Coarse</label>
      </div>
      <div class="grams-of-water">
        <label for="grams-of-water">Grams of water: </label>
        <input
          type="number"
          id="grams-of-water"
          name="grams-of-water"
          v-model="gramsOfWater"
        />
      </div>
      <div class="recipe-description">
        <label for="recipe-description">Recipe: </label>
        <textarea
          rows="5"
          id="recipe-description"
          name="recipe-description"
          v-model="recipeDescription"
        >
        </textarea>
      </div>
      <div class="recipe-name">
        <label for="recipe-name">Recipe name: </label>
        <input
          type="text"
          id="recipe-name"
          name="recipe-name"
          v-model="recipeName"
        />
      </div>
      <div class="recipe-author">
        <label for="recipe-author">Recipe author: </label>
        <input
          type="text"
          id="recipe-author"
          name="recipe-author"
          v-model="recipeAuthor"
          :disabled="disabled"
        />
      </div>
      <div class="submit-button">
        <base-button type="submit">Submit</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseCard from "./BaseCard.vue";
import BaseButton from "./BaseButton.vue";

export default {
  data() {
    return {
      brewer: "",
      gramsOfCoffee: 18,
      grindSize: "",
      gramsOfWater: 300,
      recipeDescription: "",
      recipeName: "",
      newRecipe: {},
      recipeAuthor: "",
      disabled: false,
    };
  },
  components: {
    BaseCard,
    BaseButton,
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    loggedInRecipeAuthor() {
      const author = this.$store.getters.loggedInUser;
      if (author) {
        this.disabled = true;
        return author;
      } else {
        this.disabled = false;
        return "";
      }
    },
  },
  methods: {
    submitRecipe() {
      this.newRecipe = {
        id: Date.now() + Math.random(),
        brewer: this.brewer,
        author: this.recipeAuthor,
        amountOfCoffee: this.gramsOfCoffee,
        grindSize: this.grindSize,
        amountOfWater: this.gramsOfWater,
        recipeDetails: this.recipeDescription,
        recipeName: this.recipeName,
        favouriteOf: [],
        comments: [],
      };
      this.addRecipe(this.newRecipe);
    },
    addRecipe(submittedRecipe) {
      this.$store.dispatch("addRecipe", submittedRecipe);
      this.brewer = "";
      this.gramsOfCoffee = 18;
      this.grindSize = "";
      this.gramsOfWater = 300;
      this.recipeDescription = "";
      this.recipeName = "";
      this.recipeAuthor = `${this.isLoggedIn ? this.loggedInRecipeAuthor : ""}`;
    },
  },
  activated() {
    this.recipeAuthor = `${this.isLoggedIn ? this.loggedInRecipeAuthor : ""}`;
  },
};
</script>

<style scoped>
div {
  margin-top: 0.5rem;
}
label {
  line-height: 1.5rem;
  font-weight: bold;
}
input[type="number"],
input[type="text"] {
  margin: auto 5px;
  display: inline-block;
  border: 2px solid #0f023b;
  border-radius: 20px;
  line-height: 1.5rem;
  padding: 0.5rem;
  min-width: 50%;
  max-width: 75%;
}

.recipe-description {
  display: flex;
  vertical-align: top;
}

.recipe-description label {
  line-height: 2rem;
}

textarea {
  margin: auto 5px;
  display: inline-block;
  border: 2px solid #0f023b;
  border-radius: 20px;
  line-height: 1.5rem;
  padding: 0.5rem;
  width: 75%;
  min-width: 50%;
  max-width: 75%;
}

input[type="radio"] {
  margin: auto 5px;
}

.submit-button {
  display: flex;
  justify-content: flex-end;
}
</style>