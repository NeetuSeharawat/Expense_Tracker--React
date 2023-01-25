
import ExpenseDate from './ExpenseDate';
import ExpenseAmount from './ExpenseAmount';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem =(props)=>{
 return (
    <Card className='expense-item'> 
       <ExpenseDate date ={props.date} /> 
       <div className='expense-item__  description'> 
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
     </div>
     </Card>
    );
}
export default ExpenseItem;