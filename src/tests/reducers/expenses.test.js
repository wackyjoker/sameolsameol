import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';
test('should set default state',()=>{
	let state = expensesReducer(undefined,{type:'@@INIT'});

	expect(state).toEqual([]);
});


test('should remove expenses by id',()=>{
	let action={
		type:'REMOVE_EXPENSE',
		id:expenses[1].id
	}

	let state = expensesReducer(expenses,action);

	expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expenses by id',()=>{
	let action={
		type:'REMOVE_EXPENSE',
		id:'-1'
	}

	let state = expensesReducer(expenses,action);

	expect(state).toEqual(expenses);
});

//should have add expenses
test('should add expenses by id',()=>{

	let expense={
			id:expenses.length+1,
			description:'quada',
			note:'',
			amount:577,
			createdAt:moment(0).add(5,'days').valueOf()
		};

	let action={
		type:'ADD_EXPENSE',
		expense
	}

	let state = expensesReducer(expenses,action);

	expect(state).toEqual([...expenses,expense]);
});
//should edit expenses
test('should edit expenses',()=>{
		let action={
		type:'EDIT_EXPENSE',
		id:'3',
		expenses:{
			description:'prada',
			note:'',
			amount:577,
			createdAt:moment(0).add(5,'days').valueOf()
		}
	};

	let state = expensesReducer(expenses,action);

	expect(state[2]).toEqual(expenses[2]);
})
//should not edit expenses if id not found

test('should not edit expenses if id not found',()=>{
	let action={
		type:'EDIT_EXPENSE',
		id:'3',
		expenses:{
			description:'prada',
			note:'',
			amount:577,
			createdAt:moment(0).add(5,'days').valueOf()
		}
	};

	let state = expensesReducer(expenses,action);

	expect(state[2]).toEqual(expenses[2]);
});