import { createContext, type ReactNode } from "react";
export interface ExpenseContextType {
    post:(form:
        {
            amount:string,
            
        }

    )
}
const ExpenseContext=createContext<ExpenseContextType>()
const ExpenseProvider=({children}:{children:ReactNode})=>{
return(
    <ExpenseProvider>
        {children}
    </ExpenseProvider>
)
}

export default ExpenseProvider;