import withAuth from "../hoc/WithAuth"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory"
import { UseUser } from "../context/UserContext"
import ProfileActions from "../components/Profile/ProfileActions"


const Profile = () =>{

    const {user} = UseUser()

    return(
        <>
            <h1>Profile</h1>
            <ProfileHeader username = {user.username}/>
            <ProfileTranslationHistory translations = {user.translations }/>
            <ProfileActions/>
        </>
    )
}
export default withAuth(Profile)