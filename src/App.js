import Employee from './Employee';
import './App.css';

function App() { 
let emp = [{ name: 'John', age: 30 },
{ name: 'Jane', age: 25 },
{ name: 'Doe', age: 35 }];

return (
  <div className="App">

   {
    emp.map((obj)=>{
      return <Employee name={obj.name} age={obj.age} key={obj.name} />
    })
   }


  </div>
);

}
export default App;
