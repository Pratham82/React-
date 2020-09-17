// React: Create a Stateless Functional Component

/*
* Components are the core of React. Everything in React is a component and here you will learn how to create one.

* 1st method: use a JavaScript function Defining a component in this way creates a stateless functional component.

* Stateless component is one that can receive data and render it, but does not manage or track changes to that data.

* To create a component with a function, you simply write a JavaScript function that returns either JSX or null.

* React requires your function name to begin with a capital letter. 

* Because a JSX component represents HTML, you could put several components together to create a more complex HTML page. 

* This is one of the key advantages of the component architecture React provides. It allows you to compose your UI from many separate, isolated components. This makes it easier to build and maintain complex user interfaces.

*/
// The code editor has a function called MyComponent. Complete this function so it returns a single div element which contains some string of text.

const MyComponent = function () {
	return <div>This is testing string</div>;
};
