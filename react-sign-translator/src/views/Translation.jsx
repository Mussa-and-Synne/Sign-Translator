import TranslationInput from "../components/Translation/TranslationInput"
import TranslationOutput from "../components/Translation/TranslationOutput"
import withAuth from "../hoc/WithAuth"
import { useState } from "react"
import { createTranslation } from "../api/translate"
import { UseUser } from "../context/UserContext"
import { storageSave } from "../utils/storage"
import { STORAGE_KEY_USER } from "../const/storageKeys"

const Translation = () =>{

    const { user, setUser } = UseUser();
    var imageTranslate = []
    const [inputText, setInputText] = useState()
    const [apiError, setApiError] = useState(null)

    const handleTranslate = async (text) =>{
        if(text.length > 40){
            alert("Translation is too long!")
            return;
        }
        setInputText(text);
        const [error,updatedUser] = await createTranslation(user, text);
        if(error !== null){
            setApiError(error)
        }

        if(updatedUser !== null){
            storageSave(STORAGE_KEY_USER, updatedUser);
		    setUser(updatedUser);
        }
    }

    imageTranslate = []
    for (const c in inputText) {
        imageTranslate.push(inputText[c].replace(/[^a-zA-Z\s]/g,""))     
    }


    return(
        <>
            <section id="letter-options" className="translate-input">
                <TranslationInput onTranslation={handleTranslate}/>
            </section>
            <div className="output-translation">
                {imageTranslate.map((c, index) => c == " " ? <h1></h1>: (<TranslationOutput key={index} data={c} />))}
                <p>Translation</p>
            </div>
            {apiError && <p>{ apiError }</p>}
        </>
    )
}
export default withAuth(Translation)