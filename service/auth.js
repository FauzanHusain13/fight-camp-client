import axios from "axios";
import callApi from "../config/api"

const ROOT_API = "https://fight-camp-server-130806.up.railway.app";
const API_VERSION = "api/v1";

export async function setSignUp(data) {
    const response = await axios.post(`${ROOT_API}/${API_VERSION}/auth/signup`, data)
        .catch((err) => err.response);

    const axiosResponse = response.data;

    if (axiosResponse?.error === 1) {
        return axiosResponse;
    }

    return axiosResponse.data;
}

export async function setLogin(data) {
    const url = `${ROOT_API}/${API_VERSION}/auth/signin`;
    return callApi({
        url,
        method: "POST",
        data
    });
}