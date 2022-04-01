import axios from 'axios';

export default {
  name: 'DataService',
  async getData() {
    try {
      console.log("request sent");
      const response = await axios.get(
        "https://www.anapioficeandfire.com/api/books"
      );
      console.log("request recived");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}