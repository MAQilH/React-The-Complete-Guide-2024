# React - The Complete Guide 2024 (incl. React Router & Redux) 🚀
Welcome to my Git repository for **React - The Complete Guide!** <img height=20px src="https://skillicons.dev/icons?i=react"> 

I completed a 68-hour Udemy course, 'React - The Complete Guide 2024' by Maximilian Schwarzmüller, which gave me a solid understanding and hands-on experience with `React` development. I learned about `components, props, React hooks, forms, Redux, routing, states and responses, and Next.js`. 🧾
> 📎 Course Slides are attached in the Resources folder.

## 📌 Table of Content
- [ ] Valuable React Resources
- [ ] Course Overview 
- [ ] Coding Exercises
- [ ] Key Topics Covered
- [ ] JavaScript Refresher (Arrow Function, Objects, Arrays, The Spread Operator, JS Array Functions).

--- 

### 🗂️ Valuable React Resources:
<img style="width:90%; max-width:100px;" alt="image" src="https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/3f462711-0661-4ddf-b9b5-ed0c4c523073">
<img style="width:90%; max-width:100px;" alt="image" src="https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/60cd1f45-f7d1-4650-aa20-ff56fcf60bc3">
<img style="width:90%; max-width:100px;" alt="image" src="https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/1bb17460-5789-439d-94f3-6b28c356a409">
<img style="width:90%; max-width:100px;" alt="image" src="https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/f0612755-ae34-45b5-9b5c-08dae02094a5">
<img style="width:90%; max-width:100px;" alt="image" src="https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/386ba754-b09c-4b07-b144-b984048a4986">
<img style="width:90%; max-width:100px;" alt="image" src="https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/9e381dba-1092-44fc-8d7b-33f2c20135fd">
<img style="width:90%; max-width:100px;" alt="image" src="https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/421893a6-13c8-479c-bc9c-04728f97647b">
<img style="width:90%; max-width:100px;" alt="image" src="https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/f585b9e9-c41a-40a8-a46e-b80eba9c96de">
<img style="width:90%; max-width:100px;" alt="image" src="https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/63bf0152-b8df-4f60-932e-37cf85b1342c">
<img style="width:90%; max-width:100px;" alt="image" src="https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/46551685-2f8a-4775-b985-bca72e064222">
<img style="width:90%; max-width:100px;" alt="image" src="https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/5879cba7-924f-44c0-bf9d-00003335c914">
<img style="width:90%; max-width:100px;" alt="image" src="https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/4a2ed2fd-7d0a-4d30-8198-ceb9f4a8822a">

---


### 🏆 Course Overview -
## 📔 Section 3: React Essentials - Components, JSX, Props, State & more:

###  ◻ Coding Exercise 3 - Building & Using a Component
```javascript
// create a new MainGoal component which outputs a paragraph of text that describes your main course goal,
// and then use it inside the App component's JSX code.
import React from 'react';
// DEFINE YOUR COMPONENT HERE
export function MainGoal() {
    <p>My main goal: Become React expert</p>;
}

function App() {
  return (
    <div id="app">
      <h1>Time to Practice!</h1>
      <p>
        Build a <code>&lt;MainGoal&gt;</code> component and insert it below this
        text.
      </p>
      <p>
        Your <code>&lt;MainGoal&gt;</code> component should simply output some
        text that describes your main course goal (e.g., &quot;My main goal:
        Learn React in great detail&quot;).
      </p>
      <p>
        <strong>Important:</strong> You custom component must contain the text
        &quot;My main goal:&quot;
      </p>
      <p>
        <strong>Also important:</strong> For the automatic checks to succeed,
        you <strong>must export</strong> your custom component function! Not as
        a default but simply by adding the <code>export</code> keyword in front
        of your function (e.g., <code>export function YOUR_COMPONENT_NAME</code>
        ).
      </p>
      {/* OUTPUT YOUR COMPONENT HERE */}     
      <MainGoal />
    </div>
  );
}
export default App;
```
![3](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/65007211-f106-41cb-8514-cd009430a86b)



<br>

---
<br>


## ✔ Starting Project:
I build over the starting project with each module learned.

![section 3- Starting project](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/9cde95de-790e-4653-9061-300fee55d65e)

```javascript
// starting project
function App() {
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}
export default App;
```


###  ◻ Making Components Reusable with Props -
```javascript
/* 2. Merge into Object.
React merges all props into a single object.
{
   title= 'Components'
   description= 'The core UI...'
}
*/

// 3. Receive Props as an argument.
// Props are passed to the component function as the first argument by React.
// This object has this custom <key, value> pairs: { title: '...', description: '...', image: '...' }
function CoreConcept(props) {
  return (
    <li>
      {/* Can access props.image to get hold of the value that's set on the image key below */}
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      {/* Rendering the Header component (can be reused) */}
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          {/* 1. Set props (can be: String, Number, Object, Array).
          Props are passed as an object, and are "custom HTML attributes" set on component. */}
            <CoreConcept
              title="Components"
              description="The core UI building block."
              image={componentsImg}
            />
            <CoreConcept title="Props" />
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
      </main>
    </div>
  );
}
export default App;
```



##  ◻ Coding Exercise 4 - Outputting Dynamic Content:
```javascript
// the user's first name, last name and title is output dynamically by using JSX' "curly brace" syntax.
// For example, { userData.title } is replaced with the actual string value stored in userData.title
// when the component is rendered to the screen.
import React from 'react';

export const userData = {
  firstName: 'Shani', 
  lastName: 'Bider', 
  title: 'Developer',
};

// Edit the User component code to output the userData data
export function User() {
  return (
    <div id="user" data-testid="user">
      <h2>
     {userData.firstName} {userData.lastName}
      </h2>
      <p>{userData.title}</p>
    </div>
  );
}
// DON'T edit the App component code
function App() {
  return (
    <div id="app">
      <h1>Time to Practice</h1>
      <p>Welcome on board of this course! You got this 💪</p>
      <User/>
    </div>
  );
}
export default App;
```
![5](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/887b4b01-ab98-4345-b08c-2e6911fdae32)





### ◻ Alternative Props Syntax:
```javascript
import { CORE_CONCEPTS } from './data.js';

// Using another js feature: object destructuring. By adding '{}', we can destructure the first parameter of this function.
// I can target the different properties of the incoming object by name (same properties as I set below)
function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* Setting the props */}
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            {/* Shortcut to pull out all the 'key,value' pairs of an object  */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}
export default App;

// data.js:
export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
...];
```


##  ◻ Coding Exercise 5 - Working with props
```javascript
export function CourseGoal(props) {
  return (
    <li>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>
      <ul>
        {/* OUTPUT AT LEAST TWO CourseGoal components here */}
        {/* One of them should have a title of “Learn React” and a description of “In-depth” */}
      <CourseGoal
      title="Learn React"
      description="In-depth"
      />
      <CourseGoal
      title="Practice React"
      description="Practice working with react"
      />
      </ul>
    </div>
  );
}
export default App;
```
![4](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/ce2da105-bdab-44de-ada9-9e2625101f3c)




#### ❔ Quiz - Dynamic values and Props
- Which values can be output as dynamic values in JSX (i.e., between curly braces)?
    - You could output expressions like "1 + 1", variables / constants that hold values, the result of calling a function etc.

