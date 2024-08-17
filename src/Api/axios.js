import axios from "axios";
const axiosInstance = axios.create({
baseURL:"https://app-hugo6yrghq-uc.a.run.app"
});

export {axiosInstance};