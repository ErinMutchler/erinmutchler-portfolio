<template>
  <div class="portfolio-container">
    <PortfolioLink :src="temp" alt="trumpet performance portfolio" to="/trumpet-performance">TRUMPET PERFORMANCE</PortfolioLink>
    <PortfolioLink :src="temp" alt="audio engineering portfolio" to="/audio-engineering">AUDIO ENGINEERING</PortfolioLink>
    <PortfolioLink :src="temp" alt="software design portfolio" to="/software-design">SOFTWARE DESIGN</PortfolioLink>
  </div>
</template>

<style scoped>
.portfolio-container {
  display: flex;
  flex-direction: column;
  max-width: 960px;
  justify-content: center;
  align-items: center;
  margin: auto;
}

@media (min-width: 768px) {
  .portfolio-container {
    flex-direction: row;
  }
}
</style>

<script>
import PortfolioLink from "@/components/PortfolioLink";
import temp from "@/assets/temp.svg";
export default {
  name: "Home",
  components: { PortfolioLink },
  data() {
    return {
      temp: temp,
    };
  },
};
</script>
