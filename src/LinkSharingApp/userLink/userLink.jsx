import React, { useContext, useEffect, useState } from 'react'
import { Button } from '../assets/Button/Button'
import {RiAddFill} from "react-icons/ri"
import { CreatedLink } from '../CreatedLink/CreatedLink'
import { UserContext } from '../assets/profileDetails/ProfileDetails'
import "./userLink.scss"
import "./userLinkReponsive.scss"
let listArrayClone =[]
export function UserLink(props) {
  const {
    submitUserLinkDetails
  } = props
  const [index, setIndex] = useState(0)
  const {user, setUser} = useContext(UserContext)
  const [listArray, setListArray] = useState(user.linkArray)

  let userClone = {...user}
  let displayListArray =[]
  useEffect(() => {
    submitUserLinkDetails(listArray)
  }, [listArray])
  const handleCreateLink = () => {
        event.preventDefault()
        event.stopPropagation()
        const listArrayClone = [...listArray]
        console.log({user})
        listArrayClone.push({"index":index})
        console.log({index})
        // listArrayClone.push(index+1)
        console.log({listArrayClone})
        setListArray(listArrayClone)
        setIndex(index +1)
  }
  const DeleteIndex = (args) => {
    let listArrayClone =[...listArray]
    console.log({args})
    let indexToDelete = listArrayClone.findIndex(obj => obj.index == args)
    console.log({indexToDelete})
    listArrayClone.splice(indexToDelete,1)
    displayListArray.splice(indexToDelete,1)
    console.log({displayListArray})
    console.log({listArrayClone})
    setListArray(listArrayClone)
  }

  const UpdatingIndex = (oldDetails,newDetails) => {
    let listArrayClone =[...listArray]
    console.log({oldDetails},{newDetails})
    let newIndex = listArrayClone.findIndex(obj => obj.index == oldDetails)
    listArrayClone.splice(newIndex,1,newDetails)
    console.log({listArrayClone})
    setListArray(listArrayClone)
  }

for (let i = 0; i < listArray.length; i++) {
    const element = <CreatedLink 
                        key={"link"+i+1} 
                        displayIndex={i} 
                        index={listArray[i].index} 
                        DeleteIndex={DeleteIndex}
                        listArray={listArray}
                        UpdatingIndex = {UpdatingIndex}
                    />
    displayListArray.push(element)
}
console.log({listArray})

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
          {/* {displayListArray} */}
        {listArray.map((item,index) => (
            <CreatedLink 
            key={"link"+index+1} 
            displayIndex={index} 
            index={listArray[index].index} 
            DeleteIndex={DeleteIndex}
            listArray={listArray}
            UpdatingIndex = {UpdatingIndex}
        />
          ))}
        </div>
    </>
  )
}

