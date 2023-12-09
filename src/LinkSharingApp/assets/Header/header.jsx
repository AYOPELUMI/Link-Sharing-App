import React, {useState, useContext } from 'react'
import "./header.scss"
import "./HeaderReponsive.scss"
import { UserContext } from '../profileDetails/ProfileDetails'
import {PiUserCircleFill} from "react-icons/pi"
import { GoLink } from "react-icons/go";
import { BsEyeFill } from "react-icons/bs"

export function Header(props) {
    const [showLink, setShowLink] = useState(false)
    const {user, setUser} = useContext(UserContext)
    console.log({user})
    let userClone ={...user}
    const handleShowLink = () => {
        setShowLink(true)
        userClone.showLink= true;
        userClone.showProfile = false
        setUser(userClone)
    }
    const handleShowProfile = () => {
        setShowLink(false)
        userClone.showLink= false;
        userClone.showProfile = true;
        setUser(userClone)
    }

    const handleShowPreviewPage = () => {
        userClone.showPreviewPage= true;
        setUser(userClone)
        console.log(userClone)
    }

    return (
        <header>
            <div>
                Logo
            </div>
            <div>
                <a onClick={handleShowLink} className={showLink ? "active" : undefined}><GoLink /><p>Links</p></a>
                <a onClick={handleShowProfile} className={showLink ? undefined : "active"}><PiUserCircleFill /><p>Profile Details</p></a>
            </div>
            <a onClick={handleShowPreviewPage}> <p>Preview</p> <BsEyeFill /></a>
        </header>
    )
}
