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

interface Input {
name?:string,
value?:string|number,
}

export function AddExpenseDialog() {
  const { addExpense } = useExpense();
  
  const [form, setForm] = useState({
    amount: "",
    category: "",
    date: Date.now(),
    description: "",
  });

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setForm({
      ...form,
      [form.name]:e.target.value;
    })
  }
  const handleSubmit = async () => {
    try {
      await addExpense(form);
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
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Amount</Label>
            <Input type="number" placeholder="Enter amount" name="amount" value={form.amount} />
          </div>
          <div>
            <Label>Category</Label>
            <Input type="text" placeholder="Food, Travel, etc." name="category" value={form.category} />
          </div>
          <div>
            <Label>Date</Label>
            <Input type="date" name="date" value={form.date} />
          </div>
          <div>
            <Label>Description</Label>
            <Input type="text" placeholder="Optional description" name="description" value={form.description}/>
          </div>
          <Button type="submit" className="w-full">
            Save
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
