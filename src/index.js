import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  './index.css';
ReactDOM.render(<App />, document.getElementById('root'));












// map() methods creates a new array with the result of calling a function for every array element.
// map() method calls the provided function once for each element in an array , in order.

// SYNTAX:-
// array.map(function(currentvalue , index , arr), thisValue)
// arr and index are optional



















// Lecture 11
// import React from 'react';
// import ReactDOM from 'react-dom';

// var fname = "Chinu";
// var lname = "Garg";

// ReactDOM.render(
//     <>
//     <h1> Heyy {`${fname} ${lname}`}!!!</h1>
//     <p>Your Luck Percentage is {Math.floor(Math.random()*100)}%.
//     </p>
//     </>,
//     document.getElementById('root')
// );


// Challenge 2
// import React from 'react';
// import ReactDOM from 'react-dom';

// var name = 'Ishika';
// var date = new Date().toLocaleDateString();
// var time = new Date().toLocaleTimeString();

// ReactDOM.render(
//     <>
//     <h1> Hello My name is {name}.</h1>
//     <p> {date} </p>
//     <p> {time} </p>
//     </>,
//     document.getElementById('root')
// );


// Internal CSS
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// var img1 = "https://picsum.photos/200/300";
// var img2 = "https://picsum.photos/210/300";
// var img3 = "https://picsum.photos/220/300";
// var img4 = "https://picsum.photos/230/300";

// .heading{
//     color: aqua;
//     text-align: center;
//     text-shadow: 0px 2px 4px rgb(144, 250, 250) ;
//     margin: 80px 0px;

// }

// internal CSS
// var heading = {
//     color : 'aqua' ,
//     textAlign : 'center' ,
//     textShadow: '0px 2px 4px rgb(144, 250, 250)' ,
//     margin : '80px 0px'
// }
// ReactDOM.render(
// <>
// <h1 style={heading}> My Personal Gallery</h1>
// <div className='image'>
// <img src = {img1}  alt = "Random Image"/>
// <img src = {img2}  alt = "Random Image"/>
// <img src = {img3}  alt = "Random Image"/>
// <img src = {img4}  alt = "Random Image"/>
// </div>
// </> ,
// document.getElementById('root'));


// Greeting Challenge
/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

var date = new Date();
var hours = date.getHours(); 

var greeting

const cssStyle = {
    
}

if(hours >= 1 && hours <= 11)
{
    greeting = 'Good Morning';
    cssStyle.color = 'green';
}

else if( hours >=12 && hours <= 19)
{
    greeting = 'Good Afternoon';
    cssStyle.color = 'orange';

}

else if( hours > 19 && hours <=23)
{
    greeting = 'Good Night';
    cssStyle.color = 'black';
}

ReactDOM.render(
<div className = "container" >
<h1> Hello Sir ,<span  style={cssStyle}>  {greeting} </span>.</h1>
</div>,
document.getElementById('root'));  */
