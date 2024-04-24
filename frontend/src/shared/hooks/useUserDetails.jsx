import { useState } from "react"
import { logOut as logOutHandler } from "./useLogOut"

const getUserDetails = () => {
    const userDetails = localStorage.getItem('user')
    
    if (userDetails) {
        return JSON.parse(userDetails);
    }
    return null
}

export const useUserDetails = () => {
    const [userDetails, setUserDetails] = useState(getUserDetails())

    const logOut = () => {
        logOutHandler()
    }
    return {
        isLogged: Boolean(userDetails),
        username: userDetails?.username ? userDetails.username : 'Guest',
        logOut
    }
}