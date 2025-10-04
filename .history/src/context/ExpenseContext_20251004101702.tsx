import api from "@/api/axios";
import { createContext, type ReactNode } from "react";
export interface ExpenseForm {
  amount: number;
  category: string;
  date: Date;
  description: string;
}

export interface ExpenseContextType {
  addExpense: (form: ExpenseForm) => Promise<void>;
  expenseList:()=>Promise<void>;
}

const ExpenseContext = createContext<ExpenseContextType | null>(null);
export default function ExpenseProvider  ({ children }: { children: ReactNode }) {
  const addExpense = async (form: ExpenseForm) => {
    try {
      const res = await api.post("/api/expense/add", form);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const expenseList=async()=>{
try{
  const res=await api.get("/api/expense/list");
  return res.data;
}catch(error){
  console.log(error);
  
}
  }


  return (
    <ExpenseContext.Provider value={{ addExpense,expenseList }}>
      {children}
    </ExpenseContext.Provider>
  );
};


export {ExpenseContext};