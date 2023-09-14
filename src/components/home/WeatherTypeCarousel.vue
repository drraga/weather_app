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
    class="weather-type-carousel"
    :mouseDrag="true"
    :touchDrag="true"
    >
      <slide 
        v-for="slide in forecastTypes"
        :key="slide"
        class="weather-type-carousel__item">
          <a href=":;" class="weather-type-carousel__item__link">
            {{ slide }}
          </a>
      </slide>
  </carousel>
</template>

<style lang="scss">
.weather-type-carousel{
  height: 38px;
  width: 100%;
  border-bottom: solid #868794 1px;
}

.weather-type-carousel__item{
  width: 100%;

  &__link{
    padding-bottom: 15px;
    border-bottom: solid #868794 1px;
    white-space: nowrap;
    overflow: hidden;

    &:hover{
      transition: 0.09s;
      border-bottom: 1px solid #FFFFFF;
      color: #FFFF;
    }
  }
}
</style>