- How should you typically load / use images in React projects?
    - By "importing" the image, a production-safe path gets generated under the hood.

- How can you assign a dynamic value to an HTML element attribute?
    - You simply replace the text value you would normally set for attributes with the dynamic (curly-brace-wrapped) value.

- Which core React concept can increase the reusability of React components?
    - Props are essentially custom attributes that can be set on components.

- How do "props" work in React?
    - React automatically passes a props object as the first argument to the receiving component

- Which of the following four code examples for setting & extracting props would NOT work as intended?
I.e., which example will NOT output the text "Priority: 5" on the screen.

```javascript
<MyComponent priority={5} />
function MyComponent(priority) {
  return <p>Priority: {priority} </p>
```
The error is subtle but this example does NOT use object destructuring. So here, the "priority" prop is not pulled out of the props object. Instead, it's now the entire props object that's named "priority". This wouldn't be a problem since the name is up to you. But it's now the entire object that's output in the paragraph, not the "priority" property. Therefore, the output would not be "Priority: 5" but instead "Priority: [Object object]" (or something like that).


This will be correct answers:
```javascript
<MyComponent priority={5} />
function MyComponent({...props}) {
  return <p>Priority: {priority} </p>

<MyComponent priority={5} />
function MyComponent(props) {
  return <p>Priority: {priority} </p>

<MyComponent priority={5} />
function MyComponent({priority}) {
  return <p>Priority: {priority} </p>
```


### ◻ More props Syntax:
```javascript
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';

// Here I move all the components to their folder, and import them here 
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}
export default App;
```


```javascript
// components/ CoreConcept
export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
```


```javascript
// components/ Header
import reactImg from '../assets/react-core-concepts.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
```





### ◻ The special "children" prop 
```javascript
// children prop is used to pass the content to the component.
// This is a prop that set by react.
// This children prop is refer to the content between the opening and closing tags of the component.
// i can output that content by using {children} or {props.children} in the component.
// (i.e. <TabButton>Content</TabButton>)
export default function TabButton({ children }) { // here i use object destructuring to get the children properity
  return (
    <li>
      <button>{children}</button>
    </li>
  );
}
// same as:
export default function TabButton(props) {
  return (
    <li>
      <button>{props.children}</button>
    </li>
  );
}


// "Children" Props vs "Attribute Props"
// Using Attribute:
// for smaller pieces of information
<TabButton label="Components"></TabButton>

function TabButton({ label }) { 
  return <button>{label}</button>;
}

// Using Children:
// for a single piece of renderable content
<TabButton>Components</TabButton>

function TabButton({ children }) { 
  return <button>{children}</button>;
}
```




###  ◻ Coding Exercise 6 - Component Composition
Create a reusable Card component that takes a name prop as an input and, in addition, can be wrapped around any JSX code:
```javascript
import Card from './Card';

function App() {
  return (
    <div id="app">
      <h1>Available Experts</h1>
      <Card name="Anthony Blake">
        <p>
          Blake is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com">Email Anthony</a>
        </p>
      </Card>

      <Card name="Maria Miles">
        <p>
          Maria is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com">Email Maria</a>
        </p>
      </Card>
    </div>
  );
}
export default App;

// card.js
/* The children prop is a special prop that's automatically provided to every component function. It contains the wrapped content as a value.
    So the children prop's value for this code:
    <Card>
      <p>Hi there</p>
    </Card>
    would be <p>Hi there</p>.
*/

export default function Card({ name, children }) {
    return (
        <article className="card">
        <h2>{name}</h2>
        {children}
        </article>
    );
}


// index.css
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Lato:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(#dfdee0, #c3c3c4);
  color: #e5d9f1;
  min-height: 100vh;
}
.card {
  margin: 2rem auto;
  padding: 2rem;
  max-width: 30rem;
  border-radius: 6px;
  background: linear-gradient(#254041, #203031);
  box-shadow: 0 0 8px rgba(0,0,0,0.3);
}
.card h2 {
  margin: 0;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  color: #e5d9f1;
}
.card p {
  margin: 0.5rem 0;
}
.card a {
  color: #b3f4f6;
  text-decoration: none;
}
```      
![3](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/f0a3487f-bb42-4b31-b75c-cd27c8d5c871)



### ◻ Coding Exercise 7 - Racting to Event
```javascript
// Your goal is to change the email, password and loggedIn values when the button in the App component is pressed
// Change them to any values of your choice (except loggedIn => that should be changed to true)
// You DON'T need to fetch the values entered into the <input /> fields
// You'll learn about that later in the course - for the moment, those fields are just there to look good :-)
export const user = {
  email: '',
  password: '',
  loggedIn: false,
};

function handleLogin(){
   user.email = 'test@example.com';
   user.password = 'test';
   user.loggedIn = true;
}

// Please note: The login does not actually work!
// This exercise is just about practicing event handling
// You'll learn how to add user authentication to React apps later in the course!
function App() {
  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Email</label>
        {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
        <input type="email" />
      </p>

      <p>
        <label>Password</label>
        {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
        <input type="password" />
      </p>

      <p id="actions">
        <button onClick={handleLogin}>Login</button>
      </p>
    </div>
  );
}
export default App;
```

![7](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/97349991-51de-4aad-bae6-681cb3a8cbc3)






### ◻ Coding Exercise 8 - Event Handlers
```javascript
export const user = {
  name: '',
};

function App() {
  // Your goal: This function should be called WITH A VALUE for name when the <button> is clicked
  function handleCreateUser(name) {
    user.name = name;
  }

  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Name</label>
        {/* You don't need to do anything with this input! You'll learn how to handle user input later */}
        <input type="text" />
      </p>

      <p id="actions">
        <button onClick={ () => handleCreateUser('Shani') }>Create User</button>
      </p>
    </div>
  );
}
export default App;
```

![8](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/6fc6c78b-b1fc-4869-a2e9-abadc6da9091)


#### ❔ Quiz - Event Handling
- How should you typically store your component functions?
Split across multiple files. (One component per file).

- What's the purpose of the special "children" prop?
"children" will receive whichever content you pass between the opening and closing tags of your component.

- How can you handle user events in React projects?
Via the built-in 'onXYZ' props (e.g. onClick).

- To execute code upon events, which value must be passed to event props like onClick?
A pointer to the function that sould be executed (onClick={handleClick}).

- How can you "configure" the execution of an event-dependent function (e.g., define which arguments get passed to it)?
By wrapping the execution of your event handling function with another function, it's that other function that's passed as a value to the event-handling prop. Therefore, your main function (=> handleClick in this example) does NOT get executed too early but instead only when the event occurs. (onClick = { () => handleClick(5)}).




### ◻ Coding Exercise 9 - Working with State
```javascript
// You're working on a part of an online shop where a discounted price should be displayed on the screen once the user clicked a button.

// Your task is to add an event listener to listen for clicks on the button that's already included in the App component.

// Upon a button click, the price should change from $100 to $75.
// Add a state value to the existing App component function and make sure the state value is both updated upon button clicks and output as part of the JSX code.

// IMPORTANT: You CAN'T import & use useState like this in this Udemy environment
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState();

import React from 'react';
export default function App() {
    const [ price, setPrice ] = React.useState('$100');    
    
    function onSelect(){
        setPrice('$75');        
    }
    
    return (
        <div>
            <p data-testid="price">{price}</p>
            <button onClick={onSelect}>Apply Discount</button>
        </div>
    );
}
```
![8](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/5066bf45-ab4d-45f4-bcb2-3b51b8d7f1d4)



