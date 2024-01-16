import React, {useState} from 'react'
import {NavLink} from "react-router-dom"
import { FormInput } from '../assets/FormInput/FormInput'
import { Button } from '../assets/Button/Button'
import toast, { Toaster } from 'react-hot-toast'
import "./styles.scss"

export const SignUp = () => {

  const [userDetails, setUserDetails] = useState({password:"",confirmPassword: ""})
  function getUserDetails (nameValue,value) {

      setUserDetails({
        ...userDetails,
        [nameValue] : value
      })
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
  const handlePhoneNumber = (e) => {
    let value = e.target.value
    let numberValue =Number(value)
    console.log({numberValue})
    if(numberValue){
      getUserDetails("phoneNumber",value)
    }
    else{
      getUserDetails("phoneNumber","")
    }
  }
  const handleDoB = (e) => {
    let value = e.target.value
    getUserDetails("dob",value)
  }
  const handlePassword = (e) =>{
    let value = e.target.value
    getUserDetails("password",value)
  }
  const handleConfimPassword = (e) =>{
    let value = e.target.value
    getUserDetails("confirmPassword",value)
  }



	const handlePasswordValidity = () =>{
    event.preventDefault()
    let password = userDetails.password
    let confirmPassword = userDetails.confirmPassword

		if (password == "") {
      toast.error("Please enter your password")
			console.log("i am in the of statement")
			// setPasswordErrorMsg("Please enter your password")
		}
		if (confirmPassword == "") {
      toast.error("confirm your password")
			// setConfirmPasswordErrorMsg("confirm your password")
			return
		}

		if (password != confirmPassword){
      toast.error("password does not conform")
			// setConfirmPasswordErrorMsg("password don't not conform ")
			// setConfirmPasswordValidity(true)
		}
	}

  return (
    <>
        <div className='signMainCtnr'>
          <Toaster/>
            <div className='displayComp'>

            </div>
            <div className="signUpComp">
              <header>Welcome</header>
              <div className="externalSignUp">
                {/* <NavLink>sign up with Google</NavLink>
                <NavLink>Sign Up eith facebook</NavLink> */}
              </div>
              <form onSubmit = {handlePasswordValidity}>
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
                  type="date"
                  placeHolder="Date of Birth"
                  onChange={handleDoB}
                  value={userDetails.dob}
                />
                <FormInput 
                  type="text"
                  inputMode="decimal"
                  placeHolder="Phone Number"
                  onChange={handlePhoneNumber}
                  value={userDetails.phoneNumber}
                />
                <div className="passwordCntr">
                  <FormInput 
                    type="password" 
                    placeHolder ="password"
                    onChange={handlePassword}
                    value={userDetails.password}
                  />
                  <Button className={/[A-Z]/.test(userDetails.password) ? "active" : null }displayWord ="1 Capital Letter" disabled={true}/>
                  <Button className={/[a-z]/.test(userDetails.password)? "active" : null } displayWord="1 Small Latter" disabled={true} />
                  <Button className={/[0-9]/.test(userDetails.password) ? "active" : null } displayWord="1 Numeric" disabled={true} />
                  <Button className={/[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/.test(userDetails.password) ? "active" : null } displayWord="1 Special Character" disabled={true} />
                  <Button className={userDetails.password.length>=8 ? "active" : null } displayWord="minimum of 8" disabled={true} />
                </div>

                <div  className="passwordCntr">
                <FormInput 
                    type="password" 
                    placeHolder ="confirm password"
                    onChange={handleConfimPassword}
                    value={userDetails.confirmPassword}
                    />
                    <Button className={/[A-Z]/.test(userDetails.confirmPassword) ? "active" : null }displayWord ="1 Capital Letter" disabled={true}/>
                    <Button className={/[a-z]/.test(userDetails.confirmPassword) ? "active" : null } displayWord="1 Small Latter" disabled={true} />
                    <Button className={/[0-9]/.test(userDetails.confirmPassword) ? "active" : null } displayWord="1 Numeric" disabled={true} />
                    <Button className={/[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/.test(userDetails.confirmPassword) ? "active" : null } displayWord="1 Special Character" disabled={true} />
                    <Button className={userDetails.confirmPassword.length >= 8 ? "active" : null } displayWord="minimum of 8" disabled={true} />
                </div>

                 <span>
                {/*Already have an account <NavLink>{"Log in"}</NavLink> */}
                </span>
                <Button type="submit" displayWord="Sign Up"/>
              </form>

            </div>
        </div> 
    </>
  )
}

