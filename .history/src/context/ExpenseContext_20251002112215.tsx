import { createContext, type ReactNode } from "react";
export interface ExpenseContextType {
  post: (form: {
    amount: string;
    category: string;
    date: Date;
    description: string;
  }) => Promise<void>;
}
const ExpenseContext = createContext<ExpenseContextType>();
const ExpenseProvider = ({ children }: { children: ReactNode }) => {
  return <ExpenseContext.Provider>{children}</ExpenseContext.Provider>;
};

export default ExpenseProvider;
