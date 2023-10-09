import axios from 'axios';
const baseURL = "https://shopapp-vx333.kinsta.app/users";

export default axios.create({ baseURL });