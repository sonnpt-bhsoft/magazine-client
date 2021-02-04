/* eslint-disable import/no-anonymous-default-export */
import { authConstants } from '../actions/constants'

const initState = {
    token: null,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        profilePicture: '',
    },
    authenticate: false,
    authenticating: false,
    error: null,
    message: '',
    loading: false
}

export default (state = initState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true
            }
            break;
        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false
            }
            break;
    }
    return state
}