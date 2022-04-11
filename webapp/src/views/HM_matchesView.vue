<template>
  <div class="row page-container">
    <div v-if="dropItDown" class="desktop-matches-cont col-lg-3">
      <div
        class="row d-flex justify-content-center"
        id="hm-matches-header"
        style="overflow-y: scroll; overflow-x: hidden"
      >
        <div class="col-sm-auto">
          <div class="matches-sidebar-header">
            <h4 class="matches-sidebar-head">Matches</h4>
          </div>

          <div class="matches-list-cont">
            <!-- <div v-for="(job,index) in jobs" :key="index" class="matches-list"> -->

            <ul v-for="[key, value] in jobs" :key="key" class="matches-list">
              <!-- <div v-for="(index, entry) in value" :key="index" class="wrapper"> -->
              <li style="list-style: none">
                <div class="col-auto d-flex justify-content-left">
                  <button
                    @click="activePosting(key, key)"
                    :class="{ activePost: active_item == key }"
                    style="border: 0; background: transparent"
                  >
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
                      <!-- hello -->
                      {{ key }}
                    </h5>
                  </button>

                  <button
                    @click="activePosting(key, key)"
                    :class="{ activePost: active_item == key }"
                  >
                    <img
                      src="@/assets/right-arrow_large.png"
                      alt=""
                      id="postings-arrow"
                    />
                  </button>
                </div>

                <div v-for="index in value" :key="index">
                  <div v-if="active_item == key" class="posting-job-type">
                    <div>
                      <button
                        @click="activeJSeek(index, index.seeker_name)"
                        :class="{ activeJobSeeker: active_job == index }"
                      >
                        {{ index.seeker_name }}
                      </button>
                    </div>
                  </div>
                  <div v-else></div>
                </div>
              </li>
            </ul>
            <!-- </div> -->
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
              <div v-if="dropItDown" class="job-title">{{ activeJS }}</div>
              <div v-else class="job-title">Job Postings</div>
            </div>
            <div class="col-1"></div>
          </div>
        </div>

        <!-- Messages go here -->
        <div v-if="dropItDown" class="msg-container">
          <ul id="messages"></ul>
        </div>

        <div
          v-else
          class="open-postings-dropdown d-flex justify-content-center"
          style="padding: 10px; height: 85%; background: white; display: flex"
        >
          <div
            class="row d-flex justify-content-center"
            id="hm-matches-header"
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
              <div class="matches-sidebar-header">
                <h4 class="matches-sidebar-head">Matches</h4>
              </div>

              <div class="matches-list-cont">
                <!-- <div v-for="(job,index) in jobs" :key="index" class="matches-list"> -->

                <ul
                  v-for="[key, value] in jobs"
                  :key="key"
                  class="matches-list"
                >
                  <!-- <div v-for="(index, entry) in value" :key="index" class="wrapper"> -->
                  <li style="list-style: none">
                    <div class="col-auto d-flex justify-content-left">
                      <button
                        @click="activePosting(key, key)"
                        :class="{ activePost: active_item == key }"
                        style="border: 0; background: transparent"
                      >
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
                          <!-- hello -->
                          {{ key }}
                        </h5>
                      </button>

                      <button
                        @click="activePosting(key, key)"
                        :class="{ activePost: active_item == key }"
                      >
                        <img
                          src="@/assets/right-arrow_large.png"
                          alt=""
                          id="postings-arrow"
                        />
                      </button>
                    </div>

                    <div v-for="index in value" :key="index">
                      <div v-if="active_item == key" class="posting-job-type">
                        <div>
                          <button
                            @click="activeJSeek(index, index.seeker_name)"
                            :class="{ activeJobSeeker: active_job == index }"
                          >
                            {{ index.seeker_name }}
                          </button>
                        </div>
                      </div>
                      <div v-else></div>
                    </div>
                  </li>
                </ul>
                <!-- </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="dropItDown" class="row message-box">
        <form id="message-form-box" action="">
          <input id="input-message" autocomplete="off" />
          <button id="send-button">
            <p id="send-text">SEND</p>
            <img src="@/assets/send_icon.png" alt="" id="send-img" />
          </button>
        </form>
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
      dropItDown: true,
      active_item: 0,
      jobs: new Map(),
      matches: [
        {
          job_id: null,
          job_seeker_email: "",
          hiring_manager_email: "",
          job_type: "",
          seeker_name: "",
          messages: [
            {
              message_id: "",
              content: "",
              sender: "",
              reciever: "",
            },
          ],
        },
      ],
      active_job: 0,
    };
  },
  methods: {
    activePosting: function (element, jobVar) {
      this.active_item = element;
      this.activeJob = jobVar;
      console.log(jobVar);
      console.log(element);
      console.log("test");
    },
    activeJSeek: function (element, jsVar) {
      this.active_job = element;
      this.activeJS = jsVar;
    },
    // Accepts the array and key
    groupBy: function (array, key) {
      // Return the end result
      return array.reduce((result, currentValue) => {
        // If an array already present for key, push it to the array. Else create an array and push the object
        (result[currentValue[key]] = result[currentValue[key]] || []).push(
          currentValue
        );
        // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
        return result;
      }, {}); // empty object is the initial value for result object
    },
    getMatches: function () {
      this.socket.emit("getMatches_HM");
      this.listen();
    },

    //

    listen: function () {
      this.socket.on("HMMatches", (matches_recvd) => {
        this.matches = matches_recvd;

        //
        // let temp = new Map();

        for (let i = 0; i < this.matches.length; i++) {
          if (this.jobs.has(this.matches[i].job_type)) {
            this.jobs.get(this.matches[i].job_type).push(this.matches[i]);
          } else {
            this.jobs.set(this.matches[i].job_type, [this.matches[i]]);
          }
        }
        console.log(this.matches);
        console.log(this.jobs);
        // console.log(Array.from(this.jobs)[0]);

        // let temp = this.groupBy(this.matches, "job_type");
        // console.log(temp);
      });

      //
      this.socket.on("HMnoMatches", () => {
        console.log("no matches");
      });
    },

    // logincheck: function () {
    //   this.socket.emit("logincheck");
    //   this.listen();
    // },
    // listen: function () {
    //   this.socket.on("notloggedin", () => {
    //     this.$router.push({ path: "/login", replace: true });
    //   });
    // },
  },
  mounted() {
    this.getMatches();
  },
  // this.logincheck();
};
</script>

