import React, { useContext } from 'react'
import { Button } from '../assets/Button/Button'
import { LinkOptions } from '../assets/Options/LinkOptions'
import {Input} from "../assets/Input/Input"
import { GoLink } from "react-icons/go";
import { IoReorderTwo } from "react-icons/io5";
import { UserContext } from '../assets/profileDetails/ProfileDetails';
import "./CreatedLink.scss"
export function CreatedLink(props) {
    const {
        index
    } = props
    console.log({index})
    const {user, setUser} = useContext(UserContext)
    const removeCreatedLink = () => {
        let userClone = {...user}

        let indexToDelete = userClone.linkArray.findIndex(obj => obj.index == index)
        console.log({indexToDelete})

        userClone.linkArray.splice(indexToDelete,1)

        setUser(userClone)
    }

    return (
        <>
            <div className='linkCtnr'>
                <header>
                    <span> <IoReorderTwo/>#Link {index + 1}</span>
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
