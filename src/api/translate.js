import {createHeaders} from './index'
const apiUrl = process.env.REACT_APP_API_URL

export const createTranslation = async (user, translation) =>{
    try{
        const response = await fetch(`${apiUrl}/${user.id}`, {
            method: 'PATCH', 
            headers: createHeaders(),
            body: JSON.stringify({
                translations: [...user.translations, translation]
            })
        })
        if(!response.ok){
            throw new Error('Could not update translations')
        }
        const data = await response.json()
        return [ null, data ]
    }
    catch(error){
        return [error.message, null ]
    }
}

export const clearTranslation = async (userId) =>{
    try{
        const response = await fetch(`${apiUrl}/${userId}`, {
            method: 'PATCH', 
            headers: createHeaders(),
            body: JSON.stringify({
                translations: []
            })
        })
        if(!response.ok){
            throw new Error('Could not delete translations')
        }
        const data = await response.json()
        return [ null, data ]
    }
    catch(error){
        return [error.message, null ]
    }
}
