<template>
  <div>
    <form @submit.prevent="login">
      <input v-model="usuario" type="text" placeholder="Usuario" />
      <input v-model="contrasena" type="password" placeholder="Contraseña" />
      <input type="submit" value="Acceder" />
    </form>
    <pre>
      {{ $data }}
    </pre>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      usuario: "",
      contrasena: "",
      message: "",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario, this.contrasena)
        .then(
          (user) => this.$router.replace("home"),
          (error) => (this.message = error.message)
        );
    },
  },
};
</script>
<style></style>
