import axios from 'axios';
const baseURL = "http://localhost:3000/orders";

export default axios.create({ baseURL });