import { createRouter, createWebHistory } from "vue-router";
import Landingpage from "../views/LandingpageView.vue";
import Registerpage from "../views/RegisterView.vue";
import CreateAcc from "../views/JS_CreateAccView.vue";
import Loginpage from "../views/LoginView.vue";
import JS_Explorepage from "../views/JS_exploreView.vue";
import HM_Matchespage from "../views/HM_matchesView";
import addjob from "../views/HM_AddJobView.vue";
import postedjobs from "../views/HM_postedJobs.vue";
import HM_Explorepage from "../views/HM_exploreView.vue";
import JS_Matchespage from "../views/JS_matchesView.vue";
import JS_profile from "../views/JS_ProfileView.vue";
import JS_editprofile from "../views/JS_EditprofileView.vue";

const routes = [
  { path: "", name: "Landingpage", component: Landingpage },
  { path: "/register", name: "Registerpage", component: Registerpage },
  { path: "/createaccount", name: "CreateAcc", component: CreateAcc },
  {
    path: "/jobseeker-explore",
    name: "jobseeker-explorepage",
    component: JS_Explorepage,
  },
  { path: "/login", name: "Loginpage", component: Loginpage },
  {
    path: "/hiringmanager-addjob",
    name: "hiringmanager-addjob",
    component: addjob,
  },
  {
    path: "/hiringmanager-postedjobs",
    name: "hiringmanager-postedjobs",
    component: postedjobs,
  },
  {
    path: "/hiringmanager-explore",
    name: "hiringmanager-explore",
    component: HM_Explorepage,
  },
  {
    path: "/hiringmanager-matches",
    name: "hiringmanager-matches",
    component: HM_Matchespage,
  },
  {
    path: "/jobseeker-matches",
    name: "jobseeker-matches",
    component: JS_Matchespage,
  },
  {
    path: "/jobseeker-profile",
    name: "jobseeker-profile",
    component: JS_profile,
  },
  {
    path: "/jobseeker-edit-profile",
    name: "jobseeker-edit-profile",
    component: JS_editprofile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
