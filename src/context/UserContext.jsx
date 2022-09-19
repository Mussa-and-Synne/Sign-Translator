import { createContext, useContext, useState } from "react";
import { storageRead } from "../utils/storage";
import { STORAGE_KEY_USER } from "../const/storageKeys";

//Context -> exposing
const UserContext = createContext()

export const UseUser = () => {
    return useContext(UserContext) //Returns {user, setUser}
}

//Provider -> managing state
const UserProvider = ({children}) => {
    const [user, setUser] = useState(storageRead(STORAGE_KEY_USER))
    const state = {
        user,
        setUser
    }
    return(
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider