<template>
  <div class="nav-links collapsed">
    <slot />
  </div>
</template>

<style scoped>
.nav-links {
  display: flex;
  flex-direction: column;
  transform-origin: top;
}

.collapsed {
  max-height: 0;
  transform: scaleY(0);
}

.expanded {
  max-height: 100%;
  transform: scaleY(1);
}

.transition {
  transition: 500ms;
}

@media (min-width: 768px) {
  .nav-links {
    flex-direction: row;
    margin-top: 1rem;
  }

  .collapsed {
    max-height: 100%;
    transform: scaleY(1);
  }
}
</style>

<script>
export default {
  name: "NavLinks",
};
</script>
