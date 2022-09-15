import axios from 'axios';
import store from '../src/store/index';

class Service {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:5005/api/reviews',
    });
  }

  getReviews() {
    this.service
      .get('/')
      .then((response) => {
        store.dispatch('updateReviews', response.data);
      })
      .catch((error) => console.log(error));
  }

  postReview(review) {
    this.service
      .post('/new', review)
      .then(() => {
        store.dispatch('reviewSubmitted', true);
      })
      .catch((error) => console.log(error));
  }
}

const reviewService = new Service();

export default reviewService;
