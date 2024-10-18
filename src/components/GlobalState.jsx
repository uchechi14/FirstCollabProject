import { createContext, useState } from "react"


export const GlobalContext = createContext()

export const GlobalState = ({children}) => {


    const [open, setOpen] = useState(false)

    const handleToggle = () =>{
        setOpen(!open)
    }
    console.log(open)
    

  return (
    <GlobalContext.Provider value = {{open, handleToggle}}>
            {children}
    </GlobalContext.Provider>
  )
}
