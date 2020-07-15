<template>
  <div>
    <form>
      <input type="text" placeholder="Usuario" />
      <input type="password" placeholder="Contraseña" />
      <input type="submit" value="Acceder" />
    </form>
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
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario, this.contrasena)
        .then(
          (user) => alert("Usuario conectado " + user),
          (error) => console.error(error)
        );
    },
  },
};
</script>
<style></style>
