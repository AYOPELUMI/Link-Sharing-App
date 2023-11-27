import React, { useContext, useState } from 'react'
import { UserContext } from '../assets/profileDetails/ProfileDetails'
import { Input } from '../assets/Input/Input'
import "./UserProfile.scss"
import "./UserProfileReponsive.scss"

export const UserProfile = () => {
    const {user, setUser} = useContext(UserContext)
    console.log({user})
    const onImageChange = event => {
        
          let reader = new FileReader();
          let file = event.target.files[0];
          console.log(event.target.files[0])
          reader.onloadend = () => {
			let userClone ={...user}
               userClone.user.imagePreview  = reader.result,
              userClone.user.file= file
			  setUser(userClone)
          };
          reader.readAsDataURL(file);
        }

	const onFirstNameChange = () => {
		let userClone ={...user}
		// console.log(event.target.value)
		userClone.user.FirstName = event.target.value
		setUser(userClone)
		console.log(userClone.user.FirstName)
	}

	const onLastNameChange = () => {
		let userClone ={...user}
		console.log(event.target.value)
		userClone.user.LastName = event.target.value
		setUser(userClone)
		console.log(userClone.user.LastName)
	}
	const onEmailChange = () => {
		let userClone ={...user}
		console.log(event.target.value)
		userClone.user.Email = event.target.value
		setUser(userClone)
		console.log(userClone.user.Email)
	}

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
    <form className='userForm'onSubmit={form => submitForm(form)}>
        <Input
            accept="image/*"
            handleChange={onImageChange}
            className="inputImage"
            type="file"
            labelFor="Profile Picture"
            spanBg={user.user.imagePreview ? user.user.imagePreview : null}
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
