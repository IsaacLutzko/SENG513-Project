import { createRouter, createWebHistory } from "vue-router";
// import Jobseeker from "./views/JobseekerView.vue";
// import Register from "./views/RegisterView.vue";
import Landingpage from "../views/LandingpageView.vue";
import Registerpage from "../views/RegisterView.vue";
import CreateAcc from "../views/JS_CreateAccView.vue";
import Loginpage from "../views/LoginView.vue";
import Explorepage from "../views/JS_exploreView.vue";
// import Matchespage from "./views/JS_matchesView.vue";
// import addjob from "./views/HM_AddJobView.vue";

const routes = [
  { path: "", name: "Landingpage", component: Landingpage },
  { path: "/register", name: "Registerpage", component: Registerpage },
  { path: "/createaccount", name: "CreateAcc", component: CreateAcc },
  { path: "/explore", name: "Explorepage", component: Explorepage },
  { path: "/login", name: "Loginpage", component: Loginpage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
