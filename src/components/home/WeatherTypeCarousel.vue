<script>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
  name: 'WeatherTypeCarousel',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      forecastTypes: ['Today', 'Forecast', 'Percipitation', 'Radar Sun & Moon'],
    }
  }
}
</script>

<template>
    <carousel
      :items-to-show="3.5" 
      class="weather-type"
      :mouseDrag="true"
      :touchDrag="true"
      >
      <slide 
        v-for="slide in forecastTypes"
        :key="slide"
        class="selected-forecast">
          <a href=":;" class="selected-forecast__link">
            {{ slide }}
          </a>
      </slide>
  </carousel>
</template>

<style lang="scss">
.weather-type{
  // width: 360px;
  height: 38px;
  border-bottom: solid #868794 1px;
}
.carousel__track{
  height: 38px;
  align-items: stretch;
}
.selected-forecast{
  &__link{
    padding-bottom: 15px;
    border-bottom: solid #868794 1px;
    &:hover{
      transition: 0.09s;
      border-bottom: 1px solid #FFFFFF;
      color: #FFFF;
    }
  }
}
</style>