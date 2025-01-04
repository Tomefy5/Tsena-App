import { createContext, useState } from "react";

const FormTypeContext = createContext();

export function FormTypeProvider({ children }) {
  const [formType, setFormType] = useState("editProd");

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
