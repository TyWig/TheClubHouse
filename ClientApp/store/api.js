import axios from 'axios';

class ApiService {
    static async getValues() {
      return await axios.get('/api/SampleData/WeatherForecasts');
    }

    static async login(loginRequest) {
      return await axios.post('api/SampleData/post', loginRequest);
    }
}

export default ApiService
