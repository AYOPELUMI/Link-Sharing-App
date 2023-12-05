import React, { useContext, useEffect } from 'react'
import "./MobilePreview.scss"
import "./MobilePreviewReponsive.scss"
import { Button } from '../Button/Button'
import { UserContext } from '../profileDetails/ProfileDetails'
import { RiArrowRightFill } from "react-icons/ri";
import { RiFacebookFill, RiLinkedinFill, RiTwitterFill, RiWhatsappFill, RiYoutubeFill,  } from "react-icons/ri";
import { TbBrandGithubFilled } from "react-icons/tb";

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


export function MobilePreview(props) {

    function Capitalize(str){
        return str.charAt(0).toLowerCase() + str.slice(1);
    }
    
    const {user, setUser} = useContext(UserContext)
    console.log({user})
    let displayBtnArr =[]
    let btnArr =user.linkArray
    for (let i = 0; i < btnArr.length; i++) {
        const element = btnArr[i];
        console.log(element)
        displayBtnArr.push(element)
    } 
    return (
        <>
            <section className="mobileView">
                <div className='phoneOuterCase'>
                    <div className='phoneInnerCase'>
                        <div className='mobileFrontCamera'>

                        </div>
                        <div className="mobileScreen">
                            <div className='mainScreen'>
                                <div className='profilePic' style={{
                                    backgroundImage : user.profile.imagePreview ? "url("+user.profile.imagePreview+")" : undefined
                                }}>
                                </div>
                            <div className='proflieCtnr'>
                                    <span className='profileName'>{user.profile.FirstName} {user.profile.LastName}</span>
                                    <span className='profileUserName'>{user.profile.Email}</span>
                                </div>
                                <div className='linkCtnr'>
                                    {displayBtnArr.map((item, index) =>(
                                        <Button 
                                            type="button" 
                                            key={item.value ? item.value+index+"Btn" : item.index} 
                                            className={item.value ? Capitalize(item.value)+"Btn": null}
                                            disabled ={item.value ? false:true}
                                            displayWord={item.valueIndex ? <>{listOptions[item.valueIndex].icon} <span>{item.value}</span> <RiArrowRightFill /></>:null}
                                        />
                                    ) )}
                                </div>
                            </div> 
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
