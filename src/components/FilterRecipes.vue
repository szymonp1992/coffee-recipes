<template>
  <base-card>
    <form @submit.prevent action="">
      <div class="name-search">
        <label for="name-search">Search by name: </label>
        <input
          @input="filterRecipesByName"
          type="text"
          id="name-search"
          name="name-search"
          v-model="nameSearch"
        />
      </div>
      <div class="method-search">
        <label for="method-search">Search by method: </label>
        <input
          @click="filterRecipesByMethod"
          type="checkbox"
          id="aeropress"
          name="aeropress"
          checked
        /><label for="aeropress">Aeropress</label>
        <input
          @click="filterRecipesByMethod"
          type="checkbox"
          id="v60"
          name="v60"
          checked
        /><label for="v60">V-60</label>
        <input
          @click="filterRecipesByMethod"
          type="checkbox"
          id="other"
          name="other"
          checked
        /><label for="other">Other</label>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseCard from "./BaseCard.vue";

export default {
  components: { BaseCard },
  data() {
    return {
      nameSearch: "",
      checkedMethods: ["aeropress", "v60", "other"],
    };
  },
  methods: {
    filterRecipesByName() {
      this.$emit("searchByName", this.nameSearch);
      this.$emit("filterOn");
    },
    filterRecipesByMethod(event) {
      if (event.target.checked) {
        this.checkedMethods.push(event.target.name);
      } else if (!event.target.checked) {
        this.checkedMethods = this.checkedMethods.filter(
          (method) => method !== event.target.name
        );
      }
      this.$emit("searchByMethod", this.checkedMethods);
      this.$emit("filterOn");
    },
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
input[type="text"] {
  margin: auto 5px;
  display: inline-block;
  border: 2px solid #0f023b;
  border-radius: 20px;
  line-height: 1.5rem;
  padding: 0.5rem;
  min-width: 50%;
}

input[type="checkbox"] {
  margin: auto 5px;
}
</style>