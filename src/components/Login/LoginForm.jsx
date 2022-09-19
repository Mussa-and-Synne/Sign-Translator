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
            navigate('profile')
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
            return <span>Username is required!</span>
        }

        if(errors.username.type === 'minLength'){
            return <span>Minimum length of 3 required!</span>
        }
    })()
    return(
        <>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <fieldset>
                    <input type="text" 
                    placeholder='Whats your name?'
                    {...register("username", usernameConfig)} />
                {errorMessage}
                </fieldset>
                <button type='submit' disabled={loading}>Log in</button>

                {loading && <p>Logging in...</p>}
                {apiError && <p>{ apiError }</p>}
            </form>
        </>
    )
}
export default LoginForm