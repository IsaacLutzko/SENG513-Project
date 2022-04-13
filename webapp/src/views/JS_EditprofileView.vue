<template>
  <div class="page-container">
    <div class="container">
      <div class="row">
        <div class="col-lg-auto col-class names-col">
          <img v-if="url" :src="url" class="profile-pic" />
          <img
            v-else
            class="profile-pic"
            :src="`data:image/png;base64,${this.image}`"
          />

          <input type="file" @change="uploadImage" multiple />
        </div>
        <div class="col-lg-auto col-class names-col">
          <div class="input-box">
            <span class="details">First Name</span>
            <input
              v-model="firstname"
              class="name-field text-area"
              type="text"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div class="input-box">
            <span class="details">Last Name</span>
            <input
              v-model="lastname"
              class="name-field text-area"
              type="text"
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>
        <div class="col-lg-5 col-class about-col">
          <div class="input-box">
            <span class="details">About you</span>
            <input
              v-model="aboutyou"
              class="about-you"
              type="text"
              placeholder="Give a brief description about you"
              required
            />
          </div>
        </div>
      </div>
      <hr class="col-xs-12" />
    </div>
    <div class="types-container">
      <div class="types-heading">What types of jobs are you looking for?</div>
      <div class="types-subheading">Choose up to thee different job types</div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 type-col">
            <div class="dropdown-heading">Choice 1</div>
            <select
              v-model="job_types[0]"
              class="form-select dropdown-box"
              aria-label="Default select example"
            >
              <option selected>Select Job Type</option>
              <option value="data scientist">data scientist</option>
              <option value="Information Security analyst">
                Information Security analyst
              </option>
              <option value="UX designer">UX designer</option>
              <option value="Software Developer">Software Developer</option>
              <option value="Front-end Developer">Front-end Developer</option>
              <option value="Backend Developer">Back-end Developer</option>
              <option value="Full-stack Developer">Full-stack Developer</option>
              <option value="Project Manager">Project Manager</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="System analyst">System analyst</option>
              <option value="Web Developer">Web Developer</option>
              <option value="UI designer">UI designer</option>
              <option value="Cloud Computing Engineer">
                Cloud Computing Engineer
              </option>
              <option value="Distributed Systems Engineer">
                Distributed Systems Engineer
              </option>
              <option value="Machine learning Engineer">
                Machine learning Engineer
              </option>
              <option value="Mobile Developer">Mobile Developer</option>
            </select>
          </div>
          <div class="col-lg-4 type-col">
            <div class="dropdown-heading">Choice 2</div>
            <select
              v-model="job_types[1]"
              class="form-select dropdown-box"
              aria-label="Default select example"
            >
              <option selected>Select Job Type</option>
              <option value="data scientist">data scientist</option>
              <option value="Information Security analyst">
                Information Security analyst
              </option>
              <option value="UX designer">UX designer</option>
              <option value="Software Developer">Software Developer</option>
              <option value="Front-end Developer">Front-end Developer</option>
              <option value="Backend Developer">Back-end Developer</option>
              <option value="Full-stack Developer">Full-stack Developer</option>
              <option value="Project Manager">Project Manager</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="System analyst">System analyst</option>
              <option value="Web Developer">Web Developer</option>
              <option value="UI designer">UI designer</option>
              <option value="Cloud Computing Engineer">
                Cloud Computing Engineer
              </option>
              <option value="Distributed Systems Engineer">
                Distributed Systems Engineer
              </option>
              <option value="Machine learning Engineer">
                Machine learning Engineer
              </option>
              <option value="Mobile Developer">Mobile Developer</option>
            </select>
          </div>
          <div class="col-lg-4 type-col">
            <div class="dropdown-heading">Choice 3</div>
            <select
              v-model="job_types[2]"
              class="form-select dropdown-box"
              aria-label="Default select example"
            >
              <option selected>Select Job Type</option>
              <option value="data scientist">data scientist</option>
              <option value="Information Security analyst">
                Information Security analyst
              </option>
              <option value="UX designer">UX designer</option>
              <option value="Software Developer">Software Developer</option>
              <option value="Front-end Developer">Front-end Developer</option>
              <option value="Backend Developer">Back-end Developer</option>
              <option value="Full-stack Developer">Full-stack Developer</option>
              <option value="Project Manager">Project Manager</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="System analyst">System analyst</option>
              <option value="Web Developer">Web Developer</option>
              <option value="UI designer">UI designer</option>
              <option value="Cloud Computing Engineer">
                Cloud Computing Engineer
              </option>
              <option value="Distributed Systems Engineer">
                Distributed Systems Engineer
              </option>
              <option value="Machine learning Engineer">
                Machine learning Engineer
              </option>
              <option value="Mobile Developer">Mobile Developer</option>
            </select>
          </div>
        </div>
        <hr class="col-xs-12" />
      </div>
    </div>
    <div class="skills-container">
      <div class="container">
        <div class="row">
          <div class="skills-header">
            <div class="skills-heading">Skills</div>
            <img
              class="add-icon"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              src="@/assets/add_item_icon.png"
            />
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Add a skill
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div class="check-box-container">
                      <div>
                        <input
                          type="checkbox"
                          value="JavaScript"
                          v-model="skills"
                        />
                        <label>JavaScript</label>
                      </div>

                      <div>
                        <input type="checkbox" value="Java" v-model="skills" />
                        <label>Java</label>
                      </div>

                      <div>
                        <input type="checkbox" value="C" v-model="skills" />
                        <label>C</label>
                      </div>

                      <div>
                        <input type="checkbox" value="C++" v-model="skills" />
                        <label>C++</label>
                      </div>

                      <div>
                        <input type="checkbox" value="SQL" v-model="skills" />
                        <label>SQL</label>
                      </div>

                      <div>
                        <input type="checkbox" value="Git" v-model="skills" />
                        <label>Git</label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          value="Git hub"
                          v-model="skills"
                        />
                        <label>Git hub</label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          value="HTML/CSS"
                          v-model="skills"
                        />
                        <label>HTML/CSS</label>
                      </div>

                      <div>
                        <input type="checkbox" value="React" v-model="skills" />
                        <label>React</label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          value="Node.js"
                          v-model="skills"
                        />
                        <label>Node.js</label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          value="TCP/IP"
                          v-model="skills"
                        />
                        <label>TCP/IP</label>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Add Skills
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="skills.length > 0" id="newskills" class="row">
          <div class="col-auto skill-div" v-for="skill in skills" :key="skill">
            {{ skill }}
          </div>
        </div>
        <hr class="col-xs-12" />
      </div>
    </div>
    <div class="exp-container">
      <div id="jobscontainer" class="container job-container">
        <div class="row">
          <div class="skills-header">
            <div class="skills-heading">Relevant Experience</div>
            <img
              v-on:click="addJob()"
              class="addjob-btn"
              src="@/assets/add_item_icon.png"
            />
          </div>
        </div>
        <div class="row" id="job" v-for="work in work_experience" :key="work">
          <div class="col-lg-auto col-class names-col">
            <div class="input-box">
              <span class="details">Company</span>
              <input
                v-model="work.company"
                class="name-field text-area"
                type="text"
                placeholder="Enter company name"
                required
              />
              <!-- <span v-if="v$.work.company.$error">
                {{ v$.work.company.$errors[0].$message }}
              </span> -->
            </div>
            <div class="input-box">
              <span class="details">Job Title</span>
              <input
                v-model="work.job_title"
                class="name-field text-area"
                type="text"
                placeholder="Enter your Job title"
                required
              />
              <!-- <span v-if="v$.work.job_title.$error">
                {{ v$.work.job_title.$errors[0].$message }}
              </span> -->
            </div>
          </div>
          <div class="col-lg-auto col-class names-col">
            <div class="jb-container">
              <div class="details">Job Type</div>
              <select
                v-model="work.job_type"
                class="form-select dropdown-box"
                aria-label="Default select example"
              >
                <option value="data scientist">data scientist</option>
                <option value="Information Security analyst">
                  Information Security analyst
                </option>
                <option value="UX designer">UX designer</option>
                <option value="Software Developer">Software Developer</option>
                <option value="Front-end Developer">Front-end Developer</option>
                <option value="Back-end Developer">Back-end Developer</option>
                <option value="Full-stack Developer">
                  Full-stack Developer
                </option>
                <option value="Project Manager">Project Manager</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="System analyst">System analyst</option>
                <option value="Web Developer">Web Developer</option>
                <option value="UI designer">UI designer</option>
                <option value="Cloud Computing Engineer">
                  Cloud Computing Engineer
                </option>
                <option value="Distributed Systems Engineer">
                  Distributed Systems Engineer
                </option>
                <option value="Machine learning Engineer">
                  Machine learning Engineer
                </option>
                <option value="Mobile Developer">Mobile Developer</option>
              </select>
              <!-- <span v-if="v$.work.job_type.$error">
                {{ v$.work.job_type.$errors[0].$message }}
              </span> -->
            </div>

            <div class="years-container">
              <div class="details">Years Worked</div>
              <select
                v-model="work.years"
                class="form-select dropdown-box"
                aria-label="Default select example"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="5">5+</option>
              </select>
              <!-- <span v-if="v$.work.years.$error">
                {{ v$.work.years.$errors[0].$message }}
              </span> -->
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-class about-col">
            <div class="input-box">
              <span class="details">Job description</span>
              <input
                v-model="work.description"
                class="about-you"
                type="text"
                placeholder="Give a brief description of your job"
                required
              />
              <!-- <span v-if="v$.work.description.$error">
                {{ v$.work.description.$errors[0].$message }}
              </span> -->
            </div>
          </div>
        </div>
        <hr class="col-xs-12" />
      </div>
    </div>
    <div class="socials-container">
      <div class="container">
        <div class="row">
          <div class="skills-header">
            <div class="skills-heading">Socials</div>
            <img
              v-on:click="addSocial()"
              class="addjob-btn"
              src="@/assets/add_item_icon.png"
            />
          </div>
        </div>
        <div class="row" v-for="social in socials" :key="social">
          <div class="col-3 names-col">
            <div class="details">Platform</div>
            <select
              v-model="social.platform"
              class="form-select dropdown-box"
              aria-label="Default select example"
            >
              <option value="Github">Github</option>
              <option value="Linkedin">Linkedin</option>
            </select>
            <!-- <span v-if="v$.social.platform.$error">
              {{ v$.social.platform.$errors[0].$message }}
            </span> -->
          </div>
          <div class="col-9 about-col">
            <div class="input-box">
              <span class="details">Link</span>
              <input
                v-model="social.link"
                class="link-box"
                type="text"
                placeholder="Link"
                required
              />
              <!-- <span v-if="v$.social.link.$error">
                {{ v$.social.link.$errors[0].$message }}
              </span> -->
            </div>
          </div>
        </div>
        <hr class="col-xs-12" />
      </div>
    </div>
    <div class="education-container">
      <div class="container">
        <div class="row">
          <div class="skills-header">
            <div class="skills-heading">Education</div>
            <img
              v-on:click="addEducation()"
              class="addjob-btn"
              src="@/assets/add_item_icon.png"
            />
          </div>
        </div>
        <div class="row" v-for="item in education" :key="item">
          <div class="col-3 col-md-6 col-sm-12 col-xs-12">
            <div class="input-box">
              <span class="details">Education Type</span>
              <input
                v-model="item.degree_type"
                class="link-box"
                type="text"
                placeholder="Ex: Bachelor of Science"
                required
              />
              <!-- <span v-if="v$.item.degree_type.$error">
                {{ v$.item.degree_type.$errors[0].$message }}
              </span> -->
            </div>
          </div>
          <div class="col-3 col-md-6 col-sm-12 col-xs-12">
            <div class="input-box">
              <span class="details">Institution</span>
              <input
                v-model="item.institute"
                class="link-box"
                type="text"
                placeholder="Name of Institution"
                required
              />
              <!-- <span v-if="v$.item.institute.$error">
                {{ v$.item.institute.$errors[0].$message }}
              </span> -->
            </div>
          </div>
          <div class="col-3 col-md-6 col-sm-12 col-xs-12">
            <div class="input-box">
              <span class="details">Start date</span>
              <input
                v-model="item.start_date"
                class="link-box"
                type="date"
                required
              />
              <!-- <span v-if="v$.item.start_date.$error">
                {{ v$.item.start_date.$errors[0].$message }}
              </span> -->
            </div>
          </div>
          <div class="col-3 col-md-6 col-sm-12 col-xs-12">
            <div class="input-box">
              <span class="details">End date</span>
              <input
                v-model="item.end_date"
                class="link-box"
                type="date"
                required
              />
              <!-- <span v-if="v$.item.end_date.$error">
                {{ v$.item.end_date.$errors[0].$message }}
              </span> -->
            </div>
          </div>
        </div>
        <hr class="col-xs-12" />
      </div>
    </div>
    <div class="button input-box">
      <button class="input-button" @click="submitForm">Finish</button>
    </div>
    <!-- <p>Saved things</p>
    <p>first name: {{ firstname }}</p>
    <p>last name: {{ lastname }}</p>
    <p>About you: {{ aboutyou }}</p>
    <p>Job Types: {{ job_types }}</p>
    <p>skills: {{ skills }}</p>
    <p>Experience: {{ work_experience }}</p>
    <p>Socials: {{ socials }}</p> -->
  </div>
