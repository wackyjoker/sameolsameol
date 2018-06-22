import {addExpense,removeExpense,editExpense} from '../../actions/expenses';

test('testing remove action',()=>{
	const action = removeExpense({id:'123asd'});
	
	expect(action).toEqual({
		type:'REMOVE_EXPENSE',
		id:'123asd'
	})
});


test('test edit action',()=>{
	const action = editExpense('111dsa',{description:'rent'});

	expect(action).toEqual({
		type:'EDIT_EXPENSE',
		id:'111dsa',
		updates:{description:'rent'}
	})
});

test('test add action with provide value',()=>{
	const expenseData={
		description:'Rent',
		amount:19000,
		createdAt:1250,
		note:'this is a test data'
	};
	const action = addExpense(expenseData);

	expect(action).toEqual({
		type:'ADD_EXPENSE',
		expense:{
		...expenseData,
		id:expect.any(String)
	    }
	})
});

test('test add action with default value',()=>{
	const action = addExpense();

	expect(action).toEqual({
		type:'ADD_EXPENSE',
		expense:{
			id:expect.any(String),
		description:'',
  		  note:'',
   		 amount:0,
   		 createdAt:0
   		}
		})
});


