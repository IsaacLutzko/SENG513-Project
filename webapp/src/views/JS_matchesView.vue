<template>
  <div class="page-container">
    <h1>MATCHES PAGE</h1>
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
</style>
