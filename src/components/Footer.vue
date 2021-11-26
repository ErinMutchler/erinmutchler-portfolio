<template>
  <footer class="footer">
    <div class="social-media-icons">
      <SocialMediaIcon :src="facebook" to="https://www.facebook.com" />
      <SocialMediaIcon :src="instagram" to="https://www.instagram.com" />
      <SocialMediaIcon :src="spotify" to="https://www.spotify.com" />
      <SocialMediaIcon :src="youtube" to="https://www.youtube.com" />
      <SocialMediaIcon :src="github" to="https://www.github.com" />
    </div>
    <span>© Erin Mutchler 2021</span>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: black solid 3px;
  border-bottom: black solid 3px;
  padding: 1rem;
  margin: 1rem 0;
}

.social-media-icons {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>

<script>
import SocialMediaIcon from "@/components/SocialMediaIcon";
import facebook from "@/assets/social-media-icons/facebook.svg";
import github from "@/assets/social-media-icons/github.svg";
import instagram from "@/assets/social-media-icons/instagram.svg";
import spotify from "@/assets/social-media-icons/spotify.svg";
import youtube from "@/assets/social-media-icons/youtube.svg";

export default {
  name: "Footer",
  components: { SocialMediaIcon },
  data() {
    return {
      facebook: facebook,
      github: github,
      instagram: instagram,
      spotify: spotify,
      youtube: youtube,
    };
  },
};
</script>