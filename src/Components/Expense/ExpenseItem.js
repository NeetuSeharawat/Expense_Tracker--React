import React,{useState} from 'react';

import ExpenseDate from './ExpenseDate';
import ExpenseAmount from './ExpenseAmount';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem =(props)=>{
  const [title, setTitle] = useState(props.title);
  
     // function clickHandler()
   let clickHandler = () =>{ 
      setTitle (' 100 $');
      console.log('title!');

   }
   return (
    <Card className='expense-item'> 
       <ExpenseDate date ={props.date} /> 
       
       <div className='expense-item_description'> 
        <h2>{title}</h2></div>
       
       <div><ExpenseAmount amount={props.amount} />
     </div>
   <button onClick={clickHandler}>Delete Expense </button>
    </Card>
    );
}
export default ExpenseItem;