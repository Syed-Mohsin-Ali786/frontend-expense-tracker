import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"

export function AddExpenseDialog() {
const handleSubmit=async ()=>{
try{


}catch(err){
  console.log(err);
}
}
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button variant={"expense"} >Add Expense</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Expense</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Amount</Label>
            <Input type="number" placeholder="Enter amount" />
          </div>
          <div>
            <Label>Category</Label>
            <Input type="text" placeholder="Food, Travel, etc." />
          </div>
          <div>
            <Label>Date</Label>
            <Input type="date" />
          </div>
          <div>
            <Label>Description</Label>
            <Input type="text" placeholder="Optional description" />
          </div>
          <Button type="submit" className="w-full">Save</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
