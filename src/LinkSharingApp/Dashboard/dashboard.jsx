import React, { useContext,useState } from 'react'
import { Header } from '../assets/Header/header'
import { UserLink } from '../userLink/userLink'
import { MobilePreview } from '../assets/MobilePreview/MobilePreview'
import { UserContext } from '../assets/profileDetails/ProfileDetails'
import {UserProfile} from "../UserProfile/UserProfile"
import "./dashboard.scss"
import "./dashboardReponsive.scss"
import { Button } from '../assets/Button/Button'
export function Dashboard(props) {
    const{user, setUser} =useContext(UserContext)
    const [profile, setProfile] = useState({});
    console.log({user})

    const submitUserProfileDetails = (args) => {
        setProfile(args)
    }
    const updateUser = () => {
        const userClone ={...user}

        userClone.profile =profile
        setUser(userClone)
    }

    return (
        <>
            <Header />
            <div className='dashboardCtnr'> 
            <MobilePreview/>
            {
                user.showLink? 
                <UserLink /> :
                <UserProfile submitUserProfileDetails={submitUserProfileDetails}/>
            }
            </div>
            <div className='footerDiv'>
                <Button type="button" className="saveBtn" displayWord="save" onClick={updateUser}/>
            </div>
        </>
    )
}