</template>

<script>
import Websocket from "../../services/webSocket";

export default {
  data() {
    return {
      url: null,
      image: null,
      socket: Websocket,
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
      education: [
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
    addJob: function () {
      this.work_experience.push({
        job_seeker_email: "",
        company: "",
        job_title: "",
        job_type: "",
        years: "",
        description: "",
      });
    },
    addSocial: function () {
      this.socials.push({
        platform: "",
        link: "",
      });
    },
    addEducation: function () {
      this.education.push({
        Institute: "",
        start_date: "",
        end_date: "",
        degree_type: "",
      });
    },
    submitForm() {
      this.sendUserData();
    },
    getmydata: function () {
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
    sendUserData: function () {
      this.socket.emit("updateData", {
        image: this.pic,
        firstname: this.firstname,
        lastname: this.lastname,
        aboutyou: this.aboutyou,
        job_types: this.job_types,
        skills: this.skills,
        work_experience: this.work_experience,
        socials: this.socials,
        education: this.education,
      });
      console.log("updated user data sent to server");
      this.$router.push({ path: "/jobseeker-profile", replace: true });
    },

    uploadImage: function (event) {
      console.log(event.target.files[0]);
      this.image = event.target.files[0];
      const reader = new FileReader();
      this.url = URL.createObjectURL(this.image);
      reader.readAsDataURL(this.image);
    },
    edit_listen: function () {
      this.socket.on("notloggedin", () => {
        this.$router.push({ path: "/login", replace: true });
      });

      this.socket.on("loggedin", () => {
        this.getmydata();
      });

      this.socket.on("info", (user) => {
        this.image = user.pic;
        // const reader = new FileReader();
        // this.url = URL.createObjectURL(this.pic);
        // reader.readAsDataURL(this.pic);
        this.image = this.arrayBufferToBase64(user.pic);
        this.email = user.email;
        this.firstname = user.firstname;
        this.lastname = user.lastname;
        this.aboutyou = user.aboutyou;
        this.job_types = user.job_types;
        this.skills = user.skills;
        this.work_experience = user.work_experience;
        this.socials = user.socials;
        this.education = user.education;
      });
    },
    six_logincheck: function () {
      this.socket.emit("logincheck");
    },
    listen: function () {},
  },
  mounted() {
    this.edit_listen();
    this.six_logincheck();
    // this.timer = window.setInterval(() => {
    //   if (this.available === false) {
    //     this.getUser(this.activeJob);
    //   }
    // }, 10000);
  },
  unmounted() {
    this.socket.removeEventListener();
  },
  // this.logincheck();
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.skill-div {
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  margin: 5px;
  padding: 5px;
  border-radius: 8px;
  font-weight: bold;
  border: 2px solid #fe6b00;
}

.check-box-container {
  max-height: 280px;
  overflow-y: auto;
}

.years-container,
.jb-container {
  padding: 10px;
  width: 90%;
}

.link-box {
  padding: 5px;
  border-radius: 5px;
  background-color: #f7f2f8;
  width: 100%;
  height: 40px;
}

.page-container {
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  /* border: 2px solid red; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
}

.exp-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}

.row {
  padding-bottom: 10px;
}

.skills-header {
  width: 100%;
  height: auto;
  /* border: 2px solid red; */
}

.skills-heading {
  float: left;
  /* border: 2px solid red; */
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  font-weight: bold;
}

.add-icon {
  padding-top: 5px;
  float: right;
  width: 40px;
  /* border: 2px solid red; */
}

.addjob-btn {
  padding-top: 5px;
  float: right;
  width: 40px;
  /* border: 2px solid red; */
}

.profile-pic {
  width: 200px;
  height: auto;
}

.dropdown-box {
  max-height: 280px;
  overflow-y: auto;
}

.names-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.input-box {
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text-area {
  padding: 5px;
  border-radius: 5px;
  background-color: #f7f2f8;
  width: 100%;
  height: 40px;
}

.about-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-you {
  padding: 5px;
  border-radius: 5px;
  background-color: #f7f2f8;
  width: 100%;
  height: 125px;
}

.details {
  align-self: flex-start;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
}

.dropdown-btn {
  border: 1px solid #837373;
  padding: 5px;
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  color: grey;
  width: 70%;
  height: auto;
}

.type-col {
  /* border: solid 2px red; */
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.types-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}

.skills-container,
.socials-container,
.education-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}

.types-heading {
  padding-top: 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 30px;
}

.types-subheading {
  padding-bottom: 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  color: #706464;
}

.dropdown {
  /* border: solid 2px blue; */
  width: 100%;
  align-items: center;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.dropdown-heading {
  align-self: center;
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
}

.input-button {
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  color: white;
  font-weight: bold;
  padding: 10px;
  background-image: linear-gradient(90deg, #fc8801, #dea26a);
  border: none;
}

/* .dropdown {
  align-self: flex-start;
  width: 75%;
} */

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap");
</style>
