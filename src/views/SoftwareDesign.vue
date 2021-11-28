<template>
  <div v-for="(section, index) in sections" :key="section" v-show="!fetching">
    <Section :title="section.title" :text="section.description" :reverse="index % 2 === 1">
      <img class="software-design-image" :src="section.image_url" :alt="section.image_alt" />
    </Section>
  </div>
</template>

<script>
import Section from "@/components/Section";
import { firestoreService, storageService } from "@/services/FirebaseConfig";
export default {
  name: "SoftwareDesign",
  components: { Section },
  data() {
    return {
      sections: [],
      fetching: true,
    };
  },
  created() {
    firestoreService.getDocsInCollectionInOrder("software_design", "order").then((sections) => {
      this.sections = sections;
      this.sections.forEach((section, index) => {
        storageService.getFileURL(section.image_path).then((url) => {
          this.sections[index].image_url = url;
          this.fetching = false;
        });
      });
    });
  }
};
</script>

<style scoped>
.software-design-image {
  width: 30%;
  margin: 1rem;
}
</style>