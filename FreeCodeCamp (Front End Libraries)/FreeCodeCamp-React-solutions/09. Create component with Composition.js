// React: Create a Component with Composition

/*
 * 1. We can compose multiple React components together. Imagine you are building an App and have created three components, a Navbar, Dashboard, and Footer
 * 2. To compose these components together, you could create an App parent component which renders each of these three components as children
 * 3. To render a component as a child in a React component, you include the component name written as a custom HTML tag in the JSX.
 
 Eg. 
 return (
 <App>
  <Navbar />
  <Dashboard />
  <Footer />
 </App>
)
* 4. When React encounters a custom HTML tag that references another component (a component name wrapped in < /> like in this example), it renders the markup for that component in the location of the tag.
 */

const ChildComponent = () => {
	return (
		<div>
			<p>I am the child</p>
		</div>
	);
};

class ParentComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>I am the parent</h1>
				{/* change code below this line */}
				<ChildComponent />
				{/* change code above this line */}
			</div>
		);
	}
}
