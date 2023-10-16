import axios from "axios";
//  podemos usar tambem o fetch ao inves do axios https://medium.com/trainingcenter/axios-ou-fetch-765e5db9dd59
const BASE_URL = process.env.REACT_APP_API_RICK

export async function get(url: string) {
    return axios.get(BASE_URL + url);
}

export async function post(url: string, data: any) {
    return axios.post(BASE_URL + url, data, {
        headers: {
            Authorization: 'Bearer syghydgaysudg usdhuhdusha'
        }
    });
}
// data eh o body, Authorization vai no header