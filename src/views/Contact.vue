<template>
  <div class="contact-container">
    <label for="input-name">Your name</label>
    <input class="contact-input" id="input-name" type="text" />
    <label for="input-email">Your email</label>
    <input class="contact-input" id="input-email" type="text" />
    <label>Your message</label>
    <textarea class="contact-input" style="min-height: 4rem"></textarea>
    <button class="contact-send" @mousedown="toggleOn" @mouseup="toggleOff">SEND</button>
  </div>
</template>

<script>
export default {
  name: "Contact",
  methods: {
    toggleOn() {
      document.querySelector('.contact-send').classList.toggle('invert');
    },
    toggleOff() {
      document.querySelector('.contact-send').classList.toggle('invert');
    },
  },
};
</script>

<style scoped>
.contact-container {
  max-width: 358px;
  margin: auto;
}

.contact-input {
  width: 100%;
  margin: 0 0.4rem;
}

.contact-send {
  background: black;
  color: #ffd43a;
  border-radius: 4px;
  border: none;
  padding: 0.4rem 1rem;
}

.invert {
  background: #ffd43a;
  color: black;
}
</style>