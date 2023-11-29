import React, { useContext, useEffect, useState } from 'react'
import { Button } from '../assets/Button/Button'
import {RiAddFill} from "react-icons/ri"
import { CreatedLink } from '../CreatedLink/CreatedLink'
import { UserContext } from '../assets/profileDetails/ProfileDetails'
import "./userLink.scss"
import "./userLinkReponsive.scss"
let listArrayClone =[]
export function UserLink() {
  const [listArray, setListArray] = useState([])
  const [index, setIndex] = useState(0)
  const {user, setUser} = useContext(UserContext)

  let userClone = {...user}
  let displayListArray =[]

 const handleCreateLink = () => {
      event.preventDefault()
      event.stopPropagation()
      const userClone = {...user}
      console.log({user})
      console.log(user.linkArray.length)
      user.linkArray.push({"index":index})
      console.log({index})
      listArrayClone.push(index+1)
      setUser(userClone)
      setIndex(index +1)
 }

for (let i = 0; i < user.linkArray.length; i++) {

    const element = <CreatedLink key={"link"+i+1} displayIndex={i} index={userClone.linkArray[i].index} />
    displayListArray.push(element)
  
}

  return (
    <>
        <div className='createLinkContainer'>
          <span>
            <h3>Customize your links</h3>
            <p>Add/edit/remove links below and share your profile with the world</p>
          </span>
          <Button 
            type="button"
            className="addNewLinkBtn"
            displayWord= {<><RiAddFill />Add new Link</>}
            onClick={handleCreateLink}
          />
          {displayListArray}
{/* {          {listArray.map((item,index) => (
            <CreatedLink index={index} key={"Link"+index} />
          ))}} */}
        </div>
    </>
  )
}

