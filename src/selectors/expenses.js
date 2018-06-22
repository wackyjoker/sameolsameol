import moment from 'moment';

//Get visible expenses 
export default (expenses,{text,sortBy,startDate,endDate})=>{

    return expenses.filter((expense) => {
            const createdAtMoment = moment(expense.createdAt);
            const startDateMatch = startDate? startDate.isSameOrBefore(createdAtMoment,'day') : true;
            const endDateMatch = endDate? endDate.isSameOrAfter(createdAtMoment,'day') : true;
            const textMatch =  expense.description.toLowerCase().includes(text.toLowerCase());
           
            
            // figure out if expenses.description 

            return startDateMatch && endDateMatch && textMatch;
            // return true&&true&&true;
        }).sort((a,b) =>{
        	if(sortBy === 'date'){
        	return	 a.createdAt - b.createdAt  ;
        	}
        	if ( sortBy === 'amount'){
        		return   a.amount- b.amount;
        	}
        	
        });   
};