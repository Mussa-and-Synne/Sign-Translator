import { NavLink } from "react-router-dom"
import { UseUser } from "../../context/UserContext"

const Navbar = () =>{

    const {user} = UseUser()
    return(
        <nav>
            <h1>Lost in Translation</h1>
            { user !== null &&
            <ul className="header-list">
                <li className="img-name">
                    <NavLink to="/profile" className="profile-click-header header-clicks"> <img className="profile-pic" src="img/user.png" alt="profilepicture" width="90px" />{user.username}</NavLink>
                </li>
                <li>
                    <NavLink to="/translation" className="header-clicks">Translate</NavLink>
                </li>
            </ul>
            }
        </nav>
    )
}
export default Navbar