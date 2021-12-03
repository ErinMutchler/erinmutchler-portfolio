<template>
  <SectionHeader :reverse="reverse">{{ title }}</SectionHeader>
  <section class="section">
    <div class="section-content" :class="{ reverse: reverse }">
      <slot />
      <p class="section-text">{{ text }}</p>
    </div>
  </section>
</template>

<style scoped>
.section {
  display: flex;
  justify-content: center;
  margin: auto;
}

.section-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.section-text {
  text-align: justify;
  padding: 1rem;
  line-height: 1.4rem;
}

@media (min-width: 768px) {
  .section {
    max-width: 720px;
  }

  .reverse {
    flex-direction: row-reverse !important;
  }

  .section-content {
    flex-direction: row;
  }
}

@media (min-width: 1220px) {
  .section {
    max-width: 960px;
  }
}
</style>

<script>
import SectionHeader from "@/components/SectionHeader";

export default {
  name: "Section",
  components: { SectionHeader },
  props: {
    title: {
      type: String,
      required: true,
    },
    reverse: {
      type: Boolean,
      required: false,
      default: false,
    },
    text: {
      type: String,
      required: false,
    },
  },
};
</script>
