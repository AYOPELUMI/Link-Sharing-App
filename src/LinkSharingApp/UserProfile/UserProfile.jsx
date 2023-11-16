import React, { useState } from 'react'
import { Input } from '../assets/Input/Input'
import "./UserProfile.scss"

export const UserProfile = () => {
        const [data, setData] = useState({})
        console.log({data})
    const onImageChange = event => {
        
          let reader = new FileReader();
          let file = event.target.files[0];
          console.log(event.target.files[0])
          reader.onloadend = () => {
            setData({
              ...data,
              imagePreview: reader.result,
              file: file
            });
          };
          reader.readAsDataURL(file);
        }

      const submitForm = form => {
        form.preventDefault();
        // const formData = new FormData();
        // formData.append("image", mydata.file);
        // // for (var pair of formData.entries()) {
        // //   console.log(pair[1]);
        // // }
        // const config = {
        //   headers: {
        //     "content-type": "multipart/form-data"
        //   }
        // };
        // axios
        //   .post("api/profile/upload", formData, config)
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
            spanBg={data.imagePreview}
            labelClassName="labelImage"
        />
        <Input
            labelFor="First Name"
            required={true}
            type="text"
        />
        <Input
            type="text"
            labelFor="Last Name"
            required={true}
        />
        <Input
            type="email"
            labelFor="Email"
        />
    </form>
    </div>
  )
}
