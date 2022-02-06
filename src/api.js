import axios from "axios";

const BASE_URL = window.location.origin;
console.log(BASE_URL)
const client = axios.create({
    baseURL: BASE_URL
});

export default {
    async getFlatsInfo() {
        return client.request({
                method: "GET",
                url: `${BASE_URL}/data/data.json`,
            }
        ).then((response) => {
            return response;
        }).catch((error) => {
            console.log(error)
        });
    }
}

