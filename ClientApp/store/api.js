import axios from 'axios'

class ApiService {
  static async getValues () {
    return axios.get('/api/SampleData/WeatherForecasts')
  }

  static async login (loginRequest) {
    return axios.post('api/SampleData/post', loginRequest)
  }
}

export default ApiService
