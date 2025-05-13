import axios, {AxiosInstance} from "axios";

const instance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api/',
    timeout: 30_000,
})

export default instance;