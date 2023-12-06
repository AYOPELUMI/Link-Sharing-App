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

    console.log({index})
    const {user, setUser} = useContext(UserContext)
    const [linkObject, setLinkObject] = useState({});
    // console.log({user})
    console.log({listArray})

    let linkindex = listArray.findIndex(obj => obj.index == index)
    console.log(listArray[linkindex])
    
    const removeCreatedLink = () => {
    //     console.log({listArray})
    //    let listArrayClone =[...listArray]
        // console.log({userClone})
        // console.log(JSON.stringify(user))
        // userClone = JSON.stringify(userClone)
        // console.log(userClone)
        // userClone = JSON.parse(userClone)
        // console.log({userClone})

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
                        value= {listArray[linkindex].value ? listArray[linkindex].link+user.profile.FirstName + user.profile.LastName : null}
                        disabled={true}
                    />
                </div>
            </div>
        </>
    )
}
