import React, { useContext,useState } from 'react'
import { Header } from '../assets/Header/header'
import { UserLink } from '../userLink/userLink'
import { MobilePreview } from '../assets/MobilePreview/MobilePreview'
import { UserContext } from '../assets/profileDetails/ProfileDetails'
import {UserProfile} from "../UserProfile/UserProfile"
import "./dashboard.scss"
import "./dashboardReponsive.scss"
import { Button } from '../assets/Button/Button'
import { PreviewPage } from '../PreviewPage/PreviewPage'
export function Dashboard(props) {
    const{user, setUser} =useContext(UserContext)
    const [profile, setProfile] = useState({});
    const [link, setLink] = useState([]);
    console.log({user})

    const submitUserProfileDetails = (args) => {
        setProfile(args)
    }
    const submitUserLinkDetails = (args) => {
        setLink(args)
    }
    const updateUser = () => {
        const userClone ={...user}
        if (profile) {
            userClone.profile =profile
           
        }
        if (link) {
            userClone.linkArray = link
        }
        setUser(userClone)
    }

    return (
        <>{
            user.showPreviewPage ? <PreviewPage / >
        :<>
            <Header />
            <div className='dashboardCtnr'> 
            <MobilePreview/>
            {
                user.showLink? 
                <UserLink submitUserLinkDetails={submitUserLinkDetails}/> :
                <UserProfile submitUserProfileDetails={submitUserProfileDetails}/>
            }
            </div>
            <div className='footerDiv'>
                <Button type="button" className="saveBtn" displayWord="Save" onClick={updateUser}/>
            </div>
        </>
        }
        </>
    )
}
