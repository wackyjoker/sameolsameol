import moment from 'moment';


export default [{
	id:'1',
	description:'moda',
	note:'',
	amount:0,
	createdAt:0
},{
	id:'2',
	description:'dada',
	note:'',
	amount:192,
	createdAt:moment(0).subtract(4,'days').valueOf()
},{
	id:'3',
	description:'loda',
	note:'',
	amount:1000,
	createdAt:moment(0).add(4,'days').valueOf()
}];