#### ❔ Quiz - State and computed values
- What's the purpose of "State" in React apps?
The component to which the state belongs and its child and descendent components will be re-evaluated as state changes.





### ◻ Coding Exercise 10 - Conditional Content
```javascript
/*
You're working on a part of a web app that's responsible for showing a warning
when a user is about to perform a dangerous action.

Therefore, your task is to conditionally show a warning box once a user has clicked a specific button.
Inside that warning dialog, another button allows users to dismiss the warning. */
import React from 'react';

export default function App() {
    // state that controls whether the warning box is visible or not. 
    const [isDeleting, setIsDeleting] = React.useState(false);
    
    
    function deleteHandler(){
        setIsDeleting(true);
    }
    
     function proceedHandler(){
        setIsDeleting(false);
    }
    
    return (
      <div>
      
      {isDeleting ? 
        <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={proceedHandler}>Proceed</button>
        </div>
        : 
        ' '
      }
        
       <button onClick={deleteHandler}>Delete</button>
         
      </div>    
    );
}

/* Alternatively, you could use the && "trick":
return (
  <div>
    {isDeleting && <div data-testid="alert" id="alert">
      <h2>Are you sure?</h2>
      <p>These changes can't be reverted!</p>
      <button onClick={proceedHandler}>Proceed</button>
    </div>}
    <button onClick={deleteHandler}>Delete</button>
  </div>    
);
*/
```
![10](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/e1e3c8ea-68a5-4fcf-8f9b-7d2d4ce1823e)










### ◻ Coding Exercise 11 - Dynamic Styling
```javascript
/* Your task is to dynamically apply a CSS class (active) to the <p>Style me</p> element in the provided React app.*/
import React from 'react';

// don't change the Component name "App"
export default function App() {
      const [isClicked, setIsClicked] = React.useState(false);

function handleClick(){
    setIsClicked(true);
    // setHighlighted(isHighlighted => !isHighlighted);
    }
}
    return (
        <div>
            <p className={isClicked ? 'active' : undefined}>Style me!</p>
            <button onClick={handleClick}>Toggle style</button>
        </div>
    );
}
```
![11](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/4fbc70bd-74d7-48d5-8420-236e4691d8ce)






### ◻ Coding Exercise 12 - Dynamic List Content
```javascript
/* You're working on a "Todo List" web app and your task is to output a list of dummy todo items
dynamically. For this task, a Todo component has been prepared for you,
though you must still add some code to it to receive and output the todo text.

To be more precise: In the App component, you should transform the DUMMY_TODOS array that's
provided to you to a list of JSX elements
(<Todo> elements to be precise).
Every Todo component item must receive and output the todo text via a prop called text. */

//Todo.js:
import React from 'react';
// As a first step, you should make sure that the Todo component is able to receive and output a text prop:
export default function Todo(props) {
    return(
    <li>
    {props.text}
    </li>
    );
}
//With that out of the way, you can re-use this Todo component for different todo items.


// App.js:
import React from 'react';
import Todo from './Todo'
// don't remove the export keyword here!
export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];
// Therefore, as a next step, you should dynamically map the DUMMY_TODOS array to an array full of <Todo /> JSX elements (which then can be output as part of the App component's JSX code). This is achieved via the built-in map() method:
export default function App() {
  
return (
<ul>  
 { DUMMY_TODOS.map( todo  => 
  <Todo text={todo}/>) }
   </ul>
    );
}

index.css:
body {
    font-family: sans-serif;
    margin: 0;
    padding: 3rem;
    background-color: #2d2c2c;
    color: #959090;
    text-align: center;
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
li {
    list-style: none;
    margin: 1rem;
    padding: 1rem;
    background-color: #8567fd;
    color: white;
    border: 2px solid #8567fd;
    border-radius: 6px;
}
```
![12](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/202927fb-12be-4c8a-9d3c-6d8e8982e96b)


#### ❔ Quiz - Conditional Content & Dynamic Lists
![quiz3](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/fcfda662-a56d-46cf-a598-690c5f6be881)
![quiz4](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/388c70c6-afbf-44f5-aac0-0d29d96fab85)

![quiz](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/74f0c209-ff69-4a2e-a501-c787a8c6f9fe)

![quiz2](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/09318932-0a6c-4a67-b100-04fd9dd794c1)


## ✔ Finished Project:
![section 3- finished project](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/21a1e991-a991-4002-8542-99fea1ded567)

<br>

---
<br>





# 📔 Section 4: React Essentials - Deep Dive

### ◻ Coding Exercise 13 - Using Fragments
```javascript
/* Your task is to edit the existing Summary component such that it outputs the following content:
<h1>Summary</h1>
<p>{text}</p>
Inside the Summary component, this content must not be wrapped by any other HTML element!
For example, this code would be wrong:
<div>
  <h1>Summary</h1>
  <p>{text}</p>
</div> */

function Summary({ text }) {
  return(
  <>
  <h1>Summary</h1>
  <p>{text}</p>
</>
);
}

function App() {
  return (
    <div id="app" data-testid="app">
      <Summary text="Fragments help you avoid unnecessary HTML elements." />
    </div>
  );
}

export default App;
```
![13](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/01645047-ed68-4db9-bb79-f2ee94775cd3)





### ◻ Coding Exercise 14 - Forwarding Props
```javascript
/* Your task is to work on the Input component such that it either returns a <textarea> element or an <input> element, depending on whether a richText prop set on Input is true or false.

I.e., if used like this:
<Input richText />
the Input component should render a <textarea>. Otherwise, it should render an <input>.

In addition, the Input component should forward all other props directly to the returned <textarea> or <input> elements.
I.e., it should be usable like this:
<Input type="text" placeholder="Your name" />
(as seen in the existing App.js file) */


//app.js
import Input from './Input';
function App() {
  return (
    <div id="content">
      <Input type="text" placeholder="Your name" />
      <Input richText placeholder="Your message" />
    </div>
  );
}
export default App;


// input.js
// destructuring that prop and then using it in an if statement.
// As a second step, the Input component is then adjusted to collect all other props that may be set on the component via the special "rest property" syntax.
export default function Input( {richText, ...props} ) {
  // return a <textarea> if a richText prop is true
  // return an <input> otherwise
  // forward / set the received props on the returned elements
    
  // The props object that's created by that syntax is then, as a last step, spread onto the returned elements.
  if (richText){
     return <textarea {...props}/> ;
  }
  else
  {
     return <input {...props}/>;
  }
}


index.css:
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Lato:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(#979a99, #bcc1bf);
  color: #2c312f;
  min-height: 100vh;
}
#content {
  width: 25rem;
  margin: 2rem auto;
  padding: 1rem;
  background: linear-gradient(#5d6965, #5b6d66);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
}
input, textarea {
  font: inherit;
  padding: 0.25rem;
  border-radius: 4px;
  border: 1px solid #979a99;
  background: #e5e8e7;
  width: 100%;
  margin: 1rem 0;
}
```
![14](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/0c6face0-6ed3-4e63-b749-395afbf6b003)








