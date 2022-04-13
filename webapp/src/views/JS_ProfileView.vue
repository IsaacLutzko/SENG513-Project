<template>
  <div class="page-container">
    <div class="main-header">
      <div class="main-heading">How others view your profile</div>
      <div class="edit-icon">
        <img src="@/assets/edit_icon.png" @click="redirect" />
      </div>
      <hr />
    </div>
    <div class="card-container">
      <!-- <div v-for="user in activeUsers" :key="user"> -->
      <div>
        <div class="row d-flex justify-content-center" id="card-img">
          <div class="col-sm-auto">
            <div class="profile-image d-flex justify-content-center">
              <img class="logo" :src="`data:image/png;base64,${this.pic}`" />

              <!-- How to make image dynamic? -->
            </div>
            <div class="profile-name">
              {{ this.firstname }} {{ this.lastname }}
            </div>
          </div>
        </div>

        <div class="social-cont">
          <div v-for="social in this.socials" :key="social" class="row socials">
            <div v-if="social.platform == 'Linkedin'" class="social-icon col">
              <a target="_blank" :href="social.link" aria-label="Next"
                ><img class="social-logo-link" src="@/assets/LinkedInLogo.png"
              /></a>
            </div>
            <div
              v-else-if="social.platform == 'Github'"
              class="social-icon col"
            >
              <a target="_blank" :href="social.link" aria-label="Next"
                ><img class="social-logo-link" src="@/assets/GitHubLogo.png"
              /></a>
            </div>
          </div>
        </div>

        <div class="row d-flex justify-content-center" id="about-me">
          <div class="col-sm-auto">
            <div class="about-me-header">
              <h5 class="header-about">About Me</h5>
            </div>
            <div class="about-me-desc">{{ this.aboutyou }}</div>
          </div>
        </div>

        <div class="row d-flex justify-content-center" id="work-experiences">
          <div class="experience-header">
            <h5 class="experience-head">Experience</h5>
          </div>
          <div
            v-for="workExp in this.work_experience"
            :key="workExp"
            class="col-sm-auto"
          >
            <!-- first work experience example -->
            <div class="work-example1">
              <div class="work-header1">
                <h5 class="work-head1">{{ workExp.job_title }}</h5>
              </div>
              <div class="work-info">
                {{ workExp.company }} - {{ workExp.years }} years
              </div>
              <div class="work-exp-desc">{{ workExp.description }}</div>
            </div>
          </div>
        </div>

        <div class="row d-flex justify-content-center" id="skills">
          <div class="skills-header">
            <h5 class="skills-head">Skills</h5>
          </div>
          <div v-for="skill in this.skills" :key="skill" class="col-sm-auto">
            <div class="skill-list">
              <label>{{ skill }}</label>
            </div>
          </div>
        </div>

        <div class="row d-flex justify-content-center" id="education-top">
          <div class="col-sm-auto">
            <div class="edu-header">
              <h5 class="edu-head">Education</h5>
            </div>
          </div>
        </div>

        <div class="row d-flex justify-content-start" id="education-info">
          <div
            v-for="education in this.educations"
            :key="education"
            class="col-12"
          >
            <div class="edu-ex1">
              <div class="edu-head1">
                <h5 class="edu-head-deg">
                  {{ education.degree_type }} at {{ education.institute }}
                </h5>
              </div>
              <div class="edu-info">
                {{ education.start_date }} --- {{ education.end_date }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Websocket from "../../services/webSocket";
export default {
  data() {
    return {
      socket: Websocket,
      pic: null,
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      aboutyou: "",
      job_types: [],
      skills: [],
      work_experience: [
        {
          job_seeker_email: "",
          company: "",
          job_title: "",
          job_type: "",
          years: "",
          description: "",
        },
      ],
      socials: [
        {
          platform: "",
          link: "",
        },
      ],
      educations: [
        {
          institute: "",
          start_date: "",
          end_date: "",
          degree_type: "",
        },
      ],
    };
  },
  methods: {
    getMyInfo: function () {
      this.socket.emit("myinfo");
    },
    arrayBufferToBase64: function (buffer) {
      var binary = "";
      var bytes = new Uint8Array(buffer);
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      return window.btoa(binary);
    },
    myinfo_listen: function () {
      //
      this.socket.on("notloggedin", () => {
        this.$router.push({ path: "/login", replace: true });
      });

      //
      this.socket.on("loggedin", () => {
        this.getMyInfo();
      });

      this.socket.on("info", (user) => {
        this.pic = this.arrayBufferToBase64(user.pic);
        // const reader = new FileReader();
        // this.url = URL.createObjectURL(this.pic);
        // reader.readAsDataURL(this.pic);

        this.email = user.email;
        this.firstname = user.firstname;
        this.lastname = user.lastname;
        this.aboutyou = user.aboutyou;
        this.job_types = user.job_typeslo;
        this.skills = user.skills;
        this.work_experience = user.work_experience;
        this.socials = user.socials;
        this.educations = user.education;
      });
    },
    redirect: function () {
      this.$router.push({ path: "/jobseeker-edit-profile", replace: true });
    },
    nine_logincheck: function () {
      this.socket.emit("logincheck");
    },
  },
  mounted() {
    this.myinfo_listen();
    this.nine_logincheck();
  },
  unmounted() {
    this.socket.removeEventListener();
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.page-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 8%;
  padding-left: 8%;
  /* justify-content: center; */
  /* border: 2px solid saddlebrown; */
}

.main-header {
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightgrey;
}

.main-heading {
  font-size: 35px;
  margin-left: auto;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
}

.edit-icon {
  margin-left: auto;
  padding-right: 1%;
}

.desktop-postings-cont {
  display: none;
}

.card-container {
  width: 90%;
  height: 90vh;
}

.social-icon:hover {
  transform: translateY(-3px);
}
.social-logo-link {
  width: 3rem;

  /* height: auto; */
}
.social-cont {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
}

.socials {
  padding-left: 4%;
  padding-right: 4%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12%;
}

.logo {
  width: 200px;
  height: auto;
  border: 1px solid black;
  border-radius: 15px;
}

.job-title-container {
  text-align: center;
  font-weight: 800;
}
.back-arr-button {
  background: none;
  border: none;
}
.job-title {
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 25px;
}

#card-img {
  padding-top: 5%;
  margin-bottom: 3%;
}
.profile-name {
  text-align: center;
  margin-top: 4%;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 35px;
}

#about-me {
  text-align: center;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 6vh;
}
.header-about {
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 25px;
}

