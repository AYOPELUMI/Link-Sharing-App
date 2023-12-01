import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../assets/profileDetails/ProfileDetails'
import { Input } from '../assets/Input/Input'
import "./UserProfile.scss"
import "./UserProfileReponsive.scss"

export const UserProfile = (props) => {
    const{
        submitUserProfileDetails
    } = props
    const [profile, setProfile] = useState({})
    console.log({profile})
    const onImageChange = event => {
        
          let reader = new FileReader();
          let file = event.target.files[0];
          console.log(event.target.files[0])
          reader.onloadend = () => {
			let profileClone ={...profile}
               profileClone.imagePreview  = reader.result,
              profileClone.file= file
			  setProfile(profileClone)
          };
          reader.readAsDataURL(file);
    }
	const onFirstNameChange = () => {
		let profileClone ={...profile}
		// console.log(event.target.value)
		profileClone.FirstName = event.target.value
		setProfile(profileClone)
		console.log(profileClone.FirstName)
	}
	const onLastNameChange = () => {
		let profileClone ={...profile}
		console.log(event.target.value)
		profileClone.LastName = event.target.value
		setProfile(profileClone)
		console.log(profileClone.LastName)
	}
	const onEmailChange = () => {
		let profileClone ={...profile}
		console.log(event.target.value)
		profileClone.Email = event.target.value
		setProfile(profileClone)
		console.log(profileClone.Email)
	}
    useEffect(() => {
        submitUserProfileDetails(profile)
    }, [profile])

	const submitForm = form => {
        form.preventDefault();

        // const formUser = new FormUser();
        // formUser.append("image", myuser.file);
        // // for (var pair of formUser.entries()) {
        // //   console.log(pair[1]);
        // // }
        // const config = {
        //   headers: {
        //     "content-type": "multipart/form-user"
        //   }
        // };
        // axios
        //   .post("api/profile/upload", formUser, config)
        //   .then(response => {
        //     alert("The file is successfully uploaded");
        //   })
        //   .catch(error => {});
	}


  return (
    <div className='userProfileCtnr'>
        <div className='header'>
            <h3>
                Profile Details
            </h3>
            <p>Add your detals to create a personal touch to your profile</p>
        </div>
        <form className='userForm'>
            <Input
                accept="image/*"
                handleChange={onImageChange}
                className="inputImage"
                type="file"
                labelFor="Profile Picture"
                spanBg={profile.imagePreview ? profile.imagePreview : null}
                labelClassName="labelImage"
            />
            <Input
                labelFor="First Name"
                required={true}
                type="text"
                handleChange={onFirstNameChange}
            />
            <Input
                type="text"
                labelFor="Last Name"
                required={true}
                handleChange={onLastNameChange}
            />
            <Input
                type="email"
                labelFor="Email"
                handleChange={onEmailChange}
            />
        </form>
    </div>
  )
}
