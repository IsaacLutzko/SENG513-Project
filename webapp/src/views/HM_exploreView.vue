<template>
  <div class="row page-container">
    <div v-if="dropItDown" class="desktop-postings-cont col-lg-3">
      <div
        class="row d-flex justify-content-center"
        id="explore-postings-header"
        style="overflow-y: scroll; overflow-x: hidden"
      >
        <div class="col-sm-auto">
          <div class="postings-header">
            <h4 class="postings-head">Your Postings</h4>
          </div>

          <div class="postings-list-cont">
            <ul
              v-for="(posting, index) in postings"
              :key="index"
              class="postings-list"
            >
              <li
                @click="activePosting(index, posting.job_type)"
                :class="{ activePost: active_item == index }"
                style="list-style: none"
              >
                <div class="col-auto d-flex justify-content-left">
                  <button style="border: 0; background: transparent">
                    <h5
                      class="posting-list-title"
                      style="
                        text-align: left;
                        font-weight: bold;
                        font-size: 1.9vw;
                        font-family: Montserrat, sans-serif;
                        margin-top: 7%;
                        margin-bottom: 7%;
                      "
                    >
                      {{ posting.job_type }}
                    </h5>
                  </button>
                  <img
                    src="@/assets/right-arrow_large.png"
                    alt=""
                    id="postings-arrow"
                    style="width=30%"
                  />
                </div>
                <div class="col-auto d-flex justify-content-left">
                  <!-- <p class="posting-job-type">{{ posting.jobtype }}</p> -->
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="container col-lg-9">
      <div class="content-container">
        <div class="sticky-top explore-postings-container">
          <div class="row" id="mobile-postings-row">
            <!-- hide after desktop breakpoint -->
            <div
              class="back-arrow-container col-1 d-flex justify-content-center"
            >
              <button @click="dropItDown = !dropItDown" class="back-arr-button">
                <img class="logo" src="@/assets/left-arrow.png" />
              </button>
            </div>
            <div class="job-title-container col-10">
              <div v-if="dropItDown" class="job-title">{{ activeJob }}</div>
              <div v-else class="job-title">{{ activeJob }}</div>
            </div>
            <div class="col-1"></div>
          </div>
        </div>

        <div v-if="dropItDown" class="card-container">
          <div v-if="available">
            <div>
              <div class="row d-flex justify-content-center" id="card-img">
                <div class="col-sm-auto">
                  <div class="profile-image d-flex justify-content-center">
                    <img
                      class="logo"
                      :src="`data:image/png;base64,${this.pic}`"
                    />

                    <!-- How to make image dynamic? -->
                  </div>
                  <div class="profile-name">
                    {{ this.firstname }} {{ this.lastname }}
                  </div>
                </div>
              </div>

              <div class="social-cont">
                <div
                  v-for="social in this.socials"
                  :key="social"
                  class="row socials"
                >
                  <div
                    v-if="social.platform == 'Linkedin'"
                    class="social-icon col"
                  >
                    <a target="_blank" :href="social.link" aria-label="Next"
                      ><img
                        class="social-logo-link"
                        src="@/assets/LinkedInLogo.png"
                    /></a>
                  </div>
                  <div
                    v-else-if="social.platform == 'Github'"
                    class="social-icon col"
                  >
                    <a target="_blank" :href="social.link" aria-label="Next"
                      ><img
                        class="social-logo-link"
                        src="@/assets/GitHubLogo.png"
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

              <div
                class="row d-flex justify-content-center"
                id="work-experiences"
              >
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
                <div
                  v-for="skill in this.skills"
                  :key="skill"
                  class="col-sm-auto"
                >
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
          <!-- <div v-for="user in activeUsers" :key="user"> -->

          <div v-else class="no-seekers">
            <div class="inner">
              <h1>No New Candidates for this job</h1>
            </div>
          </div>
        </div>

        <div
          v-else
          class="open-postings-dropdown d-flex justify-content-center"
          style="padding: 10px; height: 85%; background: white; display: flex"
        >
          <div
            class="row d-flex justify-content-center"
            id="explore-postings-header"
            style="
              overflow-y: scroll;
              overflow-x: hidden;
              padding: 10px;
              border: 2.5px solid black;
              border-radius: 15px;
              width: 70%;
              height: 85%;
              background: white;
              display: flex;
              margin-top: 5%;
            "
          >
            <div class="col-sm-auto">
              <div class="postings-header">
                <h4
                  class="postings-head"
                  style="
                    text-align: center;
                    font-weight: bold;
                    font-size: 2.5vw;
                    font-family: Montserrat, sans-serif;
                    padding-top: 5%;
                    padding-bottom: 7%;
                  "
                ></h4>
              </div>
              <div class="postings-list-cont">
                <ul
                  v-for="(posting, index) in postings"
                  :key="index"
                  class="postings-list"
                >
                  <li
                    @click="activePosting(index, posting.job_type)"
                    :class="{ activePost: active_item == index }"
                    style="list-style: none"
                  >
                    <div class="col-auto d-flex justify-content-left">
                      <button style="border: 0; background: transparent">
                        <h5
                          class="posting-list-title"
                          style="
                            text-align: left;
                            font-weight: bold;
                            font-size: 100%;
                            font-family: Montserrat, sans-serif;
                            margin-top: 7%;
                            margin-bottom: 7%;
                          "
                        >
                          {{ posting.job_type }}
                        </h5>
                      </button>
                      <img
                        src="@/assets/right-arrow_large.png"
                        alt=""
                        id="postings-arrow"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div :class="available ? 'button-bar' : 'disapper'">
          <div class="button-container">
            <button @click="choice('unlike')" class="buttons-bar">
              <img class="check-logo" src="@/assets/x_icon.png" />
            </button>
            <!-- <button class="buttons-bar">
              <img class="skip-logo" src="@/assets/skip_icon.png" />
            </button> -->
            <button @click="choice('like')" class="buttons-bar">
              <img class="cross-logo" src="@/assets/check_mark_icon.png" />
            </button>
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
      timer: null,
      url: null,
      available: false,
      available_postings: false,
      socket: Websocket,
      dropItDown: true,
      active_item: 0,
      postings: [
        {
          job_id: null,
          job_title: "",
          job_type: "",
        },
      ],
      activeJob: "",
      activeJobID: 0,
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
    activePosting: function (element, jobVar) {
      this.active_item = element;
      this.activeJob = jobVar;
      this.activeJobID = this.postings[element].job_id;
      this.getUser(this.activeJob);
      //   for (let i = 0; i < this.users.length; i++) {
      //     for (let j = 0; j < this.users[i].job_types.length; j++) {
      //       if (this.users[i].job_types[j] === this.activeJob) {
      //         this.activeUsers.push(this.users[i]);
      //       }
      //     }
      //   }
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
    choice: function (choice) {
      this.socket.emit("jobseekerchoice", {
        type: this.activeJob,
        choice: choice,
        email: this.email,
        job_id: this.activeJobID,
      });
      console.log("id sent:" + this.email);
      this.getUser(this.activeJob);
    },
    getmyPostings: function () {
      console.log("ask for postings");
      this.socket.emit("getPostings");
    },
    getUser: function (type) {
      this.socket.emit("jobseekerrequest", type);
    },

    exp_listen: function () {
      this.socket.on("notloggedin", () => {
        this.$router.push({ path: "/login", replace: true });
      });

      this.socket.on("loggedin", () => {
        this.getmyPostings();
      });

      this.socket.on("givenjobseeker", (jobseeker) => {
        this.available = true;

        this.pic = this.arrayBufferToBase64(jobseeker.pic);
        console.log();
        // const reader = new FileReader();
        // this.url = URL.createObjectURL(this.pic);
        // reader.readAsDataURL(this.pic);
        this.pic = this.pic = this.arrayBufferToBase64(jobseeker.pic);
        this.email = jobseeker.email;
        this.firstname = jobseeker.firstname;
        this.lastname = jobseeker.lastname;
        this.aboutyou = jobseeker.aboutyou;
        this.job_types = jobseeker.job_types;
        this.skills = jobseeker.skills;
        this.work_experience = jobseeker.work_experience;
        this.socials = jobseeker.socials;
        this.educations = jobseeker.education;
      });

      this.socket.on("nojobseekers", () => {
        this.available = false;
      });

      this.socket.on("Postings", (jobs) => {
        console.log("success");
        this.available_postings = true;
        this.postings = jobs;
        this.getUser();
      });

      this.socket.on("noPostings", () => {
        this.available_postings = false;
      });
    },
    three_logincheck: function () {
      this.socket.emit("logincheck");
    },
  },
  mounted() {
    this.exp_listen();
    this.three_logincheck();
    // this.timer = window.setInterval(() => {
    //   if (this.available === false) {
    //     this.getUser(this.activeJob);
    //   }
    // }, 10000);
  },
  unmounted() {
    // clearInterval(this.timer);
    this.socket.removeEventListener();
  },
};
</script>

