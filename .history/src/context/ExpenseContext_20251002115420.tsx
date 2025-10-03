import api from "@/api/axios";
import { createContext, type ReactNode } from "react";
export interface ExpenseForm {
  amount: string;
  category: string;
  date: Date;
  description: string;
}

export interface ExpenseContextType {
  addExpense: (form: ExpenseForm) => Promise<void>;
}

const ExpenseContext = createContext<ExpenseContextType | null>(null);
const ExpenseProvider = ({ children }: { children: ReactNode }) => {
  const addExpense = async (form: ExpenseForm) => {
    try {
      const res = await api.post("/api/expense", form);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ExpenseContext.Provider value={{ addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
export {ExpenseContext};