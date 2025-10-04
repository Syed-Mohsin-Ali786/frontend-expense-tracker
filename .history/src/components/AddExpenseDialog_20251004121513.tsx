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

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    amount: "",
    category: "",
    date: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

      // reset form
      setForm({
        amount: "",
        category: "",
        date: "",
        description: "",
      });
      expenseList();
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="expense">Add Expense</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Expense</DialogTitle>
          <DialogDescription>
            Fill in the details below to add a new expense
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Amount</Label>
            <Input
              type="number"
              placeholder="Enter amount"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label>Category</Label>
            <select name="" id="">
              <option value={form.category}>"Food",</option>
              <option value={form.category}>"Travel",</option>
              <option value={form.category}>"Shopping",</option>
              <option value={form.category}>"Bills",</option>
              <option value={form.category}>"Health",</option>
              <option value={form.category}>"Other"</option>
            </select>
            <Input
              type="text"
              placeholder="Food, Travel, etc."
              name="category"
              value={form.category}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label>Date</Label>
            <Input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label>Description</Label>
            <Input
              type="text"
              placeholder="Optional description"
              name="description"
              value={form.description}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Save
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
