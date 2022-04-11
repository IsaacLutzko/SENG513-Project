<template>
  <div class="page-container">
    <div v-if="jobs" class="container">
      <div class="content-container">
        <div class="row row-one">
          <div class="logo-container col-auto">
            <img class="logo" src="@/assets/google-logo.png" />
          </div>
          <div class="col-auto">
            <div class="role-title">{{ this.job_title }}</div>
            <div class="company-title">{{ this.company }}</div>
            <div class="location-title">{{ this.location }}</div>
            <div class="location-title">Est. $ {{ this.salary }}</div>
            <div class="location-title">Start date: {{ this.start_date }}</div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-9">
            <div class="heading">Job Description</div>
            <div class="body-content">
              {{ this.description }}
            </div>
          </div>
          <div class="col-lg-3">
            <div class="heading">Required Skills</div>
            <div class="body-content">
              <ul v-for="skill in skills" :key="skill">
                <li class="skill-item">{{ skill }}</li>
              </ul>
            </div>
            <div class="heading">Experience</div>
            <div class="body-content">
              {{ this.req_expeirence }} years in relevant field
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="button-bar">
          <div class="button-container">
            <img
              @click="choice('unlike')"
              class="cross-logo"
              src="@/assets/x_icon.png"
            />
            <!-- <img class="skip-logo" src="@/assets/skip_icon.png" /> -->
            <img
              @click="choice('like')"
              class="check-logo"
              src="@/assets/check_mark_icon.png"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="container">
      <h1>No Job Matches</h1>
    </div>
  </div>
</template>

<script>
import Websocket from "../../services/webSocket";

export default {
  data() {
    return {
      refresh: null,
      jobs: false,
      socket: Websocket,
      job_id: 0,
      job_title: "",
      location: "",
      start_date: "",
      description: "",
      skills: [],
      logo: null,
      company: "",
      req_expeirence: "",
      salary: "",
    };
  },
  methods: {
    choice: function (choice) {
      this.socket.emit("jobchoice", {
        choice: choice,
        job_id: this.job_id,
      });
      console.log("id sent:" + this.job_id);
      this.getJob(this.job_id);
    },

    getJob: function (curr_id) {
      this.socket.emit("jobrequest", curr_id);
      this.listen();
    },
    listen: function () {
      this.socket.on("givenjob", (job) => {
        console.log("job given");
        this.jobs = true;
        this.job_id = job.job_id;
        this.job_title = job.job_title;
        this.company = job.company;
        this.location = job.location;
        this.description = job.description;
        this.skills = job.skills;
        this.start_date = job.start_date;
        this.salary = job.salary;
        this.req_expeirence = job.req_expeirence;
      });

      // this.socket.on("notloggedin", () => {
      //   this.$router.push({ path: "/login", replace: true });
      // });

      this.socket.on("nojobmatches", () => {
        this.jobs = false;
      });
    },
  },
  mounted() {
    this.getJob();
    this.refresh = window.setInterval(() => {
      if (this.jobs === false) {
        this.getJob();
      }
    }, 10000);
  },
  unmounted: function () {
    clearInterval(this.refresh);
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.button-bar {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.skill-item {
  margin-left: 5%;
}

.button-bar img {
  padding: 10px;
  width: 95px;
  height: auto;
}

.page-container {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 90vh;
  display: flex;
  /* border: solid 5px red; */
  background-image: url(@/assets/page_curve.svg);
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;
  align-items: center;
}

.container {
  background-color: white;
  padding: 10px;
  border: 2.5px solid black;
  border-radius: 15px;
}

.logo {
  width: 250px;
  height: auto;
}

.content-container {
  min-height: 100px;
  overflow-y: scroll;
}

.logo-container {
  /* border: 2.5px solid red; */
}

.role-title {
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 35px;
}

.company-title {
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
  font-weight: 550;
}

.location-title {
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
}

.heading {
  padding-top: 20px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 25px;
}

.body-content {
  font-family: "Montserrat", sans-serif;
}

@media only screen and (max-width: 800px) {
  .logo {
    width: 150px;
    height: auto;
  }
  .role-title {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 25px;
  }

  .company-title {
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
  }

  .location-title {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
  }

  .heading {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 20px;
  }
  .body-content {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
  }
}

@media only screen and (max-width: 450px) {
  .page-container {
    background-image: none;
    align-items: flex-start;
  }

  .container {
    border: none;
  }
  .row-one {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo {
    width: 150px;
    height: auto;
  }
  .role-title {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 20px;
  }

  .company-title {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
  }

  .location-title {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
  }

  .heading {
    padding-top: 20px;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 20px;
  }
  .body-content {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
  }
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
</style>
