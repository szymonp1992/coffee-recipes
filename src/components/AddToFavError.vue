<template>
    <base-error>
    <div class="error-title">
        <h2>To be able to add to favourites, you first need to log in.</h2>
    </div>
    <div class="error-button">
        <base-button @click="closeError">Okay</base-button>
    </div>
    </base-error>    
</template>

<script>
import BaseError from './BaseError.vue'
import BaseButton from './BaseButton.vue'

export default {
    components: {BaseError, BaseButton},
    methods: {closeError() {
        this.$store.commit("closeAddToFavError")
    }
    },
}
</script>

<style scoped>
.error-title {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    text-align: center;
}
.error-button {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
}
</style>