### ◻ Coding Exercise 15 - Creating Flexible Components
```javascript
/* Your task is to build a highly re-usable, custom Button component that can be used in all the following ways
(also see the code in the App.js file):
"Filled" mode (default):
<Button>Default</Button>
or
<Button mode="filled">Filled</Button>
Hint: To make sure the icon becomes visible, wrap the icon component in the button with a <span> that has the class "button-icon" on it.
Also wrap the children prop with a <span>!
You find all the styles (CSS classes) that are required to build a button that supports these different "modes" in the provided index.css file!
All buttons need a button CSS class - and then, depending on their mode, additional classes.
In addition, the custom Button component must accept all standard props that could be set on the built-in <button>.
These props should be forwarded to the default <button> element that will be used in the custom Button component.

Your task is to work on the Button component provided in the Button.js file. Don't add multiple custom components, instead work on that one provided component and make sure that it supports all these different modes & features.
Also make sure, that if no mode is set, the "filled" mode is assumed as a default. */

// Button.js:
// mode prop is extracted from the incoming props object.
// Then it used to dynamically construct a string that contains all to-be-assigned CSS classes.
// Since the task required a default "button mode" of "filled", the mode prop is assigned a default value of 'filled'.
// Therefore, Button can be used without the mode prop and still get that "filled look".
// In addition, the special, built-in children prop is extracted to output the content passed between the <Button> tags.
// As a next step, to support setting all the default <button> props, all remaining props are collected in a props object via ...
// The custom Button should also support icons. Therefore, an Icon prop is extracted from the incoming props.
// It's called Icon and not icon because this prop should hold a component identifier (i.e., a pointer at a component function) as a value.

export default function Button( { children, className, mode= 'filled', Icon, ...props } ) {
 // Todo: Build this component! Important: 
 // Wrap the icon with a <span className="button-icon"> to achieve the target look
 // Also wrap the children prop with a <span>
 
 let cssClasses = `button ${mode}-button`;
 
 // In addition, if the Icon prop is set, the CSS classes are again extended to add the icon-button class
 if (Icon){
     cssClasses += ' icon-button';
 } 
 // Since those props could also include the 'className' prop, that prop's value is merged into the cssClasses string:
 if (className){
     cssClasses += ' ' + className;
 }  
 // These props are then spread onto the built-in <button> element:
 return(
     <button className={cssClasses} {...props}>     
     { Icon && (
      <span className="button-icon">
      <Icon/>
      </span>
     )}     
     <span>{children}</span>     
     </button>
 );
}


// App.js:
import Button from './Button';
import HomeIcon from './HomeIcon';
import PlusIcon from './PlusIcon';
function App() {
  return (
     <div id="app">
      <section>
        <h2>Filled Button (Default)</h2>
        <p>
          <Button>Default</Button>
        </p>
        <p>
          <Button className="filled-button" mode="filled">Filled (Default)</Button>
        </p>
      </section>
      
      <section>
        <h2>Button with Outline</h2>
        <p>
          <Button mode="outline">Outline</Button>
        </p>
      </section>
      
      <section>
        <h2>Text-only Button</h2>
        <p>
          <Button mode="text">Text</Button>
        </p>
      </section>
      
      <section>
        <h2>Button with Icon</h2>
        <p>
          <Button Icon={HomeIcon}>Home</Button>
        </p>
        <p>
          <Button Icon={PlusIcon} mode="text">
            Add
          </Button>
        </p>
      </section>
      
      <section>
        <h2>Buttons Should Support Any Props</h2>
        <p>
          <Button mode="filled" disabled>
            Disabled
          </Button>
        </p>
        <p>
          <Button onClick={() => console.log('Clicked!')}>Click me</Button>
        </p>
      </section>
      
    </div>
  );
}
export default App;

// index.css:
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Lato:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(#f3f0f8, #d6d2db);
  color: #e5d9f1;
  min-height: 100vh;
}
section {
  margin: 1rem auto;
  max-width: 30rem;
}
h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: #030a1b;
}
.button {
  display: inline-block;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background: transparent;
  font-family: 'Lato', sans-serif;
  text-decoration: none;
  cursor: pointer;
  border-radius: 2px;
}
.icon-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.button-icon {
  width: 1rem;
  height: 1rem;
}
.filled-button {
  background: linear-gradient(#7fa1f7, #6085e4);
  color: #030a1b;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}
.filled-button:hover {
  background: linear-gradient(#89a9fb, #6890f6);
}
.filled-button:disabled {
  background: #a3a9b7;
  color: #3a445c;
  box-shadow: none;
  cursor: not-allowed;
}
.outline-button {
  border: 1px solid #2658d6;
  color: #2658d6;
}
.outline-button:hover {
  background: #cbd8fc;
}
.text-button {
  color: #2658d6;
}
.text-button:hover {
  background: #cbd8fc;
}

// PlusIcon.js:
export default function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
    </svg>
  );
}
// HomeIcon.js:
export default function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
        clipRule="evenodd"
      />
    </svg>
  );
}
```
![15](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/2d014149-8799-4927-8e33-27d56c9713cc)









### ◻ Coding Exercise 16 - Two-Way-Binding
```javascript
/* Your task is to collect the values entered into the two input controls
(<textarea> and <input>) via two-way binding.
In addition, you should pass the collected values via the appropriate
props to the already existing Review component.
The final app should allow users to enter values and then see those entered values in the Review
component which is output below the input components. */
// App.js
import React from 'react';
import Review from './Review'
function App() {
// To store the entered values
    const [userFeedback, setUserFeedback] = React.useState('');
    const [studentName, setStudentName] = React.useState('');

//  event object is generated & provided automatically by React.
// event.target refers to the input control, event.target.value therefore contains the value provided by the user.
  function handleFeedbackChange(event) {
    setUserFeedback(event.target.value);
  }
  function handleNameChange(event) {
    setStudentName(event.target.value);
  }  
  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>        
        <p>
{/*first step is to listen to value changes on the <textarea> and <input> elements.*/}
          <label >Your Feedback</label>
          <textarea onChange={handleFeedbackChange} value={userFeedback}/>
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" onChange={handleNameChange} value={studentName}/>
        </p>
        </section>      
      <section id="draft">
        <h2>Your feedback</h2>

{/* To complete the task, the state values passed to Review component by setting its feedback and student props */}
        <Review feedback={userFeedback} student={studentName}/>

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}
export default App;

// Review.js
export default function Review({ feedback, student }) {
  return (
    <figure>
      <blockquote>
        <p>{feedback}</p>
      </blockquote>
      <figcaption>{student}</figcaption>
    </figure>
  );
}
// index.css
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Lato:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(#180d27, #0c0219);
  color: #e5d9f1;
  min-height: 100vh;
}
#feedback {
  max-width: 30rem;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #669ae7;
  color: #041023;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
}

#feedback p {
  margin: 0.5rem 0;
}
#feedback label {
  display: block;
  font-weight: bold;
  text-transform: uppercase;
  color: #364660;
  font-size: 0.85rem;
  margin: 0.25rem 0;
}
#feedback input,
#feedback textarea {
  font: inherit;
  display: block;
  margin: 0 0 1rem 0;
  padding: 0.5rem;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #798aa9;
  background-color: #b4c4e6;
  color: #041023;
}
#draft {
  font-family: 'Lato', sans-serif;
  max-width: 30rem;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #67d7b0;
  color: #0b3929;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  text-align: center;
}
#draft figure {
  margin: 0;
  padding: 0;
}
#draft blockquote {
  margin: 0 2rem;
  padding: 0.5rem 1rem;
  background-color: #65b69a;
  border-radius: 4px;
  color: #042217;
  font-style: italic;
}
#draft blockquote p {
  margin: 0;
}
#draft figcaption {
  margin: 0.2rem 0;
  font-size: 0.75rem;
}
#draft button {
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  background-color: #0b3929;
  color: #ecf8f4;
  font-size: 1rem;
  cursor: pointer;
}
```

