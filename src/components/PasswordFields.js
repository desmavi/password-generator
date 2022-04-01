import React, {useRef} from 'react'

export default function PasswordFields({passwords}){
    const inputRef = useRef([]) 

    function copyPassword(event, input){
        const {target} = event
        target.classList.remove("bi-clipboard")
        target.classList.add("bi-clipboard-check")
        setTimeout(function(){
            target.classList.remove("bi-clipboard-check")
            target.classList.add("bi-clipboard")
        }, 1000)
        
        input.select();
        input.setSelectionRange(0, 99999); /*For mobile devices*/
        document.execCommand("copy");
    }
    
    let passwordsFields = passwords.map((item, i) => {
        return <div id="options" key={i}>
                    <input ref={el => inputRef.current[i] = el} className="input-field" readOnly type="text" value={item}/>
                    <button className="input-field-btn" onClick={(event) => copyPassword(event,inputRef.current[i])}>
                        <i className="bi bi-clipboard"></i>
                    </button>  
                </div> })
    
    return <>{passwordsFields}</>
    
}