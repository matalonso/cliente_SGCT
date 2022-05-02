import axios from 'axios'

const GUACHERA_REST_API_URL = 'http://localhost:8090/SGCT/Guacheras/Listar';

class GuacheraService {

    getGuacheras(){
        return axios.get(GUACHERA_REST_API_URL);
        
    }
}

export default new GuacheraService();