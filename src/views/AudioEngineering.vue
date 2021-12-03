<template>
  <div v-for="(section, index) in sections" :key="section" :v-show="!fetching">
    <Section
      :title="section.title"
      :text="section.description"
      :reverse="index % 2 === 1"
    >
      >
      <div class="audio-engineering-image">
        <img :src="section.image_url" :alt="section.image_alt" />
        <div class="filter" />
        <PlayPauseButton
          @click="toggleAudio(index)"
          :playing="section.playing"
        />
      </div>
    </Section>
  </div>
</template>

<style scoped>
.audio-engineering-image {
  width: 80%;
  margin: 1rem;
  position: relative;
  aspect-ratio: 1/1;
}

.audio-engineering-image > img {
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
  .audio-engineering-image {
    width: 250%;
  }
}
</style>

<script>
import { firestoreService, storageService } from "@/services/FirebaseConfig";
import Section from "../components/Section";
import PlayPauseButton from "../components/PlayPauseButton";
import { audioService } from "../services/AudioService";
export default {
  name: "AudioEngineering",
  components: { Section, PlayPauseButton },
  data() {
    return {
      sections: [],
      fetching: true,
      playing: false,
      currentSongIndex: -1,
    };
  },
  methods: {
    toggleAudio(index) {
      if (this.currentSongIndex >= 0) {
        if (this.sections[index].audio_url !== audioService.track.src) {
          this.sections[this.currentSongIndex].playing = false;
        }
      }

      audioService.loadAudio(this.sections[index].audio_url);
      audioService.toggle();
      this.sections[index].playing = !this.sections[index].playing;

      this.currentSongIndex = index;
      console.log(this.currentSongIndex);
    },
  },
  beforeCreate() {
    firestoreService.getAudioEngineeringSections().then((sections) => {
      this.sections = sections;

      this.sections.forEach((section, index) => {
        let imagePromise = storageService.getFileURL(section.image_path);
        let audioPromise = storageService.getFileURL(section.audio_path);

        imagePromise.then((url) => {
          this.sections[index].image_url = url;
        });
        audioPromise.then((url) => {
          this.sections[index].audio_url = url;
        });

        Promise.allSettled([imagePromise, audioPromise]).then(() => {
          this.fetching = false;
        });
      });
    });
  },
};
</script>
