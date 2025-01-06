import { useRef } from "react";
import { createContext } from "react"

const FormFocusContext = createContext();

export function FormFocusProvider({children}) {
    
    const formRef = useRef();

    const setFocusForm = () => {
        if(formRef.current) {
            formRef.current.focus();
        }
    }
     
  return (
    <FormFocusContext.Provider value={{formRef, setFocusForm}}>
        {children}
    </FormFocusContext.Provider>
  )
}

export default FormFocusContext;
