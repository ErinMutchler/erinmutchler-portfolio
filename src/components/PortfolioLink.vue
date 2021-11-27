<template>
  <router-link :to="to" class="portfolio-link">
    <img :src="src" :alt="alt" />
    <h3 class="portfolio-link-text"><slot/></h3>
  </router-link>
</template>

<style scoped>
.portfolio-link {
  width: 90%;
  text-decoration: none;
}

.portfolio-link > img {
  width: 100%;
  transition: 500ms;
}

.portfolio-link:hover > img{
  transform: scale(1.1);
  transform-origin: center;
}

.portfolio-link-text {
  text-decoration: none;
  display: flex;
  justify-content: center;
  color: black;
  transition: 500ms;
}

.portfolio-link:hover > .portfolio-link-text {
  color: #3f3f3f;
}
</style>

<script>
export default {
  name: "PortfolioLink",
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
};
</script>
