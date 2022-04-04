<template>
  <div class="page-container">
    <div class="container">
      <div class="content-container">
        <div class="row row-one">
          <div class="logo-container col-auto">
            <img class="logo" src="@/assets/google-logo.png" />
          </div>
          <div class="col-auto">
            <div class="role-title">Junior Full Stack</div>
            <div class="company-title">Google</div>
            <div class="location-title">Palo Alto, California</div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-9">
            <div class="heading">Job Description</div>
            <div class="body-content">
              As a Full Stack Developer, you will be working as part of a small,
              dynamic development team, directly alongside the co-founders of
              Level. Together, our team delivers world-class strategic financial
              advice and bookkeeping services to one of the most underserved,
              and largest small business segments on the planet. You’ll have
              endless opportunities to be a problem solver, and drive positive
              change in people’s lives.
            </div>
          </div>
          <div class="col-lg-3">
            <div class="heading">Experienced</div>
            <div class="body-content">
              <ul>
                <li>Full Stack: 2 years</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="button-bar">
          <div class="button-container">
            <img class="check-logo" src="@/assets/x_icon.png" />
            <img class="skip-logo" src="@/assets/skip_icon.png" />
            <img class="cross-logo" src="@/assets/check_mark_icon.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
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

.button-bar img {
  padding: 10px;
  width: 95px;
  height: auto;
}

.page-container {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  /* border: solid 5px red; */
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
