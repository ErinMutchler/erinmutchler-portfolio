<template>
  <nav class="nav-bar">
    <NavDropdownToggler @click="toggle" />
    <NavLinks>
      <NavLink to="/">PORTFOLIO</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
      <NavLink to="/contact">CONTACT</NavLink>
    </NavLinks>
  </nav>
</template>

<style scoped>
.nav-bar {
  display: flex;
  flex-direction: column;
  height: auto;
}
</style>

<script>
import NavDropdownToggler from "@/components/NavDropdownToggler";
import NavLinks from "@/components/NavLinks";
import NavLink from "@/components/NavLink";
export default {
  name: "NavBar",
  components: { NavLink, NavLinks, NavDropdownToggler },
  methods: {
    toggle() {
      document.querySelector(".nav-links").classList.toggle("transition");
      document.querySelector(".nav-links").classList.toggle("expanded");
      document.querySelector(".nav-links").classList.toggle("collapsed");
      setTimeout(() => {
        document.querySelector(".nav-links").classList.toggle("transition");
      }, 500);
    },
  },
};
</script>