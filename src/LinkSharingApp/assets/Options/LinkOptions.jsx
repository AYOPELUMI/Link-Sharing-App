import React, { useContext, useEffect, useState } from 'react'
import "./LinkOptions.scss"
import {    UserContext} from "../profileDetails/ProfileDetails"
import { TbBrandGithubFilled } from "react-icons/tb";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io"
import { RiFacebookFill, RiLinkedinFill, RiTwitterFill, RiWhatsappFill, RiYoutubeFill,  } from "react-icons/ri";
import { Button } from '../Button/Button'

export function LinkOptions(props) {
    const {
        propsIndex
    } = props
    
    const [showOptions, setShowOptions] = useState(false)
    const [value, setValue] = useState(null);
    const [index, setIndex] = useState(0)
    const [linkObject, setLinkObject] = useState({})
    const {user,setUser} = useContext(UserContext)
    
    let userClone ={...user}
    console.log({user})
    console.log({value},{propsIndex})
    console.log({propsIndex})
 
    const listOptions =[
        {
            name:"GitHub",
            icon: <TbBrandGithubFilled />,
            link:"www.github.com/"
        },
        {
            name:"Facebook",
            icon:<RiFacebookFill />,
            link:"www.facebook.com/"
        },
        {
            name:"LinkedIn",
            icon: <RiLinkedinFill />,
            link:"www.linkedin.com/"
        },
        {
            name:"Twitter",
            icon: <RiTwitterFill />,
            link:"www.twitter.com/"
        },
        {   
            name:"WhatsApp",
            icon: <RiWhatsappFill />,
            link:"web.whatsapp.com/"
        },
        {
            name:"YouTube",
            icon: <RiYoutubeFill />,
            link:"www.youtube.com/"
        }
    ]
    console.log({listOptions})

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
        let newIndex = userClone.linkArray.findIndex(obj => obj.index == propsIndex)

        let value =event.target.getAttribute("value")
        let index = Number(event.target.getAttribute("index"))
      
        
        console.log({value})
        console.log({newIndex})
        setValue(value)
        setIndex(newIndex)
        let linkObjectClone ={...linkObject}
        linkObjectClone.value = value
        linkObjectClone.valueIndex = index
        linkObjectClone.index =propsIndex
        linkObjectClone.icon = listOptions[index].icon
        linkObjectClone.link= listOptions[index].link
        setLinkObject(linkObjectClone)
    
        console.log({propsIndex})
        userClone.linkArray.splice(newIndex,1,linkObjectClone)
        setUser(userClone)
    }
    console.log({user})

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
                        {listOptions[0].icon}
                        <span>{listOptions[0].name}</span>
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
