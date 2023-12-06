import React, { useContext, useEffect, useState } from 'react'
import "./LinkOptions.scss"
import "./LinkOptionsReponsive.scss"
import {    UserContext} from "../profileDetails/ProfileDetails"
import { TbBrandGithubFilled } from "react-icons/tb";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io"
import { RiFacebookFill, RiLinkedinFill, RiTwitterFill, RiWhatsappFill, RiYoutubeFill,  } from "react-icons/ri";
import { Button } from '../Button/Button'

export function LinkOptions(props) {
    const {
        propsIndex,
      listArray,
        UpdatingIndex
    } = props
    
    const [showOptions, setShowOptions] = useState(false)
    // const [value, setValue] = useState(null);
    const [index, setIndex] = useState(0)
    const [linkObject, setLinkObject] = useState({})
    const {user,setUser} = useContext(UserContext)
    const [iconIndex, setIconIndex] = useState(0)
    
    let userClone ={...user}
    console.log({user})
    console.log({listArray})
    console.log({linkObject})
    // console.log({value},{propsIndex})
    console.log({index})
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


    useEffect(() => {
if (userClone.linkArray.length != 0)
{        let userClone = [...listArray]
        console.log({userClone})
        console.log({linkObject})
        let indexToUpdate = listArray.findIndex(obj => obj.index == propsIndex)
        console.log(listArray[indexToUpdate])
        setLinkObject(listArray[indexToUpdate])}

    //     userClone.linkArray = userClone.linkArray.push(linkObject)
    //     setUser(userClone) 
    },[user])
    const handleShowOptions = () => {
        event.preventDefault()
        console.log({showOptions})
        setShowOptions(!showOptions) 
    }
    const handleSelectValue = () => {
        event.preventDefault()
        event.stopPropagation()
        // let newIndex = listArray.findIndex(obj => obj.index == propsIndex)
       let iconIndex = 0 

        for (var i = 0; i < listOptions.length; i++) {
            console.log({userClone})
            console.log(listOptions[i])
             if(linkObject.value ==listOptions[i].name){
                console.log({i})
                iconIndex = i
                break;
             }
        }
        // console.log({newIndex})
        console.log({iconIndex})
        setIconIndex(iconIndex)
        let value =event.target.getAttribute("value")
        let index = Number(event.target.getAttribute("index"))
      
        
        console.log({value})
        // console.log({newIndex})
        // setValue(value)
        // setIndex()
        let linkObjectClone ={}
        linkObjectClone.value = value
        linkObjectClone.valueIndex = index
        linkObjectClone.index =propsIndex
        // linkObjectClone.icon = listOptions[index].icon
        linkObjectClone.link= listOptions[index].link
        setLinkObject(linkObjectClone)
        console.log({linkObjectClone})
        console.log({propsIndex})
        UpdatingIndex(propsIndex,linkObjectClone)
    }
    // console.log({user})

    return (
        <div className="linkMainCtnr" >
            <span>Plaform</span>
            <Button 
                className="selectBtn" 
                onClick={handleShowOptions}
                
                displayWord={linkObject.value != undefined?
                    <>
                        {linkObject.value != null ? listOptions[linkObject.valueIndex].icon : null}
                        <span>{linkObject.value}</span>
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
