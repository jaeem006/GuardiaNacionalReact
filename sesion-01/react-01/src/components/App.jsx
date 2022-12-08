import ExpenseItem from "./Expenses/ExpenseItem";
import Card from "./UI/Card"
import NewExpense from "./NewExpense/NewExpense";
import { useState } from 'react'

function App(){

  const [gastos, setGastos] = useState([]);

  const addExpenseHandler = (expense) => {
    setGastos(prevState => [...prevState, expense])
  }

  return(
    <>
      <h1>Hello World</h1>
      
      <NewExpense onAddExpense={addExpenseHandler} />
      <Card 
        className="expenses"
      >
        <h2>Gastos</h2>
        {gastos.map(e => 
          <ExpenseItem
            key = {e.id}
            fecha = {e.fecha}
            title = {e.title}
            precio = {e.precio}
          />)}
      </Card>
    </>
  )
}
export default App;