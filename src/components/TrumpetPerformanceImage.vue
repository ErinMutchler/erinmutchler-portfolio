<template>
  <div class="trumpet-performance-image">
    <img :src="src" :alt="alt">
    <div class="filter" />
    <PlayPauseButton />
  </div>
</template>

<style scoped>
.trumpet-performance-image {
  width: 80%;
  margin: 1rem;
  position: relative;
  aspect-ratio: 1/1;
}

.trumpet-performance-image > img {
  width: 100%;
  position: absolute;
  z-index: 1;
}

.filter {
  background: #41414180;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
}

@media (min-width: 768px) {
  .trumpet-performance-image {
    width: 250%;
  }
}
</style>

<script>
import PlayPauseButton from "@/components/PlayPauseButton";
export default {
  name: "TrumpetPerformanceImage",
  components: { PlayPauseButton },
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
};
</script>