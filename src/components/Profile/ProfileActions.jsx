import { Link } from "react-router-dom";
import { UseUser } from "../../context/UserContext";
import { storageDelete } from "../../utils/storage";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { clearTranslation } from "../../api/translate";
import { storageSave } from "../../utils/storage";

const ProfileActions = () => {

    const {user, setUser} = UseUser()

    const handleLogoutClick = () =>{
        if (window.confirm("Are you sure?")){
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    const handleClearHistoryClick = async() =>{
        if(!window.confirm("Are your sure?")){
            return
        }
        const [clearError] = await clearTranslation(user.id)
        if(clearError!==null){
            return
        }
        const updatedUser = {
            ...user,
            translations: []
        }
        storageSave(STORAGE_KEY_USER,updatedUser)
        setUser(updatedUser)
    }


    return(
        <>
            <button onClick={handleClearHistoryClick}>Clear history</button>
            <button onClick={handleLogoutClick}>Logout</button>
        </>
    )
}
export default ProfileActions
