import Card from "../UI/Card"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

function NewExpense(props){
    return(
        <Card className="new-expense">
            <ExpenseForm onSaveExpense={props.onAddExpense}/>
        </Card>
    )
}

export default NewExpense