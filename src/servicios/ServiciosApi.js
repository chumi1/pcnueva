import axios from "axios";

const URL_BASE = "https://dolarapi.com/v1/dolares";

export const traeInfoServicio =() => axios.get(URL_BASE);
