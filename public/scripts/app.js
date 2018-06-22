'use strict';

console.log('App.js is running!');

var app = {
    title: "modafakas",
    subtitle: ['one', 'two '],
    option: ["first", "second", "third"],
    getSubtitle: function getSubtitle(sub) {
        return sub.length > 0 ? sub.join(",") : "undefined";
    }
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;

    if (option) {
        app.option.push(option);
        e.target.elements.option.value = '';
    }
    renderNewComponent();
};

var reSet = function reSet() {
    app.option = [];
    renderNewComponent();
};

// JSX - JavaScript XML
var appRoot = document.getElementById('app');
var renderNewComponent = function renderNewComponent() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'p',
            null,
            app.option.length > 0 ? app.option[0] : "No content exists"
        ),
        React.createElement(
            'button',
            { disabled: true },
            ' what to do?'
        ),
        React.createElement(
            'button',
            { onClick: reSet },
            ' Reset'
        ),
        React.createElement(
            'ol',
            null,
            app.option.map(function (e, i) {
                return React.createElement(
                    'li',
                    { key: i },
                    e
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                ' Add Option '
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderNewComponent();

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Andrew'
    ),
    React.createElement(
        'p',
        null,
        'Age:26'
    ),
    React.createElement(
        'p',
        null,
        'Location : Philadelphia'
    )
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
