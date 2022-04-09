<template>
  <div class="app">
    <div class="page-container">
      <div class="nav-bar mr-auto">
        <div class="logo-container">
          <router-link to="/" class="nav-item">
            <img src="@/assets/site_logo.png"
          /></router-link>
        </div>

        <div class="nav-text-container">
          <router-link
            v-if="
              this.$route.path != '/' &&
              this.$route.path != '/register' &&
              this.$route.path != '/createaccount' &&
              this.$route.path != '/login'
            "
            to="/register"
            class="nav-item"
            >Register</router-link
          >
          <router-link
            v-if="
              this.$route.path != '/' &&
              this.$route.path != '/register' &&
              this.$route.path != '/createaccount' &&
              this.$route.path != '/login'
            "
            to="/createaccount"
            class="nav-item"
            >Create</router-link
          >
          <router-link
            v-if="
              this.$route.path != '/' &&
              this.$route.path != '/register' &&
              this.$route.path != '/createaccount' &&
              this.$route.path != '/login'
            "
            to="/explore"
            class="nav-item"
            >Explore</router-link
          >
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
// import io from "socket.io-client";
// import Jobseeker from "./views/JobseekerView.vue";
// import Register from "./views/RegisterView.vue";
// import Landingpage from "./views/LandingpageView.vue";
// import Registerpage from "./views/RegisterView.vue";
// import CreateAcc from "./views/JS_CreateAccView.vue";
// import Loginpage from "./views/LoginView.vue";
// import Explorepage from "./views/JS_exploreView.vue";
// import Matchespage from "./views/JS_matchesView.vue";
// import addjob from "./views/HM_AddJobView.vue";
export default {
  // name: "App",
  // data: function () {
  //   return {
  //     socket: io("http://localhost:3000"),
  //   };
  // },
};
</script>

<style scoped>
.app {
  width: 100%;
  display: flex;
  height: 10vh;
  flex-direction: column;
}
.nav-bar {
  /* border: 2px solid red; */
  width: 100%;
  display: flex;
  flex-direction: column;
}
.logo-container {
  /* border: 2px solid blue; */
  height: 10vh;
  position: absolute;
  left: 5%;
  top: 1%;
}
.logo-container img {
  width: 125px;
  /* border: 2px solid green; */
}
.nav-text-container {
  top: 1%;
  height: 10vh;
  position: absolute;
  right: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.page-container {
  padding-bottom: 25px;
}
.nav-item {
  color: black;
  text-transform: uppercase;
  font-family: "Manrope", sans-serif;
  padding: 16px;
  margin-left: 16px;
}
.link {
  font-size: 14px;
  transition: 0.5s ease all;
  padding-top: 4px;
}
.link:hover {
  background-image: linear-gradient(90deg, #fc8801, #dea26a);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
/*
.nav-bar {
  background-color: white;
}
.page-container {
  background-color: white;
  z-index: 99;
  width: 100%;
  transition: 0.5s ease all;
}
.nav-bar {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  transition: 0.5s ease all;
  width: 90%;
  height: auto;
}
.nav-bar .app-logo {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 10%;
}
@media (min-width: 1140px) {
  nav {
    max-width: 1140px;
  }
}
ul {
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 15%;
}
ul,
.link {
  font-weight: 500;
  list-style: none;
  text-decoration: none;
  height: auto;
}
ul,
p {
  font-weight: 500;
  list-style: none;
  text-decoration: none;
  height: auto;
}
li {
  color: black;
  text-transform: uppercase;
  font-family: "Manrope", sans-serif;
  padding: 16px;
  margin-left: 16px;
}
.link {
  font-size: 14px;
  transition: 0.5s ease all;
  padding-top: 4px;
}
.link:hover {
  background-image: linear-gradient(90deg, #fc8801, #dea26a);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
p {
  font-size: 14px;
  transition: 0.5s ease all;
  padding-top: 4px;
}
p:hover {
  background-image: linear-gradient(90deg, #fc8801, #dea26a);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.app-logo {
  display: flex;
  align-items: center;
}
.app-logo img {
  width: 125px;
} */
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@700&family=ZCOOL+QingKe+HuangYou&display=swap");
</style>