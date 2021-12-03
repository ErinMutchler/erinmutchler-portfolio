<template>
  <router-link class="nav-link" :to="to" @click="pauseAudio()"
    ><slot
  /></router-link>
</template>

<style scoped>
.nav-link {
  text-decoration: none;
  color: var(--link-text-color);
  margin: 0 1.4rem;
  font-size: 1.4rem;
}
</style>

<script>
import { audioService } from "../services/AudioService";

export default {
  name: "NavLink",
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  methods: {
    pauseAudio() {
      audioService.pause();
    },
  },
};
</script>
