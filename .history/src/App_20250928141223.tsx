import "./App.css";

function App() {
  return (
    <div className=" mt-4 mx-4 p-4">
      {/* Header */}
      <header className="flex items-center justify-between">
        <h1 className="text-4xl  font-semibold">Expense Tracker</h1>
        <button className=" border border-blue-500 py-2 px-3 md:px-6 lg:px-8 rounded font-semibold text-blue-500 text-2xl ">
          Log out
        </button>
      </header>

      {/* The main page */}
      <section>
        {/* Expenses */}
        <div className="flex flex-col w-[50vw] justify-between">
          <div className="flex justify-between items-center ">
          <h1 className="text-4xl  font-semibold">Expenses</h1>
          <button className=" bg-blue-600  py-2 px-3 md:px-6 lg:px-8 rounded-2xl font-semibold text-[#ffff] text-2xl ">
            Add Expense
          </button>
          </div>
          <input type="text" placeholder="Search..."  className="py-2 px-4 text-2xl border-gray-300 border rounded-2xl mt-4 mx-6"/>
        </div>
        {/* Charts */}
        <div></div>
      </section>
    </div>
  );
}

export default App;
