<template>
  <NavBar />
  <ViewTitle />
  <router-view />
  <Footer />
</template>

<style>
@import url("https://use.typekit.net/xjr6fat.css");

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
import ViewTitle from "@/components/ViewTitle";
import Footer from "@/components/Footer";
export default {
  components: { ViewTitle, NavBar, Footer, },
}
</script>