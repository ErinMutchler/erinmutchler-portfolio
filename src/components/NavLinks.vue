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
  min-height: 0;
  transform: scaleY(0);
}

.expanded {
  min-height: 100%;
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
    min-height: 100%;
    transform: scaleY(1);
  }
}
</style>

<script>
export default {
  name: "NavLinks",
};
</script>
