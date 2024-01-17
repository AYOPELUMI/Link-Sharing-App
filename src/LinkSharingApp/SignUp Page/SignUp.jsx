import React, {useState} from 'react'
import {NavLink} from "react-router-dom"
import { FormInput } from '../assets/FormInput/FormInput'
import { Button } from '../assets/Button/Button'
import toast, { Toaster } from 'react-hot-toast'
import "./styles.scss"
import { CheckBox } from '../assets/CheckBox/CheckBox'

export const SignUp = () => {

  const [userDetails, setUserDetails] = useState({password:"",confirmPassword: ""})
  
  function getUserDetails (nameValue,value) {

      setUserDetails({
        ...userDetails,
        [nameValue] : value
      })
  }

  function IsAllPresent(str) {
		let pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*,.?]).+$")

		if (pattern.test(str)) {
			return false
		}
		else{
			return true
		}
	}
  const handleFullName = (e) =>{
    let value = e.target.value
    getUserDetails("fullName",value)
  }
  const handleUserName =(e) =>{
    let value = e.target.value
    getUserDetails("userName",value)
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

    if(password !="" || confirmPassword != ""){	

      if (password != confirmPassword){
        toast.error("password does not conform")
        // setConfirmPasswordErrorMsg("password don't not conform ")
        // setConfirmPasswordValidity(true)
        return
      }
      if(IsAllPresent(password) && IsAllPresent(confirmPassword)){
          console.log(true)
      }
    }
    else{
      console.log(false)
      toast.error("choose a gender please")
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
              <form action="" onSubmit = {handlePasswordValidity}>
                <FormInput 
                  type="text" 
                  placeHolder="Full Name"
                  onChange={handleFullName}
                  value ={userDetails.fullName} 
                  required={true}
                />
                <FormInput 
                  type="text" 
                  placeHolder="username"
                  onChange={handleUserName}
                  value ={userDetails.userName} 
                  required={true}
                />
                
                <FormInput 
                  type="email" 
                  placeHolder = "Email Address"
                  onChange={handleEmail}
                  value={userDetails.email}
                  required={true}
                />
                <FormInput
                  type="date"
                  placeHolder="Date of Birth"
                  onChange={handleDoB}
                  value={userDetails.dob}
                  required={true}
                />
                <FormInput 
                  type="text"
                  inputMode="numeric"
                  placeHolder="Phone Number"
                  onChange={handlePhoneNumber}
                  value={userDetails.phoneNumber}
                  required={true}
                />
                <label className='genderLabel' >
                  <span>Gender</span>
                  <CheckBox name="gender" displayWord="Male" required={true}/>
                  <CheckBox displayWord="Female" name="gender" required={true}/>
                </label>
                <div className="passwordCntr">
                  <FormInput 
                    type="password" 
                    placeHolder ="password"
                    onChange={handlePassword}
                    value={userDetails.password}
                    required={true}
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
                    required={true}
                    />
                    <Button className={/[A-Z]/.test(userDetails.confirmPassword) ? "active" : null }displayWord ="1 Capital Letter" disabled={true}/>
                    <Button className={/[a-z]/.test(userDetails.confirmPassword) ? "active" : null } displayWord="1 Small Latter" disabled={true} />
                    <Button className={/[0-9]/.test(userDetails.confirmPassword) ? "active" : null } displayWord="1 Numeric" disabled={true} />
                    <Button className={/[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/.test(userDetails.confirmPassword) ? "active" : null } displayWord="1 Special Character" disabled={true} />
                    <Button className={userDetails.confirmPassword.length >= 8 ? "active" : null } displayWord="minimum of 8" disabled={true} />
                </div>



                 {/* <span>
                {/*Already have an account <NavLink>{"Log in"}</NavLink> 
                </span> */}
                <Button type="submit" className="submitBtn" displayWord="Sign Up"/>
              </form>

            </div>
        </div> 
    </>
  )
}

