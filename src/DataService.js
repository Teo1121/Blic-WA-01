import axios from 'axios';

export default {
  name: 'DataService',
  async getData() {
    try {
      const response = await axios.get(
        "https://www.anapioficeandfire.com/api/books"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}