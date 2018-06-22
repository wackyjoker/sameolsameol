console.log('App.js is running!');

const app = {
    title:"modafakas",
    subtitle:['one','two '],
    option : ["first","second","third"],
    getSubtitle :sub => (sub.length > 0) ? sub.join(","):"undefined"
}

const onFormSubmit = (e)=>{
    e.preventDefault();
   const option = e.target.elements.option.value;

   if(option){
       app.option.push(option);
       e.target.elements.option.value = '';
   }
   renderNewComponent();
}

const reSet = ()=>{
    app.option = [];
    renderNewComponent();
}

// JSX - JavaScript XML
var appRoot = document.getElementById('app');
const renderNewComponent = ()=>{
    const template = (
    <div>
    <h1>{app.title}</h1> 
    <p>{app.option.length> 0 ? app.option[0] : "No content exists"}</p>
    <button disabled> what to do?</button>
    <button onClick={reSet}> Reset</button>
    <ol>
        {app.option.map((e,i)=><li key={i} >{e}</li>)}
    </ol>


    <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
    
        <button> Add Option </button>
    </form>

    
    </div>
    );
    ReactDOM.render(template,appRoot);
};

renderNewComponent();


var templateTwo = (
    <div>
    <h1>Andrew</h1>
    <p>Age:26</p>
    <p>Location : Philadelphia</p>
    </div>
);

// const Foobar = (props)=>{
//     return (
//         <div>
//         <p> foo : {props.foo}</p>
//         <p> bar : {props.bar}</p>
//         </div>
//     );
// };

// ReactDOM.render(<Foobar foo="foo" bar={28} />, document.getElementById('app'));