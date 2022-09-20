import { useState, useEffect } from 'react'
import {useForm} from 'react-hook-form'
import{loginUser} from '../../api/user'
import { storageSave } from '../../utils/storage'
import {useNavigate} from 'react-router-dom'
import { UseUser } from '../../context/UserContext'
import { STORAGE_KEY_USER } from '../../const/storageKeys'

const usernameConfig = {
    required: true,
    minLength: 3
}
const LoginForm = () =>{
    const {register, handleSubmit, formState: {errors}} = useForm()
    const {user, setUser} = UseUser()
    const navigate = useNavigate()

    //Local State
    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null)

    //Side effects
    useEffect(() => {
        if(user !==null){
            navigate('translation')
        }
    }, [user, navigate]) //Empty means only run 1 time

    //Event Handlers
    const onSubmit = async ({username}) =>{
        setLoading(true)
        const [error, userResponse] = await loginUser(username)
        if(error !== null){
            setApiError(error)
        }
        if(userResponse !== null){
            storageSave(STORAGE_KEY_USER, userResponse)
            setUser(userResponse)
        }
        setLoading(false)
    }

    //Render Functions
    const errorMessage = (() =>{
        if(!errors.username){
            return null
        }

        if(errors.username.type === 'required'){
            return <span className='error-msg'>Username is required!</span>
        }

        if(errors.username.type === 'minLength'){
            return <span className='error-msg'>Minimum length of 3 required!</span>
        }
    })()
    return(
        <>
            <form className='login-form' onSubmit={ handleSubmit(onSubmit) }>
                <fieldset className='fieldset-login'>
                    <input className='input-name' type="text" 
                    placeholder='⌨️️ | Whats your name?'
                    {...register("username", usernameConfig)} />
                    <button className='login-btn' type='submit' disabled={loading}>➜</button>
                {errorMessage}
                </fieldset>
                

                {loading && <p>Logging in...</p>}
                {apiError && <p>{ apiError }</p>}
            </form>
        </>
    )
}
export default LoginForm