import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '31b10a50295b4610b989727f9407f3ab'
    }
})