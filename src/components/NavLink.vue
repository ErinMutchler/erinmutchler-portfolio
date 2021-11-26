<template>
<router-link class="nav-link" :to="to"><slot/></router-link>
</template>

<style scoped>
.nav-link {
  text-decoration: none;
  color: var(--link-text-color);
  margin: 0 1.4rem;
  font-size: 1.4rem;
}
</style>

<script>
export default {
  name: "NavLink",
  props: {
    to: {
      type: String,
      required: true,
    },
  },
};
</script>