![16](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/c7a9133e-2689-4dd6-8e7c-f899e47984a9)

<br>

---
<br>


## 📔 Section 6: Styling React Components:
##### When inspecting the web page, all CSS styles were added dynamically to the DOM, head of the document, by Vite;
![styling react component-1](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/e2824f29-2bca-44a6-b967-afec047c6c0b)


### ◻ Coding Exercise 17 - Dynamic Styling with Inline Styles
```javascript
/* Your task is to help out a colleague and style a h1 element dynamically (with inline styles) depending on which button was pressed.
If the "Yes" button is pressed, the h1 element should receive color:
"green" as an inline style. If the "No" button is pressed, color: "red" should be applied.
Initially, when no button has been clicked yet, the color should be set to "white". */
import React from 'react';
function App() {
  const [choice, setChoice] = React.useState(null);
 
  let textColor = 'white';
 
  if (choice === 'yes') {
    textColor = 'green';
  } else if (choice === 'no') {
    textColor = 'red';
  }
 
  return (
    <div id="app">
      <h1 style={{ color: textColor }}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() => setChoice('yes')}>Yes</button>
        </li>
        <li>
          <button onClick={() => setChoice('no')}>No</button>
        </li>
      </menu>
    </div>
  );
}
```
![17](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/21a72cc2-eb6f-48b8-94f9-eb38d11d8611)

---


### ◻ Coding Exercise 18 - Dynamic Styling with CSS Classes
```javascript
/* Your task is to enhance the demo app that's given to you such that clicking the "Yes" and "No" buttons changes the styling of the h1 heading element.
Whenever the "Yes" button is clicked, the "highlight-green" CSS class should be set on the h1 element. For the "No" button, it's the "highlight-red" class that must be applied.
If not button was clicked yet, no CSS class should be added to the h1 element.*/
function App() {
  const [choice, setChoice] = useState(null);
 
  let cssClass;
 
  if (choice === 'yes') {
    cssClass = 'highlight-green';
  } else if (choice === 'no') {
    cssClass = 'highlight-red';
  }
   return (
    <div id="app">
      <h1 className={cssClass}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() = setChoice('yes')}>Yes</button>
        </li>
        <li>
          <button onClick={() = setChoice('no')}>No</button>
        </li>
      </menu>
    </div>
  );
}
export default App;
```

---


### ◻ Coding Exercise 19 - Exercise: Dynamic Styles
```javascript

```

### ◻ Coding Exercise 20 - Exercise: Fix Errors
```javascript

```






### ◻ Coding Exercise 21 - Accessing DOM Elements with "refs"
```javascript
/* Your given a code snippet that's part of a bigger app that deals with user image uploads.
Since the native, built-in <input type="file"> element is hard to style and doesn't fit the intended app style,
it's hidden via display: none in the provided index.css file.
Therefore, to make the file picker work without being displayed, your task is to ensure that the click event on the <input type="file">
element is triggered whenever the <button>Pick Image</button> is clicked.
This can be achieved by calling the built-in click() method on the underlying input element.
You should use React's "ref" feature to get hold of the <input type="file"> element and execute that click()
method on it whenever the <button> is clicked. */
// Work Plan:
// This ref is "connected" to the <input type="file"> element const filepicker = React.useRef();
// filePicker ref used to get access to the file picker element's underlying JS object.
// Accessing the 'current' property on the filePicker ref. 
// This is necessary because refs always are objects with a current property (which then holds the actual value assigned to the ref).
// Calling the built-in click() on the underlying input object the file picker is then "triggered" without being visible.
// An event listener function is added, and set as a value for the onClick prop.

import React from 'react';
function App() {
  const filePicker = React.useRef();
 
  function handleStartPickImage() {
    filePicker.current.click();
  }
 
  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input data-testid="file-picker" type="file" accept="image/*" ref={filePicker} />
        <button onClick={handleStartPickImage}>Pick Image</button>
      </p>
    </div>
  );
}
```
<img height="300px" src="https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/cffa9c00-1031-4baa-ba10-5947c45ab1e1">


---




### ◻ Coding Exercise 22 - Managing Other Values with Refs -
```javascript
/* Your working on a "Workout" app and your task is to start and stop timers when users click the
"Start" and "Stop" buttons of a selected workout.

You're provided with some code that already displays some workout items,
therefore, you don't need to work on the JSX code or manage any state.

Instead, your task is to set a timer if the "Start" button is clicked and
clear (stop) that timer once the "Stop" button is clicked.

If a timer expires, the same code that should execute if it's stopped manually
(by pressing the "Stop" button) should be executed.

The timer expiration time should be different for every workout - take a closer
look at the Workout component to get access to that workout-specific time.

You also must make sure that different Workout component instances set and manage separate,
independent timers (i.e., when starting timers for "Pushups" and "Squats",
clicking "Stop" for "Squats" should not stop the "Pushups" timer etc).

When a timer expires, the same function that's triggered when the "Stop" button is pressed should be executed.*/

import React from 'react';
export default function Workout({ title, description, time, onComplete }) {
  
    // Create a ref to store the timer ID (for each workout), used to persist the timer ID across re-renders.
  const timer = React.useRef();
  
  
  function handleStartWorkout() {
    // Todo: Start timer
    // Set a timeout to call handleStopWorkout after the specified time.
    // Then store it in timer.current ref.
    // As a first argument a pointer is provided - since that's the function that should be executed whenever the workout is stopped or the timer is done. 
    timer.current = setTimeout(handleStopWorkout, time);
  }


  function handleStopWorkout() {
    // Todo: Stop timer
    // Clear the timeout using the timer ID stored in timer.current.
    // Call the onComplete function to mark the workout as completed.
    clearTimeout(timer.current);
    onComplete();
  }

  return (
    <article className="workout">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{time}</p>
      <p>
      {/*Implement start and stop timers when users click the "Start" and "Stop" buttons of a selected workout.*/}
        <button onClick={handleStartWorkout}>Start</button>
        <button onClick={handleStopWorkout}>Stop</button>
      </p>
    </article>
  );
}


import React from 'react';
import Workout from './Workout';

const workouts = [
  {
    title: 'Pushups',
    description: 'Do 30 pushups',
    time: 1000 * 60 * 3,
  },
  {
    title: 'Squats',
    description: 'Do 30 squats',
    time: 1000 * 60 * 2,
  },
  {
    title: 'Pullups',
    description: 'Do 10 pullups',
    time: 1000 * 60 * 3,
  },
];

function App() {   /*No need to change this file*/
  const [completedWorkouts, setCompletedWorkouts] = React.useState([]);

  // Updates the completedWorkouts state by adding the completed workout title to the array.
  function handleWorkoutComplete(workoutTitle) {
    setCompletedWorkouts((prevCompletedWorkouts) => [
      ...prevCompletedWorkouts,
      workoutTitle,
    ]);
  }
  return (
    <main>
      <section>
        <h2>Choose a workout</h2>
        <ul>
          {workouts.map((workout) => (
            <li key={workout.title}>
            {/* Spread the workout object to pass title, description, and time as props.
            Pass the handleWorkoutComplete function to the Workout component. */}
              <Workout
                {...workout}
                onComplete={() => handleWorkoutComplete(workout.title)}
              />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Completed workouts</h2>
        <ul>
        {/* Map through completedWorkouts state and render a list item for each completed workout */}
          {completedWorkouts.map((workoutTitle, index) => (
            <li key={index}>{workoutTitle}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
export default App;

// index.css:
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Lato:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(#180d27, #0c0219);
  color: #e5d9f1;
  min-height: 100vh;
}
section {
  width: 90%;
  max-width: 40rem;
  margin: 3rem auto;
  padding: 2rem;
  background: #6a887f;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  color: #000000;
}
section h2 {
  text-align: center;
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
  font-size: 1.25rem;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
article {
  margin: 1rem 0;
  padding: 1rem;
  background: #87efce;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  color: #000000;
  width: 20rem;
}
article h3 {
  font-size: 1.25rem;
  margin: 0;
}
article p {
  margin: 0.25rem 0;
  font-size: 0.875rem;
}
article button {
  margin: 0.5rem 0.5rem 0.5rem 0;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background: #054a35;
  color: #ffffff;
  font-size: 0.875rem;
  cursor: pointer;
}
article button:hover {
  background: #087f5b;
}
```
![22](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/0444bffb-5048-45b2-a54f-30f5b5969b79)



