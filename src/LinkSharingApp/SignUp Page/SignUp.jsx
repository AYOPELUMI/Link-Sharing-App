import React, {useState} from 'react'
import {NavLink} from "react-router-dom"
import { FormInput } from '../assets/FormInput/FormInput'
import { Button } from '../assets/Button/Button'
import "./styles.scss"

export const SignUp = () => {

  const [userDetails, setUserDetails] = useState({})
  function getUserDetails (nameValue,value) {
    console.log({nameValue})
    // console.log({"n[ameValue"},{value})
let userDetailsClone ={...userDetails}
userDetailsClone.nameValue = value
console.log({userDetailsClone})
      setUserDetails(userDetailsClone)
  }
  const handleFullName = (e) =>{
    let value = e.target.value
    getUserDetails("fullName",value)
  }
  console.log({userDetails})
  const handleEmail = (e) =>{
    let value = e.target.value
    getUserDetails("email",value)
  }
  const handlePassword = (e) =>{
    let value = e.target.value
    getUserDetails("password",value)
  }
  const handleConfimPassword = (e) =>{
    let value = e.target.value
    getUserDetails("confirmPassword",value)
  }
  return (
    <>
        <div className='signMainCtnr'>
            <div className='displayComp'>

            </div>
            <div className="signUpComp">
              <header>Welcome</header>
              <div className="externalSignUp">
                {/* <NavLink>sign up with Google</NavLink>
                <NavLink>Sign Up eith facebook</NavLink> */}
              </div>
              <form>
                <FormInput 
                  type="text" 
                  placeHolder="Full Name"
                  onChange={handleFullName}
                  value ={userDetails.fullName} 
                />
                <FormInput 
                  type="email" 
                  placeHolder = "Email Address"
                  onChange={handleEmail}
                  value={userDetails.email}
                />
                <FormInput 
                  type="password" 
                  placeHolder ="password"
                  onChange={handlePassword}
                  value={userDetails.password}
                />
                <FormInput 
                  type="password" 
                  placeHolder ="confirm password"
                  onChange={handleConfimPassword}
                  value={userDetails.confirmPassword}/>
                 <span>
                {/*Already have an account <NavLink>{"Log in"}</NavLink> */}
                </span>
                <Button displayWord="Sign Up"/>
              </form>

            </div>
        </div> 
    </>
  )
}

