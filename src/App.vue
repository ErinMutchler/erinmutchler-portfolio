<template>
  <NavBar />
  <router-view />
</template>

<style>

:root {
  --link-text-color: black;
}
body {
  background: #ffd43a;
  margin: 0;
  padding: 0;
  font-family: quasimoda, sans-serif;
}
</style>
<script>
import NavBar from "@/components/NavBar";
export default {
  components: { NavBar }
}
</script>