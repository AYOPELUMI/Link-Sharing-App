import { useState, createContext, useMemo } from "react";
import ReactDOM from "react-dom/client";

 export const UserContext = createContext({
    user:{
        linkArray:[],
        user:{
            FirstName:"",
            LastName:"",
            Email:""
        }
    },
    setUser : () => {},
});

export const ProfileDetails = (props) => {
    const [user, setUser] = useState({
        linkArray:[],
        profile:{}
    })

    const value = useMemo(() => (
        {user,setUser}),[user]
        )
    return (
    <UserContext.Provider value={value}>
        {useMemo(() => (
            <>
                {props.children}
            </> 
        ),[])}
  </UserContext.Provider>
  )
}
