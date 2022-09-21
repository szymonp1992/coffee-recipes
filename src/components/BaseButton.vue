<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  height: 2.5rem;
  padding: 0 1.85rem;
  border: none;
  border-radius: 20px;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #0f023b;
}

button:hover {
  cursor: pointer;
}
</style>