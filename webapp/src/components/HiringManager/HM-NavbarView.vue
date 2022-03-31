<template>
  <header>
    <nav>
      <div class="app-logo">
        <img src="@/assets/site_logo.png" />
      </div>
      <ul v-show="!moblie" class="navigation">
        <li>
          <router-link class="link" :to="{ name: 'Explore' }"
            >Explore</router-link
          >
        </li>
        <li>
          <router-link class="link" :to="{ name: '' }">Matches</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: '' }">Jobs</router-link>
        </li>
      </ul>
      <!-- <div class="icon">
        <i
          @click="toggleMobileNav"
          v-show="moblie"
          class="fa fa-bars"
          :class="{ 'icon-active': mobileNav }"
        ></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="moblieNav" class="dropdown-nav">
          <li>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: '' }">Explore</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: '' }">Matches</router-link>
          </li>
        </ul>
      </transition> -->
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
}

nav {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  transition: 0.5s ease all;
  width: 90%;
  height: auto;
}

nav .app-logo {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 10%;
}

@media (min-width: 1140px) {
  nav {
    max-width: 1140px;
  }
}

ul {
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 15%;
}

ul,
.link {
  font-weight: 500;
  list-style: none;
  text-decoration: none;
  height: auto;
}

li {
  color: black;
  text-transform: uppercase;
  font-family: "Manrope", sans-serif;
  padding: 16px;
  margin-left: 16px;
}

.link {
  font-size: 14px;
  transition: 0.5s ease all;
  padding-top: 4px;
}

.link:hover {
  background-image: linear-gradient(90deg, #fc8801, #dea26a);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.app-logo {
  display: flex;
  align-items: center;
}

.app-logo img {
  width: 125px;
}
</style>

<style>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@700&family=ZCOOL+QingKe+HuangYou&display=swap");
</style>