---







### ◻ Coding Exercise 23 - Forwarding Refs -

```javascript
/* Your task is to finish a custom Input component that was created by a colleague.

The Input component must be highly configurable and meet the following requirements:

It must accept a label prop which is used to set the text for the <label> element (i.e., between the <label> tags)

It must accept all other attributes that could be added to <input> elements
and set those props on the <input> element

It must accept the special ref prop and connect the received ref to the <input> element

This Input component can then be used in the App component. There, it's actually
already being used and some props (the label and type props) are already set on the custom Input component.

But in addition, your task also is to read the entered name and email values inside
of the handleSaveData function with help of React's "ref" feature.

To achieve this task, you must ensure that the custom Input component is able to
receive the special ref prop and that this prop is then "connected" to the returned <input> element.

Of course you also must add fitting refs to the App component and use them in
handleSaveData to retrieve the actual entered input data.

The read values must then be stored in the already-existing userData object.*/

import React, { forwardRef } from 'react';
 
const Input = React.forwardRef(function Input({ label, ...props }, ref) {
  return (
    <p className="control">
      <label>{label}</label>
      <input ref={ref} {...props} />
    </p>
  );
}); 
export default Input;

import React from 'react';
import Input from './Input';
 
export const userData = {
  name: '',
  email: '',
};
 
export function App() {
  const name = React.useRef();
  const email = React.useRef();
 
  function handleSaveData() {
    const enteredName = name.current.value;
    const enteredEmail = email.current.value;
 
    userData.name = enteredName;
    userData.email = enteredEmail;
 
    console.log(userData);
  }
 
  return (
    <div id="app">
      <Input type="text" label="Your Name" ref={name} />
      <Input type="email" label="Your E-Mail" ref={email} />
      <p id="actions">
        <button onClick={handleSaveData}>Save Data</button>
      </p>
    </div>
  );
}

//index.css
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Lato:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(#180d27, #0c0219);
  color: #e5d9f1;
  min-height: 100vh;
}
#app {
  margin: 2rem auto;
  padding: 1rem;
  max-width: 30rem;
  text-align: center;
  border-radius: 6px;
  background: linear-gradient(#341a89, #3a1967);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
}
.control {
  margin-bottom: 1rem;
  text-align: left;
}
.control label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: #e5d9f1;
}
.control input {
  display: block;
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  font-family: 'Lato', sans-serif;
  border: 1px solid #e5d9f1;
  border-radius: 4px;
  background: transparent;
  color: #e5d9f1;
}
#actions {
  text-align: right;
}
#actions button {
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  border: none;
  border-radius: 4px;
  background: none;
  color: #e5d9f1;
  cursor: pointer;
}
#actions button:hover {
  background: rgba(255, 255, 255, 0.1);
}
```
![Screenshot](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/882202ba-3c1f-4f43-8725-76c6310284a2)




---







### ◻ Coding Exercise 24 - Exposing Component APIs -
```javascript
/* Your working on a part of an application that contains a form which should
be resettable from outside that form.

A colleague prepared a Form component that contains a couple of dummy
inputs and a "Save" button that's not doing anything.

Your task is to expose a clear() function from inside that Form component so
that other components that use the Form component can call that function to reset the form.

Because that exposed clear() function should call the form's built-in reset()
method (the JS form object, which is the underlying object of the <form> element,
has a reset() method that does exactly what its name implies).
So the Form component should be usable like this:
function SomeComponent() {
  const form = React.useRef();
 
  function handleClear() {
    form.current.clear();
  }
 
  return <Form ref={form}/>
}
After adding this feature to the Form component you should tweak the App component
to establish a "connection" to the Form component and call the newly exposed clear()
method from inside the App component's handleRestart() function.
So you should add code similar to the above code snippet to the App component. */




```

---




### ◻ Coding Exercise 25 - Working with Portals -
```javascript
/* A colleague asked you to finish work on a Toast component they worked on.
That component should output a short info message upon certain page events - e.g.,
once a user successfully enrolled into a course.

To optimize the final DOM structure, the rendered content of the Toast component
should be injected directly into the <body> element (which could be selected via document.querySelector('body')). It should NOT be rendered in the place where the
<Toast /> component is used in the JSX code!

For this task, the edited Toast component should then be displayed conditionally once a
user clicked the Enrol button in the App component.

After 3 seconds (set via setTimeout), the Toast component should be removed from the page again. */

import Toast from './Toast';
import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useRef } from 'react';

function App() {    
const timer = React.useRef();
const [showToast, setShowToast] = React.useState(false);

  function handleEnrol() {
    // Todo: Show toast
    setShowToast(true);

    setTimeout(() => {
      // Todo: hide toast
        setShowToast(false);
    }, 3000);
  }

  return (
    <div id="app">
      {/* Todo: Render <Toast /> component (conditionally) here */}
      
      {showToast && <Toast message="You have successfully enrolled!"/>}

      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
        <button onClick={handleEnrol}>Enrol</button>
      </article>
    </div>
  );
}
export default App;


import React from 'react';
import ReactDOM from 'react-dom';

export default function Toast({ message }) { 
  return ReactDOM.createPortal(
    <aside className="toast" data-testid="toast">
      <p>{message}</p>
    </aside>,
       document.querySelector('body')
  );
}

index.css:
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Lato:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(#180d27, #0c0219);
  color: #e5d9f1;
  min-height: 100vh;
}
#app {
  margin: 2rem auto;
  padding: 1rem;
  max-width: 30rem;
  text-align: center;
  border-radius: 6px;
  background: linear-gradient(#341a89, #3a1967);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
}
button {
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background: #e5d9f1;
  color: #341a89;
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-out;
}
.toast {
  position: absolute;
  top: 2rem;
  left: 3rem;
  padding: 1rem;
  border-radius: 4px;
  background: rgba(118, 234, 189, 0.8);
  color: black;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  animation: fade-slide-in-from-left 0.3s ease-out;
}
.toast p {
  margin: 0;
}
@keyframes fade-slide-in-from-left {
  0% {
    opacity: 0;
    transform: translateX(-1rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  } 
}
```
![portals](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/d67eff23-ef8a-4f1e-b1f9-0567c3c69096)


