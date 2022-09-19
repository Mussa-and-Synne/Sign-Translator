import { NavLink } from "react-router-dom"
import { UseUser } from "../../context/UserContext"

const Navbar = () =>{

    const {user} = UseUser()
    return(
        <nav>
            <h1>Lost in Translation</h1>
            { user !== null &&
            <ul>
                <li>
                    <NavLink to="/translation">Translate</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
            </ul>
            }
        </nav>
    )
}
export default Navbar