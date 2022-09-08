<template>
  <nav>
    <router-link
      to="/"
      v-if="!this.window?.localStorage.key('userId')"
      @click="logOut"
      >Logout</router-link
    >
  </nav>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
export default defineComponent({
  data() {
    return {
      auth: ""
    };
  },
  methods: {
    logOut() {
      window.localStorage.removeItem("userId");
    },
  },
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: end;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
