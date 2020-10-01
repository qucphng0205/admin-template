export const AuthActionTypes = {
    FETCH_USER_REQUEST: "FETCH_USER_REQUEST",
    FETCH_USER_SUCCESS: "FETCH_USER_SUCCESS",
    FETCH_USER_FAILURE: "FETCH_USER_FAILURE",

    HANDLE_PAYMEN_REQUEST: "HANDLE_PAYMEN_TOKEN_REQUEST",
    HANDLE_PAYMEN_SUCCESS: "HANDLE_PAYMEN_TOKEN_SUCCESS",
    HANDLE_PAYMEN_FAILURE: "HANDLE_PAYMEN_TOKEN_FAILURE",
}

export const fetchUserRequest = () => ({
    type: AuthActionTypes.FETCH_USER_REQUEST,
})

export const fetchUserSuccess = (user) => ({
    type: AuthActionTypes.FETCH_USER_SUCCESS,
    payload: user,
})

export const fetchUserFailure = (errMessage) => ({
    type: AuthActionTypes.FETCH_USER_FAILURE,
    payload: errMessage,
})

export const handlePaymentRequest = (paymentToken) => ({
    type: AuthActionTypes.HANDLE_PAYMEN_REQUEST,
    payload: paymentToken
})

export const handlePaymentSuccess = () => ({
    type: AuthActionTypes.HANDLE_PAYMEN_SUCCESS,
})

export const handlePaymentFailure = (errorMessage) => ({
    type: AuthActionTypes.HANDLE_PAYMEN_FAILURE,
    payload: errorMessage
})