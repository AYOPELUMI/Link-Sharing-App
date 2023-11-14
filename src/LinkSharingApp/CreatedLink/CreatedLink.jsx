import React from 'react'
import { Button } from '../assets/Button/Button'
import { LinkOptions } from '../assets/Options/LinkOptions'
import {Input} from "../assets/Input/Input"
import "./CreatedLink.scss"
export function CreatedLink(props) {
    

    return (
        <>
            <div className='linkCtnr'>
                <header>Link 1
                    <span>Link 1</span>
                    <Button propsType="button" propsClassName="removeBtn" />
                </header>
                <div className='createLinkDiv'>
                    <label>
                        <span>
                            Platform
                        </span>
                        <LinkOptions />
                    </label>
                    <Input />

                </div>
            </div>
        </>
    )
}
