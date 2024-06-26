const { base_api } = require("./base_api");
import axios from "axios";


export async function getData(link) {
    // Fetch data from external API
    const res = await fetch(base_api + link, {
        cache: 'no-store'
    });
    const repo = await res.json();
    // Pass data to the page via props
    return repo;
}

export const getDataAPI = async (array) => {
    const res = await axios.get(`${base_api}${array[0]}`);
    return res;
};

export const postDataAPI = async (array, data) => {
    const res = await axios.post(`${base_api}${array[0]}`, data);
    return res;
};

export const fetcher = (url) =>
    getDataAPI(url).then((res) => res.data);