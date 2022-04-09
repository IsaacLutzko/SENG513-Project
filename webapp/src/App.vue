<template>
  <div class="app">
    <div class="page-container">
      <div class="nav-bar mr-auto">
        <div class="logo-container">
          <router-link to="/" class="nav-item">
            <img src="@/assets/site_logo.png"
          /></router-link>
        </div>

        <div class="full-size">
          <!-- Job seeker -->
          <div class="nav-text-container">
            <router-link
              v-if="
                this.$route.path != '/' &&
                this.$route.path != '/register' &&
                this.$route.path != '/createaccount' &&
                this.$route.path != '/login' &&
                this.$route.path != '/hiringmanager-explore' &&
                this.$route.path != '/hiringmanager-matches' &&
                this.$route.path != '/hiringmanager-postedjobs' &&
                this.$route.path != '/hiringmanager-addjob'
              "
              to="/jobseeker-explore"
              class="nav-item"
              >Explore</router-link
            >
            <router-link
              v-if="
                this.$route.path != '/' &&
                this.$route.path != '/register' &&
                this.$route.path != '/createaccount' &&
                this.$route.path != '/login' &&
                this.$route.path != '/hiringmanager-explore' &&
                this.$route.path != '/hiringmanager-matches' &&
                this.$route.path != '/hiringmanager-postedjobs' &&
                this.$route.path != '/hiringmanager-addjob'
              "
              to="/jobseeker-matches"
              class="nav-item"
              >Matches</router-link
            >
            <router-link
              v-if="
                this.$route.path != '/' &&
                this.$route.path != '/register' &&
                this.$route.path != '/createaccount' &&
                this.$route.path != '/login' &&
                this.$route.path != '/hiringmanager-explore' &&
                this.$route.path != '/hiringmanager-matches' &&
                this.$route.path != '/hiringmanager-postedjobs' &&
                this.$route.path != '/hiringmanager-addjob'
              "
              to="#"
              class="nav-item"
              >Profile</router-link
            >

            <!-- HiringManager -->
            <router-link
              v-if="
                this.$route.path != '/' &&
                this.$route.path != '/register' &&
                this.$route.path != '/createaccount' &&
                this.$route.path != '/login' &&
                this.$route.path != '/jobseeker-explore' &&
                this.$route.path != '/jobseeker-matches' &&
                this.$route.path != '/jobseeker-profile' &&
                this.$route.path != '/jobseeker-edit-profile'
              "
              to="/hiringmanager-explore"
              class="nav-item"
              >Explore</router-link
            >
            <router-link
              v-if="
                this.$route.path != '/' &&
                this.$route.path != '/register' &&
                this.$route.path != '/createaccount' &&
                this.$route.path != '/login' &&
                this.$route.path != '/jobseeker-explore' &&
                this.$route.path != '/jobseeker-matches' &&
                this.$route.path != '/jobseeker-profile' &&
                this.$route.path != '/jobseeker-edit-profile'
              "
              to="/hiringmanager-matches"
              class="nav-item"
              >Matches</router-link
            >
            <router-link
              v-if="
                this.$route.path != '/' &&
                this.$route.path != '/register' &&
                this.$route.path != '/createaccount' &&
                this.$route.path != '/login' &&
                this.$route.path != '/jobseeker-explore' &&
                this.$route.path != '/jobseeker-matches' &&
                this.$route.path != '/jobseeker-profile' &&
                this.$route.path != '/jobseeker-edit-profile'
              "
              to="/hiringmanager-postedjobs"
              class="nav-item"
              >Jobs</router-link
            >
            <!-- Universal logout -->
            <router-link
              v-if="
                this.$route.path != '/' &&
                this.$route.path != '/register' &&
                this.$route.path != '/createaccount' &&
                this.$route.path != '/login'
              "
              to="/login"
              class="nav-item"
              >Logout</router-link
            >
          </div>
        </div>
        <div class="collapsed-button"></div>
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
  font-size: 15px;
  transition: 0.5s ease all;
  padding-top: 4px;
  text-decoration: none;
  font-weight: bolder;
}

.nav-item:hover {
  background-image: linear-gradient(90deg, #fc8801, #dea26a);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
</style>
