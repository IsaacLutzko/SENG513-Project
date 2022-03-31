<template>
  <div class="app">
    <Jobseeker />
  </div>
</template>

<script>
import Jobseeker from "./views/JobseekerView.vue";

export default {
  name: "App",
  components: {
    Jobseeker,
  },
};
</script>
