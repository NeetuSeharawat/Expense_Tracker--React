import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () =>{
 return(
 <div className='new__expense'> 
 <ExpenseForm />
 </div>
 );
};
export default NewExpense;