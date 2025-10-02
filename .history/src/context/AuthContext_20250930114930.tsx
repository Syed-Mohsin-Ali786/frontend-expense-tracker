import { createContext } from "react";

const AuthContext=createContext()
const AuthProvider=({children})=>{



const SignUp=async({form:React.FormEvent.<HTMLFormElement>})=>{

}

    return(
        <AuthContext.Provider value={
            {}
        }>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;