import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://cors-anywhere.herokuapp.com/https://us-central1-challenge-4b2b2.cloudfunctions.net/api'

});

export default instance;