<style scoped>
@media only screen and (min-width: 100px) {
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .desktop-postings-cont {
    display: none;
  }

  .disapper {
    display: none;
  }

  .no-seekers {
    color: lightgray;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #postings-arrow {
    display: none;
    height: 30px;
    width: 30px;
    margin: auto;
  }
  .activePost #postings-arrow {
    display: block;
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

  .page-container {
    margin: 0;
    padding: 2%;
    width: 100%;
    height: 90vh;
    display: flex;
    background-image: url(@/assets/page_curve.svg);
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100%;
    align-items: center;
  }
  .container {
    padding: 10px;
    border: 2.5px solid black;
    border-radius: 15px;
    height: 85%;
    background: white;
  }

  .content-container {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 85%;
    padding-left: 10%;
    padding-right: 10%;
  }

  .explore-postings-container {
    background: white;
    padding: 2vw;
    border-bottom: black solid 2.5px;
  }
  .back-arrow-container .logo {
    width: 33px;
    height: auto;
  }

  .logo {
    width: 200px;
    height: auto;
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

  .button-bar {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .button-bar img {
    padding: 10px;
    width: 95px;
    height: auto;
  }
  .buttons-bar {
    border: 0;
    background: transparent;
  }
}

@media only screen and (min-width: 992px) {
  .desktop-postings-cont {
    padding: 10px;
    border: 2.5px solid black;
    border-radius: 15px;
    height: 85%;
    background: white;
    border-top-right-radius: 0%;
    border-bottom-right-radius: 0%;
    display: flex;
  }
  .container {
    border-top-left-radius: 0%;
    border-bottom-left-radius: 0%;
  }

  .postings-head {
    text-align: center;
    font-weight: bold;
    font-size: 2.5vw;
    font-family: "Montserrat", sans-serif;
    padding-top: 5%;
    padding-bottom: 7%;
  }
  .posting-list-title {
    font-weight: bold;
    font-size: 1.9vw;
    font-family: "Montserrat", sans-serif;
    margin: 0;
  }
  .posting-job-type {
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    color: grey;
  }
  #posting-selected {
    display: flex;
    align-items: center;
  }
  button {
    border: none;
    background: transparent;
  }
  .postings-list li {
    list-style-position: inside;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
  }
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
</style>
