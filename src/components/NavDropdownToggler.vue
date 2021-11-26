<template>
  <svg class="nav-dropdown-toggler" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" @click="toggle">
    <line x1="80" x2="220" y1="100" y2="100" stroke-width="20" />
    <line x1="80" x2="220" y1="150" y2="150" stroke-width="20" />
    <line x1="80" x2="220" y1="200" y2="200" stroke-width="20" />
  </svg>
</template>

<style scoped>
.nav-dropdown-toggler {
  width: 5rem;
  fill: none;
  stroke: black;
  stroke-linecap: round;
  cursor: pointer;
}

.nav-dropdown-toggler > line {
  transition: 500ms;
  transform-origin: center;
}

.top-line-toggled {
  transform: rotate(45deg) translateY(17%) scaleX(1.4);
}

.middle-line-toggled {
  opacity: 0;
}

.bottom-line-toggled{
  transform: rotate(-45deg) translateY(-17%) scaleX(1.4);
}

@media (min-width: 768px) {
  .nav-dropdown-toggler {
    display: none;
  }
}
</style>

<script>
export default {
  name: "NavDropdownToggler",
  methods: {
    toggle() {
      let lines = document.querySelectorAll(
        ".nav-dropdown-toggler > line"
      );
      lines[0].classList.toggle("top-line-toggled");
      lines[1].classList.toggle("middle-line-toggled");
      lines[2].classList.toggle("bottom-line-toggled");
    },
  },
};
</script>
