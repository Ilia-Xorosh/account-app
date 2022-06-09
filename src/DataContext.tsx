import React, {createContext, FC, ReactNode, useContext, useState} from "react";

type Data = {
    firstname: string
    lastname: string
    email: string
    hasPhone: boolean
    phoneNumber: number
}

/*interface ProviderProps< > {
    value: ;
    children?: ReactNode | undefined;
}*/

// @ts-ignore
const DataContext = createContext()

export const DataProvider = ({children}: any) => {
    const [data, setData] = useState({})
    const setValues = (values: any) => {
        setData((prevData) => ({
            ...prevData,
            ...values
        }))
    }
    return (
    <DataContext.Provider value={{data, setValues}}>{children}</DataContext.Provider>
    )
}

export const useDate = () => useContext(DataContext)