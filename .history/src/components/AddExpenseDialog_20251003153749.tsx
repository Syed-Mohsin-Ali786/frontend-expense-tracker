import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useExpense } from "@/hooks/useExpense";
import { DialogDescription } from "@radix-ui/react-dialog";

export function AddExpenseDialog() {
  const { addExpense } = useExpense();

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
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"expense"}>Add Expense</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
            <DialogTitle>Add New Expense</DialogTitle>
          <DialogDescription>
            <p>Fill in the </p>
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
            />
          </div>
          <div>
            <Label>Category</Label>
            <Input
              type="text"
              placeholder="Food, Travel, etc."
              name="category"
              value={form.category}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Date</Label>
            <Input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
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
