import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"
const ProfileTranslationHistory = ({translations}) => {
    const translationList = []
    let i = translations.length-1
    while(i>=translations.length-10 && i>=0){ 
        translationList.push(<ProfileTranslationHistoryItem key={i + '-' + translations[i]} item={translations[i]}/>)
        i--
    }
    
    return (
        <section className="profile-section">
            <h4>Last 10 translations</h4>
            <ul className="profile-section-list">
                {translationList}
            </ul>
        </section>
    )
}
export default ProfileTranslationHistory