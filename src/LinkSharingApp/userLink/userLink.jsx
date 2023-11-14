import React from 'react'
import { Button } from '../assets/Button/Button'
import {RiAddFill} from "react-icons/ri"
import { CreatedLink } from '../CreatedLink/CreatedLink'
import "./userLink.scss"
export function UserLink() {
  return (
    <>
        <div className='createLinkContainer'>
          <span>
            <h3>Customixe your links</h3>
            <p>Add/edit/remove links below and share your profile with the world</p>
          </span>
          <Button 
            propsType="button"
            propsClassName="addNewLinkBtn"
            displayWord= {<RiAddFill />}
          />
          <CreatedLink/>
        </div>
    </>
  )
}

