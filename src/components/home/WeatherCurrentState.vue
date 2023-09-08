<script>
import getCurrentWeather from '../../API/modules/currentWeather.js'

export  default{
  name: 'WeatherCurrentState',
  data() {
    return {
      weatherForecast:{},
      place: 'Novorossiysk',
    }
  },
  mounted(){
    this.getCurrentWeatherSelectedPlace(this.place)
  },
  methods: {
    async getCurrentWeatherSelectedPlace(place) {
      const response = await getCurrentWeather(place.toLowerCase())
      this.weatherForecast = await response.data
      console.log(this.weatherForecast)
    }
  },
  computed: {
    currentTempCelcius() {
      return this.weatherForecast?.current?.temp_c
    },
    currentWeaterDescription() {
      return this.weatherForecast?.current?.condition?.text
    },
    currentFeelsLikeTempC() {
      return this.weatherForecast?.current?.feelslike_c
    },
    currentWindDir() {
      return this.weatherForecast?.current?.wind_dir
    },
    currentWindKPH() {
      return this.weatherForecast?.current?.wind_kph
    }
  }
}
</script>

<template>
  <section class="current-weather-params">
    <div class="top-section">
      <figure class="weather-icon">
      <img src="../icons/untitled-1.svg" alt="weather state">
    </figure>

    <div class="temperature">
      <div class="temperature__digits">
        {{ currentTempCelcius }}
      </div>
      <div class="temperature__description">
        <span>
          {{ currentWeaterDescription }}
        </span>
      </div>
    </div>
    </div>

    <div class="weather-text">
      <p class="weather-text__temperature">
        {{ currentTempCelcius }}<span>&#176;</span> | Feels like <span class="weather-text__temperature_highlighted">{{ currentFeelsLikeTempC }}</span><span>&#176;</span> C
      </p>
      <p class="weather-text__wind">
        Wind <span class="weather-text__wind_highlighted">{{ currentWindKPH }} KM/H</span> {{ currentWindDir }}
      </p>
    </div>
  </section>
</template>

<style lang="scss">
.current-weather-params{
  height: 80px;
  font-size: 10px;
  padding: 0 25px;
}

.top-section{
  display: flex;
  padding-bottom: 16px;
}

.weather-icon{
  width: 50%;
}

.temperature{
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  &__digits{
    position:relative;
    font-size: 60px;
    font-weight: 700;
    display: inline-block;
    text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.18);
    background: -webkit-linear-gradient(#A2A4B5, #545760);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 49px;

    &:after {
      content: '°';
      position:absolute;
      top: 50px;
      right: -14px;
      font-size: 23px;
      color: #9B9EAD;
    }
  }

}
.weather-text {
  display: flex;
  color: #9b9ead;
  justify-content: center;
  padding-bottom: 22px;
  border-bottom: dashed 0.5px #979797;
  

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