<template>
  <div v-for="(section, index) in sections" :key="section" :v-show="!fetching">
    <Section :title="section.title" :text="section.description" :reverse="index % 2 === 1">
      <TrumpetPerformanceImage :src="section.image_url" :alt="section.image_alt" />
    </Section>
  </div>
</template>

<style scoped>

</style>

<script>
import Section from "@/components/Section";
import {firestoreService, storageService} from "@/services/FirebaseConfig";
import TrumpetPerformanceImage from "@/components/TrumpetPerformanceImage";
export default {
  name: "TrumpetPerformance",
  components: { TrumpetPerformanceImage, Section},
  data() {
    return {
      sections: [],
      fetching: true,
    };
  },
  created() {
    firestoreService.getDocsInCollectionInOrder("trumpet_performance", "order").then((sections) => {
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
