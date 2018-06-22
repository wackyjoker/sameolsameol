import moment from 'moment';
import {setStartDate,setEndDate,setTextFilter,sortByDate,sortByAmount} from '../../actions/filters';


test('should generate startd date',()=>{
	let action = setStartDate(moment(0));

	expect(action).toEqual({
		type:'SET_START_DATE',
		date:moment(0)
	});
});


test('should generate startd date',()=>{
	let action = setEndDate(moment(0));

	expect(action).toEqual({
		type:'SET_END_DATE',
		date:moment(0)
	})
});

test('should generate setTextFilter default',()=>{
	let action = setTextFilter();

	expect(action).toEqual({
		type:'SET_TEXT_FILTER',
		text:''
	})
});

test('should generate setTextFilter provided',()=>{
	let action = setTextFilter('123aaa');

	expect(action).toEqual({
		type:'SET_TEXT_FILTER',
		text:'123aaa'
	})
});

test('should generate sortByDate',()=>{
	let action = sortByDate();

	expect(action).toEqual({
		type:'SORT_BY_DATE',
		sortBy:'date'
	})
});


test('should generate sortByAmount',()=>{
	let action = sortByAmount();

	expect(action).toEqual({
		type:'SORT_BY_AMOUNT',
		sortBy:'amount'
	})
});