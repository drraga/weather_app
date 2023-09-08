<script>
import WeatherTypeCarousel from '../components/home/WeatherTypeCarousel.vue'
  export default{
    name: 'NavigationBar',
    components: { WeatherTypeCarousel, },
    data() {
      return {
        location: 'Moscow',
      }
    }
}
</script>

<template>
  <nav class="nav-header">
    <div class="nav-header__top">
      <img src="../components/icons/stripes-shape.svg" width="24" height="24" alt="personal menu">
      <div class="location">{{ location }}</div>
      <img src="../components/icons/round-shape.svg" width="24" height="24" alt="select lcity">
    </div>
    <div class="nav-header__bottom">
      <WeatherTypeCarousel />
    </div>
  </nav>
</template>

<style lang="scss">
.nav-header {
  width: 360px;
  height: 96px;
    &__top {
    padding: 17px 24px;

    width: 360px;
    display: flex;
    justify-content: space-between;
  }
}
</style>