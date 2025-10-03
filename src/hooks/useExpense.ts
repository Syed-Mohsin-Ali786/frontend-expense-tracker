import { ExpenseContext } from "@/context/ExpenseContext";
import { useContext } from "react";

export const useExpense=()=>{
    const Exp=useContext(ExpenseContext);
    if(!Exp) throw new Error("useExpense must be used inside <ExpenseProvider>");
    return Exp;
}