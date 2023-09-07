import axiosClient from '../apiClient'

export default async function getCurrentWeather(paramObject) {
  const response = await axiosClient({
    method: 'get',
    url: '/forecast',
    params: paramObject
  })
  return response
}