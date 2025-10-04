import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useExpense } from "@/hooks/useExpense";

export function AddExpenseDialog() {
  const { addExpense, expenseList } = useExpense();
  const categories = ["Food", "Travel", "Shopping", "Bills", "Health", "Other"];
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    amount: "",
    category: "",
    date: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addExpense({
        ...form,
        date: new Date(form.date),
        amount: Number(form.amount),
      });
      setForm({ amount: "", category: "", date: "", description: "" });
      expenseList();
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-all rounded-lg px-6 py-2 shadow-md">
          + Add Expense
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md rounded-xl p-6 shadow-lg bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800">Add New Expense</DialogTitle>
          <DialogDescription className="text-gray-500">
            Fill in the details below to add a new expense
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div className="flex flex-col">
            <Label>Amount</Label>
            <Input
              type="number"
              placeholder="Enter amount"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              className="rounded-lg border-gray-300 focus:ring-blue-400"
              required
            />
          </div>
          <div className="flex flex-col">
            <Label>Category</Label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="rounded-lg border outline-gray-700 border-gray-300 focus:ring-blue-400 py-2 px-3"
              required
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <Label>Date</Label>
            <Input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="rounded-lg border-gray-300 focus:ring-blue-400"
              required
            />
          </div>
          <div className="flex flex-col">
            <Label>Description</Label>
            <Input
              type="text"
              placeholder="Optional description"
              name="description"
              value={form.description}
              onChange={handleChange}
              className="rounded-lg border-gray-300 focus:ring-blue-400"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-green-500 text-white hover:bg-green-600 transition-all py-2 rounded-lg shadow-md"
          >
            Save Expense
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
