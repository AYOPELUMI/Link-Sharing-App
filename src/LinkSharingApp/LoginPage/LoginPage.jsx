import React, { useState } from 'react'
import { FormInput } from '../assets/FormInput/FormInput'
import { Button } from '../assets/Button/Button'
import toast, { Toaster } from 'react-hot-toast'
import "./styles.scss"
import { CustomFetch } from '../assets/CustomFetch'

export const LoginPage = () => {

    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmailChange = (e) =>{
        let value = e.target.value
        setEmail(value)
    }
    const handlePasswordChange = (e) =>{
        let value = e.target.value
        setPassword(value)
    }

    const handleSubmit =(event) =>{
        event.preventDefault()
        console.log("wassup")

        if(email && password){
            console.log("wassup")
            CustomFetch("/login",{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                   email: email,
                   password: password
                })
            }).then(data => data.json())
            .then((data) =>{
                console.log({data})
                toast.success("login successful")
            })
            .catch( err => {
                console.log({err})
            })
        }
    }

  return (
    <>
      <div className="mainCntr">
      <Toaster />
            <div className='loginComponent'>
                <header>
                    LinkSharing App
                </header>
                <form onSubmit={handleSubmit}>
                    <span>Welcome to Link Sharing App Sign into your account</span>
                    <FormInput 
                        className="formInput" 
                        type="email"
                        placeHolder="email address"
                        onChange={handleEmailChange}
                        value={email}
                    />
                    <FormInput 
                        className="formInput" 
                        placeHolder="Password"
                        type="password"
                        onChange={handlePasswordChange}
                        value={password}
                    />
                    <Button 
                        className="btnLogin" 
                        displayWord="log  in"
                        type="submit"
                    />
                    <a>Frogot Password</a>
                </form>
            </div>
            <div className='displayComponent'>

            </div>
      </div>
    </>
  )
}

