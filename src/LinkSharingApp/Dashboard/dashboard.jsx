import React, { useContext } from 'react'
import { Header } from '../assets/Header/header'
import { UserLink } from '../userLink/userLink'
import { MobilePreview } from '../assets/MobilePreview/MobilePreview'
import { UserContext } from '../assets/profileDetails/ProfileDetails'
import {UserProfile} from "../UserProfile/UserProfile"
import "./dashboard.scss"
import "./dashboardReponsive.scss"
import { Button } from '../assets/Button/Button'
export function Dashboard(props) {
    const{user} =useContext(UserContext)
    console.log({user})
    return (
        <>
            <Header />
            <div className='dashboardCtnr'> 
            <MobilePreview/>
            {
                user.showLink? 
                <UserLink /> :
                <UserProfile />
            }
            </div>
            <div className='footerDiv'>
                <Button type="button" className="saveBtn" displayWord="save" />
            </div>
        </>
    )
}
