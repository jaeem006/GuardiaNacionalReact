import ExpenseItem from "./Expenses/ExpenseItem";
import Card from "./UI/Card"

function App(){

  const gastos = [
    {
      id : 0,
      titulo : "Libros",
      fecha : "Mayo 20 2022",
      precio : 250
    },
    {
      id : 1,
      titulo : "Café",
      fecha : "Abril 25 2022",
      precio : 50
    },
    {
      id : 2,
      titulo : "Comida",
      fecha : "Junio 20 2022",
      precio : 650
    },
  ]

  return(
    <div>
      <h1>Hello World</h1>
      <Card 
        className="expenses"
      >
        <h2>Gastos</h2>
        {gastos.map(e => 
          <ExpenseItem
            key = {e.id}
            fecha = {e.fecha}
            titulo = {e.titulo}
            precio = {e.precio}
          />)}
      </Card>
    </div>
  )
}
export default App;