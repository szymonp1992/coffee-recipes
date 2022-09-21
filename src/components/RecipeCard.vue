<template>
  <base-card>
    <div class="recipe__header">
      <div class="recipe__brewer">
        <p><font-awesome-icon icon="fa-solid fa-mug-hot" /> {{ brewer }}</p>
      </div>
      <div class="recipe__author">
        <p>{{ author }}</p>
      </div>
    </div>
    <div class="recipe__details">
      <ul class="recipe__details-list">
        <li>
          <font-awesome-icon icon="fa-solid fa-weight-scale" />
          {{ coffeeAmount }} grams of coffee
        </li>
        <li>
          <font-awesome-icon icon="fa-solid fa-ellipsis" />
          {{ grindSize }} grind size
        </li>
        <li>
          <font-awesome-icon icon="fa-solid fa-glass-water" />
          {{ amountOfWater }} grams of water
        </li>
      </ul>
    </div>
    <div class="recipe__description">
      <p>{{ description }}</p>
    </div>
    <div class="recipe__footer">
      <h3>{{ name }}</h3>
      <div class="recipe__footer__buttons">
        <base-button v-if="!isRecipeFavorite" class="white" @click="addToFav"
          >Add to favourites</base-button
        >
        <base-button v-else class="red" @click="removeFromFav"
          >Remove from favourites</base-button
        >
      </div>
    </div>
  </base-card>
</template>

<script>
import BaseButton from "./BaseButton.vue";
import BaseCard from "./BaseCard.vue";

export default {
  props: [
    "brewer",
    "author",
    "coffeeAmount",
    "grindSize",
    "amountOfWater",
    "description",
    "name",
    "favouredBy",
  ],
  components: { BaseButton, BaseCard },
  methods: {
    removeFromFav() {
      if (!this.$store.getters.loggedInUser) return;
      this.$store.dispatch("removeFromFavorites", {
        user: this.$store.getters.loggedInUser,
        recipeName: this.name,
      });
    },
    addToFav() {
      if (!this.$store.getters.loggedInUser) return;
      this.$store.dispatch("addToFavorites", {
        user: this.$store.getters.loggedInUser,
        recipeName: this.name,
      });
    },
  },
  computed: {
    isRecipeFavorite() {
      return this.favouredBy.includes(this.$store.getters.loggedInUser)
    }
  },
};
</script>

<style scoped>
.recipe__header,
.recipe__details-list,
.recipe__footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.recipe__details,
.recipe__description,
.recipe__footer {
  margin-top: 15px;
}

.recipe__author {
  font-style: italic;
  color: #bbb;
}

.recipe__details li {
  list-style: none;
}

h3 {
  line-height: 2rem;
}

.recipe__footer__buttons {
  display: flex;
  gap: 1.5rem;
}

.red {
  background-color: red;
  border: 2px solid rgb(71, 1, 1);
  color: white;
}
.white {
  background-color: white;
  border: 2px solid #0f023b;
  color: #0f023b;
}
</style>