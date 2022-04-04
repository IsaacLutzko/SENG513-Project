<template>
  <div class="page-container">
    <div class="heading-container">
      <div class="heading">Add a Job</div>
    </div>
    <div class="info-container">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="dropdown-heading">Job Type</div>
            <select
              v-model="job_type"
              class="form-select dropdown-box"
              aria-label="Default select example"
            >
              <option selected>Select Job Type</option>
              <option value="data scientist">data scientist</option>
              <option value="Information Security analyst">
                Information Security analyst
              </option>
              <option value="UX designer">UX designer</option>
              <option value="UX designer">UX designer</option>
              <option value="Software Developer">Software Developer</option>
              <option value="Front-end Developer">Front-end Developer</option>
              <option value="Back-end Developer">Back-end Developer</option>
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
          <div class="col-lg-4">
            <div class="input-box">
              <span class="details">Job Title</span>
              <input
                v-model="job_title"
                class="name-field text-area"
                type="text"
                placeholder="Enter the job title"
                required
              />
            </div>
          </div>
          <div class="col-lg-4">
            <div class="input-box">
              <span class="details">Location</span>
              <input
                v-model="location"
                class="name-field text-area"
                type="text"
                placeholder="Enter job location"
                required
              />
            </div>
          </div>
          <div class="col-lg-4">
            <div class="details">Years of Experience</div>
            <select
              v-model="experience"
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
          </div>
          <div class="col-lg-4">
            <div class="input-box">
              <span class="details">Start date</span>
              <input
                v-model="startdate"
                class="name-field text-area"
                type="date"
                placeholder="Enter start date"
                required
              />
            </div>
          </div>
          <div class="col-lg-4">
            <div class="input-box">
              <span class="details">Salary</span>
              <input
                v-model="salary"
                class="name-field text-area"
                type="text"
                placeholder="Enter estimated salary"
                required
              />
            </div>
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
    <div class="description-container">
      <div class="container">
        <div class="row">
          <div class="heading-container">
            <div class="skills-heading">Job description</div>
          </div>
          <div class="col-lg-12">
            <div class="input-box">
              <input
                v-model="jobdescription"
                class="description-area"
                type="text"
                placeholder="Give a brief description of your job"
                required
              />
            </div>
          </div>
        </div>
        <hr class="col-xs-12" />
      </div>
    </div>
    <div class="button input-box">
      <input class="input-button" type="submit" value="Add Job" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      job_type: "",
      job_title: "",
      location: "",
      experience: "",
      startdate: "",
      salary: "",
      skills: [],
      jobdescription: "",
    };
  },
};
</script>

<style>
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

.description-area {
  padding: 5px;
  border-radius: 5px;
  background-color: #f7f2f8;
  width: 100%;
  height: 100px;
}

.details {
  align-self: flex-start;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
}

.info-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}

.skills-heading {
  float: left;
  /* border: 2px solid red; */
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  font-weight: bold;
}

.heading-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.heading {
  font-family: "Montserrat", sans-serif;
  font-size: 45px;
  font-weight: bold;
}

.add-icon {
  padding-top: 5px;
  float: right;
  width: 40px;
  /* border: 2px solid red; */
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
</style>
