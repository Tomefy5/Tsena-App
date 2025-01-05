import { createContext, useState } from "react";

const FormTypeContext = createContext();

export function FormTypeProvider({ children }) {
  const [formType, setFormType] = useState("createProd");

  const changeFormType = (newType) => {
    setFormType(newType);
  }

  return (
    <FormTypeContext.Provider value={{ formType, changeFormType }}>
      {children}
    </FormTypeContext.Provider>
  );
}

export default FormTypeContext;