---









### ◻ Coding Exercise 26 - 
```javascript




```

---













### ◻ Coding Exercise 27 - 
```javascript

```

### ◻ Coding Exercise 28 - 
```javascript

```

### ◻ Coding Exercise 29 - 
```javascript

```

### ◻ Coding Exercise 30 - 
```javascript

```























































































































































































<br>

---
<br>


## 📔 Section 2: JavaScript Refresher:
### ◻ Arrow Function: 
```javascript
default function (){
  console.log('hello');
}
// equal to:
default (userName, message) => {
  return userName + message;
}

// More on the Arrow Function Syntax:
// 1) If takes exactly one parameter, you may omit the wrapping parentheses.
default userName => {
  return userName + message;
}

// 2) If your arrow function contains no other logic but a return statement, you may omit the curly braces and the return keyword.
number => number * 3;
// equal to:
number => { 
  return number * 3;
}

// 3) Special case: Just returning an object
// If you go for the shorter alternative explained in 2) and you're trying to return a JavaScript object,
// you may end up with the following, invalid code: number => { age: number }; // trying to return an object
// This code would be invalid because JavaScript treats the curly braces as function body wrappers
// (not as code that creates a JS object).
// To "tell" JavaScript that an object should be created (and returned) instead,
// the code would need to be adjusted like this:
number => ({ age: number }); // wrapping the object in extra parentheses
```

### ◻ Objects:
```javascript
const user = {
name: "Shani",
hobby: "fitness",
greet(){
  console.log ("Hello");
  console.log (this.hobby);
}
};
console.log (user.name);
user.greet();


Class User{
  constructor(name,age){
    this.name = name;
    this.hobby = hobby;
}

greet(){
  console.log ("Hi");
}

const user1 = new User("Shai", "painting");
user1.greet();
```


### ◻ Arrays:
```javascript
const hobbies = ["sport", "cooking", "reading"];
  console.log (hobbies[0]);

hobbies.push("working");

const index = hobbies.findIndex((item) => {
  return item === 'sport';  
});
console.log(index); //0
//equal to:
const index = hobbies.findIndex((item) => item === 'sport');

const editedHobbies = hobbies.map((item) => item = "!");


// Array Methods
function transformToObjects(numberArray) {
    // transform a list of numbers into a list of JavaScript objects. And return an array of objects    
    const newArray = numberArray.map ((item) => ({val:item}))
    return newArray;
}
// For example, for the provided input [1, 2, 3] the function should return [{val: 1}, {val: 2}, {val: 3}].


// Destructing
// To destruct an array we add '[]' 
const [firstName, lastName] = ["Shani", "Bider"];
  console.log (firstName);
  console.log (lastName);

// To destruct an object we add '{}'. Must use the same property name.
// Could also use alias
const { name: userName, hobby } = {
name: "Shani",
hobby: "fitness",
};
  console.log (usertName);
  console.log (hobby);
```

#### The Spread Operator `...`
```javascript
const hobbies = ["sport", "cooking", "reading"];

const user = {
name: "Shani",
hobby: "fitness"
}
const newHobbies = ["reading"];
const mergedHobbies = [...hobbies,...newHobbies];

const extendedUser = {
  isAdmin: true,
  ...user    //here ... will pull out all the 'key,value' pairs from the user object, and add them to that object here
}
/*
will log:
isAdmin: true
name: "Shani"
hobby: "fitness"
*/
```


```javascript
const password = prompt("your password");

if (password === "Hello"){
  console.log("Hello works");
} else if (password === "hello"){
  console.log("hello works");
} else {
  console.log("access failed");
}
```



### ◻ Functions as values
```javascript
function handleTimeout(){
  console.log("Timed out");
}

function handleTimeout2 = () => {
  console.log("Timed out");
}

setTimeout(handleTimeout,2000);  // setTimeout is default js function
setTimeout(handleTimeout2,3000);
setTimeout( () =>{
  console.log("Timed out");
}, 4000);


// Functions inside of functions
function init() {
  function greet() {
    console.log(“Hi!“);
  }

  greet();
}
init();


const hobbies = ["Sports", "Cooking"];
hobbies = [];
hobbies.push("Working");
console.log(hobbies);


// let
// The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value.
let x = 1;

if (x === 1) {
  let x = 2;
  console.log(x);  // Expected output: 2
}
console.log(x);// Expected output: 1


// const
// The const declaration declares block-scoped local variables.
// The value of a constant can't be changed through reassignment using the assignment operator,
// but if a constant is an object, its properties can be added, updated, or removed.
const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
  // Expected output: TypeError: invalid assignment to const 'number'
  // (Note: the exact output may be browser-dependent)
}
console.log(number);// Expected output: 42


// ES6 Arrow Functions
// Arrow functions are a different way of creating functions in JavaScript. Besides a shorter syntax, they offer advantages when it comes to keeping the scope of the this  keyword (see here).
// Arrow function syntax may look strange but it's actually simple.

function callMe(name) { 
    console.log(name);
}

// which you could also write as:
const callMe = function(name) { 
    console.log(name);
}

// becomes: 
const callMe = (name) => { 
    console.log(name);
}


// Important: 
// When having no arguments, you have to use empty parentheses in the function declaration:
const callMe = () => { 
    console.log('Max!');
}

// When having exactly one argument, you may omit the parentheses:
const callMe = name => { 
    console.log(name);
}

// When just returning a value, you can use the following shortcut:
const returnMe = name => name

// That's equal to:
const returnMe = name => { 
    return name;
}


// Exports & Imports
// In React projects (and actually in all modern JavaScript projects),
// you split your code across multiple JavaScript files - so-called modules.
// You do this, to keep each file/ module focused and manageable.
// To still access functionality in another file, you need export  (to make it available) and import  (to get access) statements.

// You got two different types of exports: default (unnamed) and named exports:

default => export default ...; 

named => export const someData = ...; 

// You can import default exports like this:
import someNameOfYourChoice from './path/to/file.js'; 

// Surprisingly, someNameOfYourChoice  is totally up to you.

// Named exports have to be imported by their name:
import { someData } from './path/to/file.js'; 

// A file can only contain one default and an unlimited amount of named exports.
// You can also mix the one default with any amount of named exports in one and the same file.
// When importing named exports, you can also import all named exports at once with the following syntax:
import * as upToYou from './path/to/file.js'; 

// `upToYou`  is - well - up to you and simply bundles all exported variables/functions in one JavaScript object.
// For example, if you export const someData = ...  (/path/to/file.js ) you can access it on upToYou  like this: upToYou.someData .


// Classes
// Classes are a feature which basically replace constructor functions and prototypes. You can define blueprints for JavaScript objects with them. 

// Like this:
class Person {
    constructor () {
        this.name = 'Max';
    }
}
 
const person = new Person();
console.log(person.name); // prints 'Max'

/* In the above example, not only the class but also a property of that class (=> name ) is defined. The syntax you see there, is the "old" syntax for defining properties. In modern JavaScript projects (as the one used in this course), you can use the following, more convenient way of defining class properties: */
class Person {
    name = 'Max';
}
 
const person = new Person();
console.log(person.name); // prints 'Max'

// You can also define methods. Either like this:
class Person {
    name = 'Max';
    printMyName () {
        console.log(this.name); // this is required to refer to the class!
    }
}
 
const person = new Person();
person.printMyName();

// Or like this:
class Person {
    name = 'Max';
    printMyName = () => {
        console.log(this.name);
    }
}
 
const person = new Person();
person.printMyName();

// The second approach has the same advantage as all arrow functions have: The this  keyword doesn't change its reference.

// You can also use inheritance when using classes:
class Human {
    species = 'human';
}
 
class Person extends Human {
    name = 'Max';
    printMyName = () => {
        console.log(this.name);
    }
}
 
const person = new Person();
person.printMyName();
console.log(person.species); // prints 'human'



// Spread & Rest Operator
// The spread and rest operators actually use the same syntax: `... `
// It's usage determines whether you're using it as the spread or rest operator.

// Using the Spread Operator:
// The spread operator allows you to pull elements out of an array (=> split the array into a list of its elements) or pull the properties out of an object. Here are two examples:

const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5]; // This now is [1, 2, 3, 4, 5];

// Here's the spread operator used on an object:
const oldObject = {
    name: 'Max'
};
const newObject = {
    ...oldObject,
    age: 28
};

// newObject  would then be
{
    name: 'Max',
    age: 28
}

/* The spread operator is extremely useful for cloning arrays and objects. Since both are reference types (and not primitives), copying them safely (i.e. preventing future mutation of the copied original) can be tricky. With the spread operator you have an easy way of creating a (shallow!) clone of the object or array.*/



// Destructuring
// Destructuring allows you to easily access the values of arrays or objects and assign them to variables.

// Here's an example for an array:

const array = [1, 2, 3];
const [a, b] = array;
console.log(a); // prints 1
console.log(b); // prints 2
console.log(array); // prints [1, 2, 3]


// And here for an object:
const myObj = {
    name: 'Max',
    age: 28
}
const {name} = myObj;
console.log(name); // prints 'Max'
console.log(age); // prints undefined
console.log(myObj); // prints {name: 'Max', age: 28}


// Destructuring is very useful when working with function arguments. Consider this example:
const printName = (personObj) => {
    console.log(personObj.name);
}
printName({name: 'Max', age: 28}); // prints 'Max'

// Here, we only want to print the name in the function but we pass a complete person object to the function.
// Of course this is no issue but it forces us to call personObj.name inside of our function.
// We can condense this code with destructuring:
const printName = ({name}) => {
    console.log(name);
}
printName({name: 'Max', age: 28}); // prints 'Max')

// We get the same result as above but we save some code.
// By destructuring, we simply pull out the name  property and store it in a variable/ argument named name  which we then can use in the function body.
```


