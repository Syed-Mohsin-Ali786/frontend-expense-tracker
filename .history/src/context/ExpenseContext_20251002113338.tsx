import { createContext, type ReactNode } from "react";
export interface ExpenseContextType {
  addExpense: (form: {
    amount: string;
    category: string;
    date: Date;
    description: string;
  }) => Promise<void>;
}
const ExpenseContext = createContext<ExpenseContextType|null>(null);
const ExpenseProvider = ({ children }: { children: ReactNode }) => {
    const addExpense=async()=>{
try{
    await api.post()
}
    }
  return <ExpenseContext.Provider value={addExpense}>{children}</ExpenseContext.Provider>;
};

export default ExpenseProvider;
