import axios from 'axios';
const baseURL = "http://localhost:3005/invItem";

export default axios.create({ baseURL });