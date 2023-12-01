import React, { useContext,useState, useEffect } from 'react'
import { Button } from '../assets/Button/Button'
import { LinkOptions } from '../assets/Options/LinkOptions'
import {Input} from "../assets/Input/Input"
import { GoLink } from "react-icons/go";
import { IoReorderTwo } from "react-icons/io5";
import { UserContext } from '../assets/profileDetails/ProfileDetails';
import "./CreatedLink.scss"

export function CreatedLink(props) {
    const {
        index,
        displayIndex
    } = props

    console.log({index})
    const {user, setUser} = useContext(UserContext)
    const [linkObject, setLinkObject] = useState({});
    console.log({user})
    console.log({linkObject})



    const removeCreatedLink = () => {
        console.log({user})
        let userClone = {...user}
        console.log({userClone})
        // userClone = JSON.stringify(userClone)
        // console.log(userClone)
        // userClone = JSON.parse(userClone)
        console.log({userClone})
        let indexToDelete = userClone.linkArray.findIndex(obj => obj.index == index)
        console.log({indexToDelete})
        userClone.linkArray.splice(indexToDelete,1)
        setUser(userClone)
    }

    return (
        <>
            <div className='linkCtnr'>
                <header>
                    <span> <IoReorderTwo/>#Link {displayIndex + 1}</span>
                    <Button type="button" className="removeBtn" onClick={removeCreatedLink} displayWord="Remove" />
                </header>
                <div className='createLinkDiv'>
                    <LinkOptions  propsIndex ={index}/>
                    <Input 
                        labelFor={"Link"}
                        placeHolder={<GoLink />}
                        disabled={true}
                    />
                </div>
            </div>
        </>
    )
}
