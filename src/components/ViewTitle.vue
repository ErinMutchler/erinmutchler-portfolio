<template>
  <div class="view-title-container">
    <h1 class="view-title">{{ viewTitle }}</h1>
  </div>
</template>

<style scoped>
.view-title-container {
  padding-left: 3rem;
  max-width: 960px;
  margin: auto;
}

.view-title {
  text-transform: uppercase;
  font-weight: 400;
  font-size: 2.2rem;
}

@media (min-width: 768px) {
  .view-title {
    font-size: 4rem;
  }
}
</style>

<script>
export default {
  name: "ViewTitle",
  computed: {
    viewTitle() {
      return this.$route.name;
    }
  },
};
</script>
