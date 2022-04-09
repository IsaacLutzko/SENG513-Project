<template>
  <div class="page-container Landingpage">
    <div class="content">
      <p class="heading">divide n' hire</p>
      <div class="sub-heading-container">
        <p class="sub-heading">Let the jobs</p>
        <p class="sub-heading">find you.</p>
      </div>
      <div class="btn-container">
        <button
          v-on:click="$router.push({ path: '/register', replace: true })"
          class="join-btn"
        >
          Join Now
        </button>
      </div>
    </div>

    <!-- <img src="@/assets/laptop.png" /> -->
  </div>
</template>

<script>
export default {};
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
  background-image: url(@/assets/laptop.png), url(@/assets/page_curve.svg);
  background-repeat: no-repeat, no-repeat;
  background-position: top 20% right 10%, bottom;
  background-size: 45%, 100%;
  align-items: center;
  justify-items: left;
}

.content {
  /* border: solid 5px blue; */
  position: relative;
  left: 15%;
  top: -10%;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
}

.heading {
  font-family: "Manrope", sans-serif;
  font-size: 50px;
  background-image: linear-gradient(90deg, #fc8801, #dea26a);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.sub-heading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sub-heading {
  font-family: "Montserrat", sans-serif;
  color: #706464;
  font-size: 36px;
}

.heading,
.sub-heading-container,
.btn-container {
  padding-bottom: 15%;
}

.btn-container {
  display: flex;
  align-content: center;
  justify-content: center;
}

.join-btn {
  border: none;
  width: fit-content;
  padding: 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 30px;
  color: white;
  background-image: linear-gradient(90deg, #fc8801, #dea26a);
}

@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@700&family=ZCOOL+QingKe+HuangYou&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap");
</style>
