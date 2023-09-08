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
    },
    currentHumidity() {
      return this.weatherForecast?.current?.humidity
    },
    currentPrecipitation() {
      return this.weatherForecast?.current?.precip_mm
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
          <span
          class="temperature__digits__bold"
          >
            {{ currentTempCelcius }}
          </span>
          <span>
            <sup
            class="temperature__digits__degree"
            >°</sup>
          </span>
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
        <span>{{ currentTempCelcius }}<span>&#176;</span> | Feels like <span class="weather-text__temperature_highlighted">{{ currentFeelsLikeTempC }}</span><span>&#176;</span> C</span>
      </p>
      <p class="weather-text__wind">
        <span>Wind <span class="weather-text__wind_highlighted"> {{ currentWindKPH }} KM/H </span> {{  currentWindDir }}</span>
      </p>
    </div>
  </section>

  <section class="weather-details">

    <div class="weather-details__type precipitation-wrapper">
      <figure>
        <img src="../icons/precipitation.svg" alt="">
      </figure>
      Precipitation: {{ currentPrecipitation }} mm
    </div>

    <div class="weather-details__type humidity-wrapper">
      <figure>
        <img src="../icons/humidity-small.svg" alt="">
      </figure>
      Humidity: {{ currentHumidity }} %
    </div>

    <div class="weather-details__type wind-wrapper">
      <figure>
        <img src="../icons/wind-icon.svg" alt="">
      </figure>
      Wind: {{ currentWindKPH }} km/h
    </div>

    <div class="weather-details__type sunset-wrapper">
      <figure>
        <img src="../icons/night-small.svg" alt="">
      </figure>
      Sunrize/Sunset: 
    </div>
  </section>
</template>

<style lang="scss">
.current-weather-params{
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
    font-size: 60px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.18);
    background: -webkit-linear-gradient(#A2A4B5, #545760);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 49px;

    &__bold {
      font-weight: 700;
    }

    &__degree {
      font-size: 23px;
      vertical-align: text-top;
      }
  }

}

.weather-text {
  display: flex;
  color: #9b9ead;
  padding-bottom: 22px;
  border-bottom: dashed 0.5px #979797;
  

  &__temperature {
    border-right: solid 1px;
    width: 50%;
    display: flex;
    justify-content: center;

    &_highlighted {
      color: #ffffff;
    }
  }

  &__wind {
    width: 50%;
    display: flex;
    justify-content: center;
    &_highlighted {
      color: #ffffff;
    }
  }
}

.weather-details{
  display: flex;
  flex-wrap: wrap;
  font-size: 10px;
  color: #9B9EAD;
  padding: 22px 25px;

    &__type{
      display: flex;
      align-items: center;
      flex-basis: 50%;

      img{
        margin-right: 10px;
      }
    }
  }
</style>