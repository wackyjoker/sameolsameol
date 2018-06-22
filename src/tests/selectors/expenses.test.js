import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';


test('testing selected Expenses',()=>{
	const filters={
		text:'a',
		sortBy:'date',
		startDate:undefined,
		endDate:undefined
	}

	let result=selectExpenses(expenses,filters);

	expect(result).toEqual([expenses[1],expenses[0],expenses[2]]);
});	


test('should filter by start date',()=>{
	const filters={
		text:'',
		sortBy:'date',
		startDate:moment(0),
		endDate:undefined
	}
	let result=selectExpenses(expenses,filters);

	expect(result).toEqual([expenses[0],expenses[2]]);
});

// sort by end date
test('should filter by end date',()=>{
	const filters={
		text:'',
		sortBy:'date',
		startDate:undefined,
		endDate:moment(0)
	}
	let result=selectExpenses(expenses,filters);

	expect(result).toEqual([expenses[1],expenses[0]]);
});
//sort by date
test('should filter by date',()=>{
	const filters={
		text:'',
		sortBy:'date',
		startDate:undefined,
		endDate:undefined
	}
	let result=selectExpenses(expenses,filters);

	expect(result).toEqual([expenses[1],expenses[0],expenses[2]]);
});
//sort by amount
test('should filter by amount',()=>{
	const filters={
		text:'',
		sortBy:'amount',
		startDate:undefined,
		endDate:undefined
	}
	let result=selectExpenses(expenses,filters);

	expect(result).toEqual([expenses[0],expenses[1],expenses[2]]);
});
