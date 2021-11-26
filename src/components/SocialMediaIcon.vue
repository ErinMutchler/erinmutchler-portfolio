<template>
  <a :href="to">
    <img class="social-media-icon" :src="src" />
  </a>
</template>

<style scoped>
.social-media-icon {
  margin: 0 0.4rem;
  width: 2rem;
  height: 2rem;
}
</style>

<script>
export default {
  name: "SocialMediaIcon",
  props: {
    src: {
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
