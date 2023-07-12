import axios from 'axios'

const $apiV1 = axios.create({
  baseURL: 'https://gateway.scan-interfax.ru/api/v1',
})

$apiV1.interceptors.request.use((config) => {
  console.log(Date.parse(localStorage.getItem('expire')), Date.now())
  const expire = localStorage.getItem('expire')
  if (expire && Date.parse(expire) <= Date.now()) {
    console.log('token expire')
  }
  if (config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      'accessToken'
    )}`
  }
  return config
})

export default $apiV1
