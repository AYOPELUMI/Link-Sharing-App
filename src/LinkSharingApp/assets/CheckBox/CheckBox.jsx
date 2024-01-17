import React, {useState} from 'react'
import "./styles.scss"
export const CheckBox = (props) => {
    const{
        labelFor,
        displayWord,
        name,
        required
    }=props
    const [isChecked, setIsChecked] = useState(false)
    const handleCheck = () => {
        setIsChecked(!isChecked)
    }
  return (
    <>
        <label>
            <input type="radio" checked={isChecked} required={required} name={name}/>
            <span className="wrapper" onClick={handleCheck}>
                {displayWord}
            </span >
        </label>
    </>
  )
}
