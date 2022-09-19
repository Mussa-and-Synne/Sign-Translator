import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"
const ProfileTranslationHistory = ({translations}) => {
    const translationList = []
    let i = translations.length-1
    while(i>=translations.length-10 && i>=0){ //lengden av transl list og starte der
        console.log(i)
        translationList.push(<ProfileTranslationHistoryItem key={i + '-' + translations[i]} item={translations[i]}/>)
        i--
    }
    
    return (
        <section>
            <h4>Last 10 translations</h4>
            <ul>
                {translationList}
            </ul>
        </section>
    )
}
export default ProfileTranslationHistory