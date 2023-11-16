import { useState, createContext, useMemo } from "react";
import ReactDOM from "react-dom/client";

 export const UserContext = createContext({
    user:{},
    setUser : () => {},
});

export const ProfileDetails = (props) => {
    const [user, setUser] = useState({linkArray:[]})

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
