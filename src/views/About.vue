<template>
  <div v-for="(section, index) in sections" :key="section" v-show="!fetching">
    <Section :title="section.title" :text="section.text" :reverse="index % 2 === 1">
      <img class="about-image" :src="section.image_url" :alt="section.image_alt" />
    </Section>
  </div>
</template>

<style scoped>
.about-image {
  width: 80%;
  margin: auto;
}
</style>

<script>
import Section from "@/components/Section";
import {firestoreService, storageService} from "@/services/FirebaseConfig";
export default {
  name: "About",
  components: { Section },
  data() {
    return {
      sections: [],
      fetching: true,
    };
  },
  created() {
    firestoreService.getDocsInCollectionInOrder("about", "order").then((sections) => {
      this.sections = sections;
      this.sections.forEach((section, index) => {
        storageService.getFileURL(section.image_path).then((url) => {
          this.sections[index].image_url = url;
          this.fetching = false;
        });
      });
    });
  },
};
</script>