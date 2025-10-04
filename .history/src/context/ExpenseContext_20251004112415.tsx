import api from "@/api/axios";
import { createContext, type ReactNode } from "react";

export interface ExpenseForm {
  amount: number;
  category: string;
  date: Date;
  description: string;
}

export interface Expense {
  _id?: string;
  user?: string;
  amount: number;
  category: string;
  date: string;
  description: string;
}

export interface ExpenseContextType {
  addExpense: (form: ExpenseForm) => Promise<Expense | null>;
  expenseList: () => Promise<Expense[]>;
}

const ExpenseContext = createContext<ExpenseContextType | null>(null);

export default function ExpenseProvider({ children }: { children: ReactNode }) {
  const addExpense = async (form: ExpenseForm): Promise<Expense | null> => {
    try {
      const res = await api.post("/api/expense/add", form);
      return res.data; // returned expense
    } catch (error) {
      console.log(error);
      return null; // always return something
    }
  };

  const expenseList = async (): Promise<Expense[]> => {
    try {
      const res = await api.get("/api/expense/list");
      return res.data.data || []; // ensure it always returns an array
    } catch (error) {
      console.log(error);
      return []; // fallback
    }
  };

  return (
    <ExpenseContext.Provider value={{ addExpense, expenseList }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export { ExpenseContext };
