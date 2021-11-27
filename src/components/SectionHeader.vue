<template>
  <div class="section-header-container">
    <div class="section-header" :class="{ reverse: reverse }">
      <div class="section-title">
        <h2 class="section-title-text"><slot /></h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.reverse {
  justify-content: end;
}

.section-header-container {
  border-top: black solid 3px;
  border-bottom: black solid 3px;
  display: flex;
  justify-content: center;
}

.section-header {
  display: flex;
  width: 100%;
}

.section-title {
  width: 100%;
  background: black;
  margin: 0;
}

.section-title-text {
  font-size: 1.6rem;
  color: #ffd43a;
  text-align: center;
  line-height: 2;
  margin: 0;
}

@media (min-width: 768px) {
  .section-header{
    max-width: 720px;
  }

  .section-title {
    max-width: 390px;
  }

  .section-title-text {
    font-size: 2rem;
  }
}

@media (min-width: 1220px) {
  .section-header {
    max-width: 920px;
  }
}
</style>

<script>
export default {
  name: "SectionHeader",
  props: {
    reverse: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
