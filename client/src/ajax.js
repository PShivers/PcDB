import axios from "axios";

export function getPopularPodcasts(){
    return axios.get('/popularpodcasts')
}