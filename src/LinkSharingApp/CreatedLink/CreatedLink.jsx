import React, { useContext,useState, useEffect } from 'react'
import { Button } from '../assets/Button/Button'
import { LinkOptions } from '../assets/Options/LinkOptions'
import {Input} from "../assets/Input/Input"
import { GoLink } from "react-icons/go";
import { IoReorderTwo } from "react-icons/io5";
import { UserContext } from '../assets/profileDetails/ProfileDetails';
import "./CreatedLink.scss"
import "./CreatedLinkReponsive.scss"

export function CreatedLink(props) {
    const {
        index,
        displayIndex,
        listArray,
        DeleteIndex,
        UpdatingIndex
    } = props

    // console.log({index})
    const {user, setUser} = useContext(UserContext)
    const [linkObject, setLinkObject] = useState({});
    const [value, setValue] = useState("")

    // console.log({user})
    // console.log({listArray})

    let linkindex = listArray.findIndex(obj => obj.index == index)
    
    // console.log(listArray[linkindex])
    // console.log(listArray[linkindex].value)
    
    const [link,setLink] = useState(listArray[linkindex].link)

    const handleLinkChange = () => {
    
        let value = event.target.value
        console.log({value})
        if (0 == value.search(listArray[linkindex].link)) {

            setValue(value)
        }

    }
    
    console.log({value})
    

    useEffect(() => {
        setValue(listArray[linkindex].link)
        console.log(listArray[linkindex])
    },[listArray])

    console.log({link})
    
    const removeCreatedLink = () => {
        DeleteIndex(index)
    }

    return (
        <>
            <div className='linkCtnr'>
                <header>
                    <span> <IoReorderTwo/>Link #{displayIndex + 1}</span>
                    <Button type="button" className="removeBtn" onClick={removeCreatedLink} displayWord="Remove" />
                </header>
                <div className='createLinkDiv'>
                    <LinkOptions  
                        propsIndex ={index} 
                        UpdatingIndex={UpdatingIndex} 
                        listArray={listArray}
                    />
                    <Input 
                        labelFor={"Link"}
                        placeHolder={<GoLink />}
                        value= {listArray[linkindex].value != null && listArray[linkindex].value != undefined ?value : ""}
                        disabled={false}
                        handleChange={handleLinkChange}
                    />
                </div>
            </div>
        </>
    )
}
