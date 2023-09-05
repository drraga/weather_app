<script>
import NavigationBar from '../components/NavigationBar.vue'
import CurrentDate from '../components/home/CurrentDate.vue'
import StatusBar from '../components/home/StatusBar.vue'
import WeatherCurrentState from '../components/home/WeatherCurrentState.vue'

export default {
  name: 'HomeView',
  components: {
    NavigationBar,
    CurrentDate,
    StatusBar,
    WeatherCurrentState,
  },

}
</script>

<template>
  <div class="main-wrapper">
    <StatusBar />
    <NavigationBar />
    <CurrentDate />
    <WeatherCurrentState />
  </div>
</template>

<style>
.main-wrapper {
  background: linear-gradient(#484B5B, #2C2D35);
  width: 360px;
  height: 760px;
}
</style>