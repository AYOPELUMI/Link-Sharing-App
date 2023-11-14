import React from 'react'
import "./MobilePreview.scss"
import { Button } from '../Button/Button'

export function MobilePreview(props) {
    

    return (
        <>
            <section className="mobileView">
                <div className='phoneOuterCase'>
                    <div className='phoneInnerCase'>
                        <div className='mobileFrontCamera'>

                        </div>
                        <div className="mobileScreen">
                            <div className='profilePic'>
                            </div>
                           <div className='proflieCtnr'>
                                <span className='profileName'></span>
                                <span className='profileUserName'></span>
                            </div>
                            <div className='linkCtnr'>
                                <Button propsType="button" propsClassName="gitHubBtn" displayWord="GitHub"/>
                                <Button propsType="button" propsClassName="youTubeBtn" displayWord="YouTube"/>
                                <Button  propsType="button" propsClassName="linkedInBtn" displayWord="LinkedIn"/>
                                <Button  propsType="button" propsDisabled={true}/>
                                <Button  propsType="button" propsDisabled={true}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
