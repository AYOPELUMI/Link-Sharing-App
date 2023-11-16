import React, {useState, useContext } from 'react'
import "./header.scss"
import { UserContext } from '../profileDetails/ProfileDetails'
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

    return (
        <header>
            <div>
                Logo
            </div>
            <div>
                <a onClick={handleShowLink} className={showLink ? "active" : undefined}>Links</a>
                <a onClick={handleShowProfile} className={showLink ? undefined : "active"}>Profile Details</a>
            </div>
            <a>Preview</a>
        </header>
    )
}
