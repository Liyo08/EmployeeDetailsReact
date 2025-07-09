import Employee from './Employee';
import './App.css';

function App() { 
let emp = [{ name: 'John', age: 30 },
{ name: 'Jane', age: 25 },
{ name: 'Doe', age: 35 }];

return (
  <div className="App">

   {
    emp.map((obj,index)=>{
      return <Employee key={index} {...obj} />
    })
   }


  </div>
);

}
export default App;
