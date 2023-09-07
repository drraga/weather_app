<script>
import getCurrentWeather from '../../API/modules/currentWeather.js'

export  default{
  name: 'WeatherCurrentState',
  data() {
    return {
      paramObject: {
        q: '',
        lang: '',
        key: import.meta.env.weatherAPI,
      },
      place: 'Novorossiysk',
    }
  },
  mounted(){
    this.getCurrentWeatherSelectedPlace(this.place)
  },
  methods: {
    getCurrentWeatherSelectedPlace(place) {
      this.paramObject.q = place
      this.getCurrentWeather(this.paramObject)
    }
  }
}
</script>

<template>
  <section class="current-weather-params">
    <div class="top-section">
      <figure class="weather-icon">
      <img src="../icons/sunny-weather.svg" alt="weather state">
    </figure>

    <div class="temperature">
      <div class="temperature__digits">
        33
      </div>
      <span class="temperature__symbol">&#176;</span>
      <div class="temperature__description">
        <span>
          Partly Cloudy
        </span>
      </div>
    </div>
    </div>

    <div class="weather-text">
      <p class="weather-text__temperature">
        29<span>&#176;</span>/27<span>&#176;</span> | Feels like <span class="weather-text__temperature_highlighted">39</span><span>&#176;</span>C
      </p>
      <p class="weather-text__wind">
        Wind <span class="weather-text__wind_highlighted">9 KM/H</span> WSW
      </p>
    </div>

  </section>
</template>

<style lang="scss">
.current-weather-params{
  height: 80px;
  font-size: 10px;
}

.top-section{
  display: flex;
}

.weather-icon{
  margin-right: 44px;
}

.temperature{
  padding-top: 26px;
  &__digits{
    font-size: 60px;
    font-weight: 700;
    display: inline-block;
    text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.18);
    background: -webkit-linear-gradient(#A2A4B5, #545760);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 49px;
  }
  &__symbol {
    display: inline-block;
    padding-top: 15px;
    font-size: 23px;
    vertical-align: top;
    color: #9B9EAD;
  }
}
.weather-text {
  display: flex;
  color: #9b9ead;
  padding: 0px 25px;
  padding-bottom: 22px;
  border-bottom: dashed 1px #979797;

  &__temperature {
    border-right: solid 1px;
    padding-right: 30px;
    &_highlighted {
      color: #ffffff;
    }
  }

  &__wind {
    padding-left: 31px;
    &_highlighted {
      color: #ffffff;
    }
  }
}
</style>