import { createContext, type ReactNode } from "react";
export ExpenseContextType f
const ExpenseContext=createContext<ExpenseContextType>()
const ExpenseProvider=({children}:{children:ReactNode})=>{
return(
    <ExpenseProvider>
        {children}
    </ExpenseProvider>
)
}

export default ExpenseProvider;