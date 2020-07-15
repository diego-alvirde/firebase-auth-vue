<template>
  <div class="home">
    <a href="#" @click="salir">Salir</a>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import firebase from "firebase";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    salir() {
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.replace("login"));
    },
  },
};
</script>
