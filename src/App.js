import React from 'react';
import P from "./component/produit"
import Nav from "./component/Nav"
import './App.css';

const produit=[
    
  {category:"Electronics",price :"1000" ,name:"myteck"},
  {category:"Clothes",price:"1000", name:"zara"}, {category:"Electronics",price :"1000" ,name:"myteck"},
  {category:"Clothes",price:"1000", name:"zara"}, {category:"Electronics",price :"1000" ,name:"myteck"},
  {category:"Clothes",price:"1000", name:"zara"}, {category:"Electronics",price :"1000" ,name:"myteck"},
  {category:"Clothes",price:"1000", name:"zara"},
] 
function App() {
  return (
    <div className="App">
      <Nav/>
    <P x={produit}/>
    </div>
  );
}

export default App;
