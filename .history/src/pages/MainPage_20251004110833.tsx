import { useAuth } from "@/hooks/useAuth";
import { AddExpenseDialog } from "../components/AddExpenseDialog";
import { useEffect, useState } from "react";
import { useExpense } from "@/hooks/useExpense";

interface Expense {
  _id: string;
  description: string;
  category: string;
  date: string;
  amount: number;
}

function MainPage() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const { logout } = useAuth();
  const { expenseList } = useExpense();

  const getExpenseList = async () => {
    try {
      const res = (await expenseList()) as unknown; // fetch from API and treat result as unknown to avoid void checks
      console.log(res);
      
      if (Array.isArray(res)) {
        setExpenses(res as Expense[]);
      }
    } catch (error) {
      console.log("Error fetching expenses:", error);
    }
  };

  useEffect(() => {
    getExpenseList();
  }, []);

  return (
    <div className="mt-4 mx-4 p-4">
      {/* Header */}
      <header className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold">Expense Tracker</h1>
        <button
          onClick={() => logout()}
          className="cursor-pointer border border-blue-500 py-2 px-3 md:px-6 lg:px-8 rounded font-semibold text-blue-500 text-2xl hover:bg-blue-500 hover:text-white"
        >
          Log out
        </button>
      </header>

      {/* Main Section */}
      <section className="mt-6 shadow border-gray-200 border px-4">
        {/* Expenses Header */}
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-4xl font-semibold">Expenses</h1>
          <AddExpenseDialog />
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          className="py-2 px-4 w-full text-2xl border-gray-300 border rounded-[12px] mt-4 outline-gray-500"
        />

        {/* Table Header */}
        <div className="flex text-2xl items-center justify-between mt-4 border-b border-gray-200 font-semibold py-2">
          <p className="w-1/4">Description</p>
          <p className="w-1/4">Category</p>
          <p className="w-1/4">Date</p>
          <p className="w-1/4">Amount</p>
        </div>

        {/* Table Rows */}
        <div className="flex flex-col mt-2">
          {expenses.map((e) => (
            <div
              key={e._id}
              className="flex justify-between py-2 border-b border-gray-200 text-xl"
            >
              <p className="w-1/4">{e.description || "No description"}</p>
              <p className="w-1/4">{e.category}</p>
              <p className="w-1/4">{new Date(e.date).toLocaleDateString()}</p>
              <p className="w-1/4">${e.amount}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MainPage;
