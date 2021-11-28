<template>
  <div class="play-pause-button">
    <svg viewBox="0 0 100 100" @click="playing = !playing">
      <circle
        cx="50"
        cy="50"
        r="30"
        stroke="white"
        stroke-width="4"
        fill="transparent"
      />

      <polygon points="40,35 40,65 64,50" stroke-width="2" stroke="white" fill="white" v-show="!playing" />

      <line x1="42" x2="42" y1="35" y2="65" stroke-width="4" stroke="white" v-show="playing" />
      <line x1="58" x2="58" y1="35" y2="65" stroke-width="4" stroke="white" v-show="playing" />

    </svg>
  </div>
</template>

<script>
export default {
  name: "PlayPauseButton",
  data() {
    return {
      playing: false,
    };
  },
};
</script>

<style scoped>
.play-pause-button {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
}

.play-pause-button > svg {
  width: 30%;
  fill: white;
}
</style>
