import axios from "axios";

const APIFilmes = axios.create({
    baseURL: "https://sujeitoprogramador.com"
});

export default APIFilmes;