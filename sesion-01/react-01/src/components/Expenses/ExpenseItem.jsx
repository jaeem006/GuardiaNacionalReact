import "./ExpenseItem.css"

function ExpenseItem(props){
    
    return (
        <div className="expense-item">
          <div>{props.fecha}</div>
          <div className="expense-item-description">
            <h2>{props.titulo}</h2>
            <div className="expense-item-price">${props.precio}</div>
          </div>
        </div>
    );
}

export default ExpenseItem