import { createContext, ReactNode } from "react";

const AuthContext=createContext();

const AuthProvider=({children}: {children: ReactNode})=>{

    const signUp=()=>{

    }


    return(
        <AuthContext.Provider value={
            {
                signUp
            }
        }>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;