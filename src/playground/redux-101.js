import {createStore} from 'redux';



const incrementCount = ({incrementBy = 1 } = {} ) => ({
	type:'INCREMENT',
	incrementBy
});
	

const decrementCount = ({decrementBy = 1}={}) => ({
	type:'DECREMENT',
	decrementBy
});

const setCount = ({setBy=100} ={})=>({
	type:'SET',
	setBy
});


const resetCount =  ()=>({
	type:'RESET'
});


//Reducers 


const countReducer = (state = {count: 0},action)=> {
    
	switch (action.type){

		case 'INCREMENT':
		// const incrementBy = typeof action.incrementBy === 'number'? action.incrementBy : 1;
		
		return {
			count:state.count + action.incrementBy
		};

		case 'DECREMENT':
		
		return {
			count:state.count - action.decrementBy
		};

		case 'SET':
		return{
			count:action.setBy
		};

		case 'RESET':
		return{
			count: 0
		};

		default :
		return state;
	}





    }


const store = createStore(countReducer);



//     if(action.type === 'INCREMENT'){
    	
//     	return {
//     		count: state.count +1
//     	};
//     } else {
//     	return state;
//     }



//     console.log('createStore is running');
 
// });

const unsubscribe = store.subscribe(()=>{
 console.log(store.getState());
});





// I'd like to increment the count

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy:5
// });
store.dispatch(incrementCount({incrementBy:5}));


store.dispatch(incrementCount());



store.dispatch(resetCount({resetBy:0}));

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(setCount({setBy:101}));
// this.setState((prevState)=>{
//     return prevState;
// });
