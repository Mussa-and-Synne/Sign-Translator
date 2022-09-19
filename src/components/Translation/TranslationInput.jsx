import { useForm } from "react-hook-form"
import { createTranslation } from "../../api/translate"
import { STORAGE_KEY_USER } from "../../const/storageKeys"

const TranslationInput = ({onTranslation}) => {
    const {register, handleSubmit} = useForm()
    
    const onSubmit = ({translateInput}) => {
        onTranslation(translateInput)
        console.log(translateInput)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label htmlFor="translate-input">Translate: </label>
                <input type="text" {...register('translateInput')} placeholder="Translate here" />
            </fieldset>
            <button type="submit">Translate</button>
        </form>
    )
}
export default TranslationInput