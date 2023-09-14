<script>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css'

export default{
  name: 'WeatherForecastCarousel',
  components: {
    Carousel,
    Slide,
  },

}
</script>

<template>
  <carousel
    :items-to-show="3.5" 
    class="weather--carousel"
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

<style>

</style>