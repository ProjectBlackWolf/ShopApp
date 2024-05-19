import axios from 'axios';
const baseURL = "http://localhost:3000/invItem";

export default axios.create({ baseURL });