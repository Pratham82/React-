// React: Create a Simple JSX Element

/*
* Intro: React is an Open Source view library created and maintained by Facebook. It's a great tool to render the User Interface (UI) of modern web applications.

* React uses a syntax extension of JavaScript called JSX that allows you to write HTML directly within JavaScript. 

* This has several benefits. It lets you use the full programmatic power of JavaScript within HTML, and helps to keep your code readable. 

* You can actually write JavaScript directly within JSX. To do this, you simply include the code you want to be treated as JavaScript within curly braces: { 'this is treated as JavaScript code' }

* However, because JSX is not valid JavaScript, JSX code must be compiled into JavaScript. The transpiler Babel is a popular tool for this process.

*  In FCC under the hood the challenges are calling ReactDOM.render(JSX, document.getElementById('root')). This function call is what places your JSX into React's own lightweight representation of the DOM. React then uses snapshots of its own DOM to optimize updating only specific parts of the actual DOM

*/
const JSX