
export const getToken = () => {
    if(localStorage.getItem('access') && localStorage.getItem('refresh')) {
        return {
            access: localStorage.getItem('access'),
            refresh: localStorage.getItem('refresh')
        }
    }
    return null
}

export const setToken = (token) => {
    localStorage.setItem('access', token.access)
    localStorage.setItem('refresh', token.refresh)
}

export const removeToken = () => {
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
}