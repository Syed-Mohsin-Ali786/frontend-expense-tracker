import "./App.css";

function App() {
  return (
    <div className=" mt-4 mx-4 p-4">
      {/* Header */}
      <header className="flex items-center justify-between">
        <h1 className="text-4xl  font-semibold">Expense Tracker</h1>
        <button className="cursor-pointer border border-blue-500 py-2 px-3 md:px-6 lg:px-8 rounded font-semibold text-blue-500 text-2xl hover:bg-blue-500 hover:text-[#fff]">
          Log out
        </button>
      </header>

      {/* The main page */}
      <section className="mt-6 shadow border-gray-200 border px-4">
        {/* Expenses */}
        <div className="flex flex-col w-[50vw] justify-between mt-4 ">
          <div className="flex justify-between items-center ">
            <h1 className="text-4xl  font-semibold">Expenses</h1>
            <button className="cursor-pointer hover:bg-blue-600 bg-blue-500  py-2 px-3 md:px-6 lg:px-8 rounded-[12px] font-semibold text-[#ffff] text-2xl">
              Add Expense
            </button>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="py-2 px-4 w-full text-2xl border-gray-300 border rounded-[12px] mt-4 outline-gray-500 "
            />
            <div className="flex text-2xl items-center justify-between mt-4 border-gray-200 border-b">
              <p>Description</p>
              <p>Category</p>
              <p>Date</p>
              <p>Amount</p>
            </div>
            <div className="flex text-xl items-center justify-between mt-4 border-gray-200 border-b">
              <p>Office Supplies</p>
              <p>Office</p>
              <p> Sep 21</p>
              <p>$300</p>
            </div>
          </div>
        </div>
        {/* Charts */}
        <div>
          
        </div>
      </section>
    </div>
  );
}

export default App;
