// const person= {
// 	name:"kev",
// 	age:28,
// 	location:{
// 		city:"San Francisco",
// 		temp:21
// 	}
// }


// const {name:firstname= 'Anonymous' ,age} = person;

// console.log(`${firstname} is ${age}`);

// const {city,temp:temperature} = person.location;

// console.log(`${city} is at ${temperature}`);


// const book = {
// 	title:'Ego is the enemy',
// 	author:'Ryan Holiday',
// 	publisher:{
// 		name:'Peguin'
// 	}
// };

// const {name:publisherName = 'self publish' }= book.publisher;



// console.log(publisherName);


const adress =['1577\'s hugo street','San Francisco','Califonia','19550'];

const [street,city,state,postal] = adress;

console.log(`${street} + ${city} + ${state} `);



const item = ['Coffee (hot)',"$2.00",'$2.50','$2.75'];

const [hotCoffee,,medium,large]=item;

console.log(`A medium ${hotCoffee} costs ${medium}`);