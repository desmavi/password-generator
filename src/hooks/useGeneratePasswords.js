import React, {useState, useEffect} from 'react';
import charactersData from '../charactersData.js'

export default function useGeneratePasswords() {
    const PASSWORD_LENGTH = 12
    const PASSWORD_QUANTITY = 4
    const [passwordPlaceholders, setPlaceholder] = useState([])
    const [allChars, setChars] = useState(charactersData);
    const [passwords, setPasswords] = useState([])
    const [alreadyGenereted, setGeneration] = useState(false)

    useEffect(() => {
        for(let i = 0; i < PASSWORD_QUANTITY; i++) {
            setPlaceholder( prev => [...prev, <input readOnly key={i} className="input-field" type="text" value="..." />]) 
        }     
    }, [])
        
    function generatePassword(){
        for (let a = 0; a < PASSWORD_QUANTITY; a++){
            let word = ""
            for(let i = 0; i < PASSWORD_LENGTH; i++){
                let index = Math.floor(allChars.length * Math.random())
                word = word + allChars[index]
            }
        setPasswords(prev => [...prev, word])
        }
    }
    
    function setPasswordArray() {
        if(alreadyGenereted){
            setPasswords([])
            generatePassword()
        } else {
            setGeneration(true)
            generatePassword()
        }
    }
        
    return {
        passwords,
        setPasswordArray,
        passwordPlaceholders
    }
    
}