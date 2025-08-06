import axios from "axios";

class ReviewsController {

  static async getAllReviews(setReviews) {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/v0.1/user/reviews/featured');
      const reviews = response.data.payload;

      if (response.status === 200) {
        setReviews(reviews);

         // debug
        console.log(reviews);
      } else {
        console.error(`Error fetching reviews: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error fetching reviews: ${error.message}`);
    }
  }

}

export default ReviewsController;