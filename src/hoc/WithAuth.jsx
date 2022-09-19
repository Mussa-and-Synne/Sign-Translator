import { UseUser } from "../context/UserContext"
import { Navigate } from "react-router-dom"

const withAuth = Component => props =>{
    const {user} = UseUser()
    if(user !== null){
        return <Component {...props}/>
    }else{ //If user is not logged in
        return <Navigate to="/"/> //Navigate to login
    }
}
export default withAuth