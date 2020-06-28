//React: Learn About Self-Closing JSX Tags

/*
1. In HTML, almost all tags have both an opening and closing tag.
2. However, there are special instances in HTML called “self-closing tags”, or tags that don’t require both an opening and closing tag before another tag can start
3. In JSX, the rules are a little different. Any JSX element can be written with a self-closing tag, and every element must be closed. 

4. for example, must always be written as <br /> in order to be valid JSX that can be transpiled.A <div>, on the other hand, can be written as <div /> or <div></div>.
*/
const JSX = (
	<div>
		<h2>Welcome to React!</h2> <br />
		<p>Be sure to close all tags!</p>
		<hr />
	</div>
);
