import axios from 'axios';
import store from '../src/store/index';

class Service {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:5005/api/reviews',
    });
  }

  getReviews() {
    console.log('getting reviews in service...');
    this.service.get('/').then((response) => {
      console.log('got reviews in service...');
      store.dispatch('updateReviews', response.data);
    }).catch((error) => console.log(error));
  }
}

const reviewService = new Service();

export default reviewService;
