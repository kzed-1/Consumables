
export const createUser = user => (
    $.ajax({
        method: 'POST',
        url: '/api/users',
        data: {user}
    })
)

export const login = user => (
    $.ajax({
        method: 'POST',
        url: '/api/sessions',
        data: {user}
    })
) 

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/sessions'
    })
)