import axios from "axios";
const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:5001/dev-eb807/us-central1/app"
});

export {axiosInstance};