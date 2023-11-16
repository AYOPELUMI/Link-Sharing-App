import React from 'react'
import { Input } from '../assets/Input/Input'

export const UserProfile = () => {
  return (
    <div className='userProfileCtnr'>
    <div className='header'>
        <h3>
            Profile Details
        </h3>
        <p>Add your detals to create a personal touch to your profile</p>
    </div>
    <form className='userForm'>
        <Input type/>
        <Input
            labelFor="First Name"
            required={true}
            type="text"
        />
        <Input
            type="text"
            labelFor="Last Name"
            required={true}
        />
        <Input
            type="email"
            labelFor="Email"
        />
    </form>
    </div>
  )
}
