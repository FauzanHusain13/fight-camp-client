import axios from "axios";

const ROOT_API = "https://fight-camp-server-130806.up.railway.app";
const API_VERSION = "api/v1";

export async function getTrainingItem() {
    const URL = "users/training";
    const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
    const axiosResponse = response.data;
    return axiosResponse.data;
}

export async function getGalleryItem() {
    const URL = "users/gallery";
    const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
    const axiosResponse = response.data;
    return axiosResponse.data;
}