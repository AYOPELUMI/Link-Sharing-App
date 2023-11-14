import React, { useState } from 'react'
import "./LinkOptions.scss"
import { Button } from '../Button/Button'

export function LinkOptions(props) {
    const [showOptions, setShowOptions] = useState(false)

    const handleShowOptions = () => {
        event.preventDefault()
        console.log({showOptions})
        setShowOptions(!showOptions) 
    }

    return (
        <div className="linkMainCtnr"  onClick={handleShowOptions}>
            {showOptions ? <ul className='optionCtnr'>
                    <li  >GitHub</li>
                    <li >LinkedIn</li>
                    <li >YouTube</li>
                    <li  >WhatsApp</li>
                    <li  >Twitter</li>
                    <li  >Facebook</li>

                </ul> :         <Button 
            propsClassName='linkBtn' 
           
            displayWord={showOptions? null :"GitHub"}  
        />}
        </div>

    )
}
