import React, { useContext, useEffect } from 'react'
import "./MobilePreview.scss"
import "./MobilePreviewReponsive.scss"
import { Button } from '../Button/Button'
import { UserContext } from '../profileDetails/ProfileDetails'
import { RiArrowRightFill } from "react-icons/ri";

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
                            <div className='profilePic' style={{
                                backgroundImage : user.user.imagePreview ? "url("+user.user.imagePreview+")" : undefined
                            }}>
                            </div>
                           <div className='proflieCtnr'>
                                <span className='profileName'>{user.user.FirstName} {user.user.LastName}</span>
                                <span className='profileUserName'>{user.user.Email}</span>
                            </div>
                            <div className='linkCtnr'>
                                {displayBtnArr.map((item, index) =>(
                                    <Button 
                                        type="button" 
                                        key={item.value ? item.value+index+"Btn" : item.index} 
                                        className={item.value ? Capitalize(item.value)+"Btn": null}
                                        disabled ={item.value ? false:true}
                                         displayWord={<>{item.icon} <span>{item.value}</span> <RiArrowRightFill /></>}
                                    />
                                ) )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
