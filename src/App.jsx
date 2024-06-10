import React from 'react';
import Card from './Card';
import Data from './Data';


const App = () => ( 
    <>
    <h1 className='heading_style'> List of top Netflix Sereis </h1>
    {Data.map((val , index) => {
        console.log(index);
        return(
            < Card 
                key = {val.id}
                sname = {val.sname}
                imgsrc ={val.imgsrc}
                title = {val.title}
                link = {val.link}
            />
        );
    })}
</>
);

export default App;
        






// ternary operator
// SYNTAX:-
// conditon? exprIfTrue : exprIfFalse