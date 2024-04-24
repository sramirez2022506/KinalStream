export const validateUsername = (username) => {
    const regex = /^\S{3,8}$/
    
    return regex.test(username)
}

export const validateUsernameMessage = 'The name most have min 3 max 8 characters'