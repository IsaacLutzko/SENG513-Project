<template>
  <div class="page-container">
    <div class="content">
      <div class="heading">Sign Up Form</div>
      <div class="sub-heading">Please fill in all the fields below</div>
      <div class="input-box">
        <span class="details">Email</span>
        <input
          v-model="state.email"
          class="text-area"
          type="text"
          placeholder="Enter your email"
        />
        <span v-if="v$.email.$error">
          {{ v$.email.$errors[0].$message }}
        </span>
      </div>
      <div class="input-box">
        <span class="details">Password</span>
        <input
          v-model="state.password.password"
          class="text-area"
          type="password"
          placeholder="Enter your password"
        />
        <span v-if="v$.password.password.$error">
          {{ v$.password.password.$errors[0].$message }}
        </span>
      </div>
      <div class="input-box">
        <span class="details">Confirm Password</span>
        <input
          v-model="state.password.Confirm"
          class="text-area"
          type="password"
          placeholder="Re-enter your password"
        />
        <span v-if="v$.password.Confirm.$error">
          {{ v$.password.Confirm.$errors[0].$message }}
        </span>
      </div>

      <div class="input-box">
        <div class="details">User Type</div>
        <select
          v-model="state.user_type"
          class="form-select dropdown-box"
          aria-label="Default select example"
        >
          <option value="Jobseeker">Jobseeker</option>
          <option value="HiringManager">HiringManager</option>
        </select>
        <span v-if="v$.user_type.$error">
          {{ v$.user_type.$errors[0].$message }}
        </span>
      </div>

      <!-- <div class="button input-box">
          <input
            @click="submitForm"
            class="input-button"
            type="submit"
            value="Sign Up"
          />
        </div> -->
      <div class="button input-box">
        <button @click="submitForm" class="input-button">Sign Up</button>
      </div>
    </div>
  </div>
</template>

<script>
// import io, { Socket } from "socket.io-client";
import Websocket from "../../services/webSocket";
import useValidate from "@vuelidate/core";
import { reactive, computed } from "vue";
import {
  required,
  email,
  minLength,
  sameAs,
  // helpers,
} from "@vuelidate/validators";

// import $ from "jquery"
export default {
  data: function () {
    return {
      email: "",
      password: "",
      socket: Websocket,
    };
  },

  setup() {
    const state = reactive({
      email: "",
      password: {
        password: "",
        Confirm: "",
      },
      user_type: "",
    });

    const rules = computed(() => {
      return {
        email: { required, email },
        password: {
          password: { minLength: minLength(6), required },
          Confirm: { required, sameAs: sameAs(state.password.password) },
        },
        user_type: { required },
      };
    });

    const v$ = useValidate(rules, state);

    return {
      state,
      v$,
    };
  },
  methods: {
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("Form sent to server");
        this.checkCredentials();
      } else {
        alert("Invalid inputs");
      }
    },

    checkCredentials: function () {
      // Ask server for login confirmation
      console.log();
      console.log();
      this.socket.emit("proposedlogin", {
        email: this.state.email,
        password: this.state.password.password,
      });

      // Listen for a response from the server
      this.listen();
    },
    // All the listening functions
    listen: function () {
      this.socket.on("loginaccepted", () => {
        console.log("credential accepted");
        this.$router.push({ path: "/createaccount", replace: true });
      });

      this.socket.on("logindenied", () => {
        console.log("credential denied");
      });
    },
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
  margin: 0;
  padding: 0;
  width: 100%;
  height: 90vh;
  display: flex;
  /* border: solid 5px red; */
  background-image: url(@/assets/login_image.png), url(@/assets/page_curve.svg);
  background-repeat: no-repeat, no-repeat;
  background-position: top 20% right 10%, bottom;
  background-size: 45%, 100%;
  align-items: center;
  justify-items: left;
}

.content {
  border: solid 2.5px black;
  border-radius: 15px;
  position: relative;
  left: 10%;
  top: -3%;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
}

.heading,
.sub-heading {
  padding-bottom: 5%;
}

.content {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-box {
  width: 100%;
}

.input-box {
  width: 80%;
  padding-bottom: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-box .text-area {
  padding: 5px;
  border-radius: 5px;
  background-color: #f7f2f8;
  width: 100%;
  height: 40px;
}

.heading {
  font-family: "Manrope", sans-serif;
  font-size: 40px;
  font-weight: bold;
}

.sub-heading {
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  color: #706464;
}

.details {
  align-self: flex-start;
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

.dropdown-btn {
  border: 1px solid #837373;
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
</style>
