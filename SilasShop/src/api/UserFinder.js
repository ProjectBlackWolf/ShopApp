import axios from 'axios';
const baseURL = "http://localhost:3000/users";

export default axios.create({ baseURL });