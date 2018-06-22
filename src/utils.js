console.log("utils.js is running");


const thirtyDays = x => Math.pow(2,30)*x; 
const add = (a,b) => a+b;

const substract = (a,b)=> a-b;
 const kiloTravel = (a)=> a*2*2*12;

export {thirtyDays,add,kiloTravel,substract as default};