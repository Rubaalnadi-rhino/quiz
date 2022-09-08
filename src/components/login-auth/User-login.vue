<template>
  <div class="container">
    <form @submit.prevent="checkLogin" class="container-form">
      <h3>Log In</h3>

      <div class="form-group">
        <label>Email address</label>
        <input v-model="form.email" type="email" class="" />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input v-model="form.password" type="password" class="" />
      </div>

      <button type="submit" class="btn">
        Sign In
      </button>

      <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="">Dont have account yet!</router-link>
      </p>
    </form>
    <div v-if="!form.checked" class="alert alert alert-danger" > your email or password wrong </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
export default defineComponent({
  data() {
    return {
      form: {
        email: "" as string,
        password: "" as string,
        checked: true as boolean,
      },
    };
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
      log : "auth/login"
    }),
  },
  methods: {
    ...mapActions({
      Login : "auth/Login"
    }),
    checkLogin():void {
      this.user?.filter((element:{id:number,email:string,password:string}) => {
        if (
          element.email === this.form.email &&
          element.password == this.form.password
        ) {
          localStorage.userId = element.id;
          this.$router.push({ name: "quiz" })
          this.Login(true)
          console.log("yes");
          console.log(this.log + " log in check");
          
        } else {
          console.log("no");
          this.form.checked = false
        }
      });
    },
  },
});
</script>
<style scoped  lang="scss">
.container {
  &-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    gap: 2rem;
  }
}
</style>