import axios from 'axios';

const url = "http://localhost:3001/listeDePersonnes"

export default class ServicePersonne {
    get() {
        return axios.get(url);
    }
    getId(id) {
        return axios.get(`${url}/${id}`);
    }

    delete(id) {
        return axios.delete(`${url}/${id}`);
    }

    put(id,data) {
        return axios.put(`${url}/${id}`,data); 
    }

    post(data) {
        return axios.post(`${url}`,data); 
    }
}