#### JS Array Functions
```javascript
Particularly important in this course are:

map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
```





<br>

---
<br>
<div align=center>
  <img height="350px" src="https://github.com/shanibider/React---The-Complete-Guide-2024/assets/72359805/3d5c195b-4177-4da2-ae13-5234de5ed3cd">
</div> <br>

---

### ◻ Codesandbox Coding Exercise:
#### [👉🏻 First React App](https://codesandbox.io/p/sandbox/first-react-app-zj5cx1?file=%2Fsrc%2FApp.js)

![2](https://github.com/shanibider/React-The-Complete-Guide-2024/assets/72359805/61e6dca9-117e-4f99-8772-48739fde954f)

```javascript
import { useState } from "react";
import "./styles.css";

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ],
  [
    "Vanilla JavaScript requires imperative programming",
    "Imperative Programming: You define all the steps needed to achieve a result",
    "React on the other hand embraces declarative programming",
    "With React, you define the goal and React figures out how to get there"
  ]
];

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div>
      <header>
        <img src="react-logo-xs.png" alt="React logo" />
        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Why React?
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Core Features
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Related Resources
          </button>
          <button
            className={activeContentIndex === 3 ? "active" : ""}
            onClick={() => setActiveContentIndex(3)}
          >
            React vs JS
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
```

```css
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background-color: #181c1f;
  color: #bdd1d4;
  margin: 2rem;
}

header {
  margin: 2rem 0;
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

header img {
  width: 3rem;
  object-fit: contain;
}

header h1 {
  margin: 0;
  color: #48d9f3;
}

header p {
  margin: 0;
  color: #82c2ce;
}

#tabs {
  max-width: 32rem;
  margin: 2rem 0;
  overflow: hidden;
}

#tabs menu {
  margin: 0;
  padding: 0;
  display: flex;
  gap: 0.25rem;
}

#tabs button {
  font: inherit;
  font-size: 0.85rem;
  background-color: #282f33;
  border: none;
  border-bottom-color: #48d9f3;
  color: #e0eff1;
  border-radius: 4px 4px 0 0;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease-out;
}

#tabs button:hover,
#tabs button.active {
  background-color: #48d9f3;
  color: #273133;
}

#tab-content {
  background-color: #2d3942;
  border-radius: 0 4px 4px 4px;
  padding: 1rem;
}

#tab-content li {
  margin: 0.75rem 0;
}
```

<br>

---
<br>


## 🥇What I've Learned 
<img height=40px src="https://skillicons.dev/icons?i=react"> <img height=40px src="https://skillicons.dev/icons?i=js"> <img height=40px src="https://skillicons.dev/icons?i=nextjs"> <img height=40px src="https://skillicons.dev/icons?i=redux">

- [x] Mastered `React` from the ground up
- [x] Built multiple high-quality demo apps
- [x] Managed `complex state` efficiently with `React's Context API` & `Redux`
- [x] Implemented `user authentication`
- [x] Gained experience with `React Unit Testing`


## 🎯 Key Topics Covered 

- [x] Introduction to `React.js`
- [x] All the `core basics`: How React works, building components with React & building UIs with React
- [x] Building `components`, working with `props` & dynamic `data binding`
- [x] `React Hooks (in-depth)`
- [x] Working with built-in Hooks and building custom Hooks
- [x] `Styling React` apps with "Styled Components" and "CSS Modules"
- [x] Working with "Fragments" & "Portals"
- [x] Dealing with side effects
- [x] `Class-based components` and `functional components`
- [x] Sending `Http requests` & handling transitional `states + responses`
- [x] Handling `forms` and `user input` (incl. validation)
- [x] `Redux` & Redux Toolkit
- [x] `Routing` with React Router
-[x]  An in-depth introduction into `Next.js`
- [x] `Deploying` React Apps
- [x] Implementing `Authentication`
- [x] `Unit Tests`
- [x] Combining React with TypeScript
- [x] Adding Animations
<br>

---
<br>




> [!TIP]
> Feel free to explore my repositories and see my projects. I'm always open to collaboration and welcome feedback to improve and grow as a developer. Let's code something amazing together! 🚀😊👩‍💻💻


## 📫 Connect with me 😊
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shani-bider/)
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://shanibider.github.io/Portfolio/)
[![gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:shanibider@gmail.com)

<footer>
<p style="float:left; width: 20%;">
Copyright © Shani Bider, 2024
</p>
</footer>
