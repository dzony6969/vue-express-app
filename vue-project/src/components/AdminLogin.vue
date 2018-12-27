<template>
    <v-container>
    <v-layout row class="text-xs-center">
      <v-flex xs12 md4 lg4 class="grey lighten-4 center--login">
        <v-container class="text-xs-center">
          <v-card flat>
            <v-card-title primary-title>
              <h4>Login page for admin</h4>
            </v-card-title>
            <v-form>
              <p>password: admin username: admin</p>
            <v-text-field prepend-icon="person" name="Username" v-model='admin.user' label="Username"></v-text-field>
            <v-text-field prepend-icon="lock" name="Password" v-model='admin.password' label="Password" type="password"></v-text-field>
            <v-card-actions>
              <v-btn primary large block @click='checkAdmin(), newOrders()'>Login</v-btn>
            </v-card-actions>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "admin",
  computed: {
    ...mapGetters(["admin"])
  },
  methods: {
    ...mapActions(["newOrders"]),
    checkAdmin() {
      if (this.admin.password === "admin" && this.admin.user === "admin") {
        this.admin.isAdmin = true;
        (this.admin.password = "admin"), (this.admin.user = "admin");
        this.$router.push({ name: "dashboard" });
      } else {
        alert("wrong password or username");
      }
    }
  }
};
</script>
<style lang="scss">
.center--login {
  margin: 0px auto;
}
</style>
