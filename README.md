

Home work

 >> What is cdn?
 >> Why it is used?
 >> What is cross origin?


<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

    >> So the first file is react core which all the code are declared in this cdn link.

<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    >> So the second file is connected between bridge in react and browers to perform the dom operation.

Why this 2 cdn files are not combined?

    >> Because react is not only run in browsers, It is also run mobile application using react-native
    >> So these are files are seprate them.


/**
 * <div id="parent">
 *     <div id="child">
 *         <h1>I am h1 tag</h1>
 *     </div>
 * </div>
 */

 const parent = React.createElement('div', {id : 'parent'},
    React.createElement('div', {id : 'child'},
    React.createElement('h1', {}, 'I am h1 tag'
)));

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent)
    
    >> At the end createElement it will ReactElement object
    >> ReactElement(obj) => (Render) HTML(Browser undstands)


>> second example

/**
 * <div id="parent">
 *     <div id="child1">
 *         <h1>I am h1 tag</h1>
 *         <h2>I am h2 tag</h2>
 *     </div>
 *     <div id="child2">
 *         <h1>I am h1 tag</h1>
 *         <h2>I am h2 tag</h2>
 *     </div>
 * </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child1" }, 
    [React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag")]
  ),
  React.createElement("div", { id: "child2" }, 
    [React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag")]
  )]
  
  
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

    >> To create the html element is too ugly and hard
    >> In this case JSX, come into picture
    >> So React only return in JSX.

<div id="root">
    <h1>Yogesh</h1>
</div>

    >> The render method actually replaced (not appended) the HTML element


>> What is crossorigin in script tag?
   >> The crossorigin attribute sets the mode of the request to an HTTP CORS Request. 
   >> The purpose of crossorigin attribute is used to share the resources from one domain to another domain. 
   >> Basically, it is used to handle the CORS request. 
   >> It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.

syntax:
    <script crossorigin="anonymous|use-credentials">