.experience-head {
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 0.5vh;
}
.work-example1 {
  font-family: "Montserrat", sans-serif;
  margin-top: 3vh;
}
.work-head1 {
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 2vh;
}
.work-info {
  margin-bottom: 0.4vh;
  font-size: 17px;
  color: darkgrey;
}

.skills-header {
  text-align: center;
  font-family: "Montserrat", sans-serif;
  margin-top: 6.5vh;
  margin-bottom: 1.5vh;
}
.skills-head {
  font-size: 25px;
  font-weight: bold;
}
.skill-list label {
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  margin: 5px;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 8px;
  font-weight: bold;
  border: 2px solid #fe6b00;
}
.skill-list {
  text-align: center;
  margin-bottom: 6vh;
}

.edu-head {
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  font-family: "Montserrat", sans-serif;
}
.edu-ex1 {
  margin-top: 2.2vh;
}
.edu-head-deg {
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  font-size: 19px;
  margin-bottom: 1vh;
}
.edu-info {
  font-family: "Montserrat", sans-serif;
  font-size: 17px;
  color: darkgrey;
}

@media only screen and (max-width: 450px) {
  .logo {
    width: 150px;
    height: auto;
    border: 1px solid black;
    border-radius: 15px;
  }

  .main-heading {
    font-size: 15px;
    margin-left: auto;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
  }

  .edit-icon img {
    width: 35px;
    height: auto;
  }
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
</style>
