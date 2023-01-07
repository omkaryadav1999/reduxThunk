import axios from "axios"
import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAIL } from "../constant/userConstatnt"

export const userAction = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: GET_USERS_REQUEST })

            const { data } = await axios("https://jsonplaceholder.typicode.com/users")

            dispatch({ type: GET_USERS_SUCCESS, paylod: data })


        } catch (error) {

            dispatch({
                type: GET_USERS_FAIL,
                paylod: error.data && error.response.data.message ? error.response.data.message : error.message
            })

        }

    }

}

