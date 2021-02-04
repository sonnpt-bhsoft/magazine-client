import { authConstants } from './constants';
import axios from '../helper/axios'

export const login = (user) => {
    return async dispatch => {
        dispatch({ type: authConstants.LOGIN_REQUEST })
        const res = await axios.post('auth/login', { ...user })
        if (res.status === 200) {
            const { token, user } = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            })
        }
        if (res.status === 400) {
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: { error: res.data.error }
            })
        }
    }
}