import React, { createContext, useState } from 'react'


export const LoginContext = createContext("");

const Context = ({children}) => {

    const [logindata,setLogindata] = useState("");

  return (
    <>
    <LoginContext.Provider value={{logindata,setLogindata}}>
        {children}
    </LoginContext.Provider>
    
    </>
  )
}

export default Context
