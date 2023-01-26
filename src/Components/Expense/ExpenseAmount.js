import './ExpenseAmount.css';

const ExpenseAmount =(props) =>{
    return(
        <div className='expense-item__amount'>${props.amount}</div>

    )
}
export default ExpenseAmount;