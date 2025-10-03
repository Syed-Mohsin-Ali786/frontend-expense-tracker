import api from "@/api/axios";
import { createContext, type ReactNode } from "react";
import { useNavigate } from "react-router";
export interface ExpenseForm {
  amount: number;
  category: string;
  date: Date;
  description: string;
}

export interface ExpenseContextType {
  addExpense: (form: ExpenseForm) => Promise<void>;
}

const ExpenseContext = createContext<ExpenseContextType | null>(null);
const ExpenseProvider = ({ children }: { children: ReactNode }) => {
  const navigate=useNavigate()
  const addExpense = async (form: ExpenseForm) => {
    try {
      const res = await api.post("/api/expense/add", form);
      navigate('/')
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