import axios from 'axios';
const baseURL = "https://shopapp-vx333.kinsta.app/orders";

export default axios.create({ baseURL });