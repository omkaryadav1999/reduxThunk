import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAIL } from "../constant/userConstatnt"

const initialState = {
    users: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_REQUEST:
            return { loding: true, users: [] }

        case GET_USERS_SUCCESS:
            return { loding: false, users: action.paylod }

        case GET_USERS_FAIL:
            return { loding: false, error: action.paylod }

        default:
            return state

    }

}