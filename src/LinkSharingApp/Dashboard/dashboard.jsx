import React from 'react'
import { Header } from '../assets/Header/header'
import { UserLink } from '../userLink/userLink'
import { MobilePreview } from '../assets/MobilePreview/MobilePreview'
import "./dashboard.scss"
export function Dashboard(props) {
    

    return (
        <>
            <Header />
            <div className='dashboardCtnr'> 
            <MobilePreview/>
                <UserLink />
            </div>
        </>
    )
}
