import axios from 'axios'

class ApiService {
  static async getValues () {
    return await axios.get('/api/SampleData/WeatherForecasts')
  }

  static async login (loginRequest) {
    return await axios.post('api/SampleData/post', loginRequest)
  }
  
  static async getEvents() {
    return await axios.get('api/events');
  }

  static async userExists(email) {
    return await axios.post('api/auth/userexists', email);
  }
}

export default ApiService
