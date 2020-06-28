// React: Render HTML Elements to the DOM

/*
 * 1. JSX is a convenient tool to write readable HTML within JavaScript. With React, we can render this JSX directly to the HTML DOM using React's rendering API known as ReactDOM.
 * ReactDOM offers a simple method to render React elements to the DOM which looks like this: ReactDOM.render(componentToRender, targetNode)
 * where the first argument is the React element or component that you want to render,
 * second argument is the DOM node that you want to render the component to.
 */
const JSX = (
	<div>
		<h1>Hello World</h1>
		<p>Lets render this to the DOM</p>
	</div>
);
// change code below this line

ReactDOM.render(JSX, document.getElementById("root"));