<style scoped>
@media only screen and (min-width: 100px) {
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .desktop-matches-cont {
    display: none;
  }

  .matches-sidebar-head {
    border-bottom: 2px solid lightgrey;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 25px;
  }

  #postings-arrow {
    /* display:none; */
    display: block;
    height: 20px;
    width: 20px;
    margin: auto;
  }

  button {
    border: 0;
    background: transparent;
  }
  .activeJobSeeker {
    color: red;
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
    /* padding: 10px; */
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

  .social-logo-link {
    width: 2rem;
    height: auto;
    margin-top: 3%;
    margin-bottom: 7%;
  }
  .social-name-link {
    margin: 0;
    display: flex;
    align-items: center;
    margin-left: 1.2vw;
    margin-top: 3%;
    margin-bottom: 7%;
  }
  .social-logo-git {
    width: 2rem;
    height: auto;
    margin-top: 3%;
    margin-bottom: 7%;
  }
  .social-name-git {
    margin: 0;
    display: flex;
    align-items: center;
    margin-left: 1.2vw;
    margin-top: 3%;
    margin-bottom: 7%;
  }

  #socials {
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    font-size: 20px;
    align-items: center;
    margin-top: 3%;
    margin-bottom: 7%;
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

  .message-box {
    background: transparent;
    border-top: 2.5px solid black;
    height: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
  }
  #message-form-box {
    padding: 0.25rem;
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    height: 100%;
    box-sizing: border-box;
    border: none;
  }
  #input-message {
    border: none;
    padding: 0 1rem;
    flex-grow: 1;

    margin: 0.5rem;
    background: antiquewhite;
  }
  #send-button {
    background-image: linear-gradient(90deg, #fc8801, #dea26a);
    /* flex-grow: 0.1; */
    width: fit-content;
    margin: 0.5rem;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 23px;
    color: whitesmoke;
    display: flex;
    padding: 15px;

    flex-direction: row;
    align-items: center;
    justify-items: center;
  }
  #send-text {
    padding-right: 5%;
    display: none;
  }
  #send-img {
    display: block;
    height: 40px;
    width: 40px;
  }
  #messages {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  #messages > li {
    padding: 0.5rem 1rem;
  }
}

@media only screen and (min-width: 992px) {
  #send-text {
    padding-right: 5%;
    display: flex;
  }
  .desktop-matches-cont {
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

  .matches-sidebar-head {
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
    font-size: 15px;
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
  .matches-list li {
    list-style-position: inside;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
  }
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
</style>
