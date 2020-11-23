import axios from 'axios';

const clienteAxios=axios.create({
    baseURL:'https://my-json-server.typicode.com/jdvpl/api'
})
export default clienteAxios;
