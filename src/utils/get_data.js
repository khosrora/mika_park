const { base_api } = require("./base_api");

export async function getData(link) {
    // Fetch data from external API
    const res = await fetch(base_api + link);
    const repo = await res.json();
    // Pass data to the page via props
    return repo;
}