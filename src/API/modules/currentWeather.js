import axiosClient from '../apiClient'

export default async function getCurrentWeather(place) {
  const response = await axiosClient({
    method: 'get',
    url: '/current.json',
    params: {
      q: place,
      lang: null,
      key: import.meta.env.VITE_WEATHER_API,
    }
  })
  return response
}