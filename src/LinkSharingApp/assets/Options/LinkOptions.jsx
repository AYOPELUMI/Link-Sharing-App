import React, { useContext, useEffect, useState } from 'react'
import "./LinkOptions.scss"
import {    UserContext} from "../profileDetails/ProfileDetails"
import { TbBrandGithubFilled } from "react-icons/tb";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io"
import { RiFacebookFill, RiLinkedinFill, RiTwitterFill, RiWhatsappFill, RiYoutubeFill } from "react-icons/ri";
import { Button } from '../Button/Button'

export function LinkOptions(props) {
    const {
        propsIndex
    } = props
    const [showOptions, setShowOptions] = useState(false)
    const [value, setValue] = useState('');
    const [index, setIndex] = useState(0)
    const [linkObject, setLinkObject] = useState([])
    const {user,setUser} = useContext(UserContext)
    let userClone ={...user}
    console.log({user})
    console.log({propsIndex})
    const listOptions =[
        {
            name:"GitHub",
            icon: <TbBrandGithubFilled />
        },
        {
            name:"Facebook",
            icon:<RiFacebookFill />
        },
        {
            name:"LinkedIn",
            icon: <RiLinkedinFill />
        },
        {
            name:"Twitter",
            icon: <RiTwitterFill />
        },
        {   
            name:"WhatsApp",
            icon: <RiWhatsappFill />
        },
        {
            name:"YouTube",
            icon: <RiYoutubeFill />
        }
]

// useEffect(() => {
//     let newIndex = userClone.linkArray.findIndex(obj => obj.valueIndex == index)
//     setIndex(newIndex)
//     console.log({newIndex})
// }, [user])


    // useEffect(() => {
    //     let userClone = {...user}
    //     console.log({userClone})
    //     console.log({linkObject})
    //     userClone.linkArray = userClone.linkArray.push(linkObject)
    //     setUser(userClone) 
    // },[linkObject])
    const handleShowOptions = () => {
        event.preventDefault()
        console.log({showOptions})
        setShowOptions(!showOptions) 
    }
    const handleSelectValue = () => {

    let value =event.target.getAttribute("value")
    let index = Number(event.target.getAttribute("index"))
    let newIndex = userClone.linkArray.findIndex(obj => obj.index == propsIndex)
    
        console.log({newIndex})
        setValue(value)
        setIndex(newIndex)
        let linkObjectClone ={...linkObject}
        linkObjectClone.value = value
        linkObjectClone.valueIndex = index
        linkObjectClone.index =propsIndex
        linkObjectClone.icon = listOptions[index].icon
        setLinkObject(linkObjectClone)
    
        console.log({propsIndex})
        userClone.linkArray.splice(newIndex,1,linkObjectClone)
        setUser(userClone)
    }
    return (
        <div className="linkMainCtnr" >
            <span>Plaform</span>
            <Button 
                className="selectBtn" 
                onClick={handleShowOptions}
                value={value}
                displayWord={value ?
                    <>
                        {userClone.linkArray[index].icon}
                        <span>{userClone.linkArray[index].value}</span>
                    </> : 
                    <>
                        {listOptions[index].icon}
                        <span>{listOptions[index].name}</span>
                    </>
                }
                children ={
                    showOptions ? 
                        <>
                            <ul>{listOptions.map((item,index)=>(
                                <li value={item.name} index={index} key={index} onClick={handleSelectValue}>{item.icon}{item.name}</li>
                                    ) )}
                            </ul><IoIosArrowUp className='selectIcon'/>
                        </> : 
                        <IoIosArrowDown />
                }
            />
        </div>
    )
}
