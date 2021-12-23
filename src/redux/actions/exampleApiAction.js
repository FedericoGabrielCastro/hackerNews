import axios from "axios"
import { GET_API, GET_API_ERROR } from "../types";

// Api de prueba 
const URL_API = "https://rickandmortyapi.com/api/character"

export const getAPiAction = () => async (dispatch) => {

    const data = await axios.get(URL_API)
    try {
        dispatch ({
            type: GET_API,
            payload: data.data.results
        })
    } catch (err) {
        dispatch ({
            type: GET_API_ERROR,
            payload: data.err
        })
    }
}

