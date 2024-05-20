import './index.css';
import Employee from './components/Employee';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const em = true;
  const [employees, setEmployees ] = useState(
    [
      {
        name: "caleb",
        role: "Manager",
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        name: "Zayn",
        role: "SDE",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        name: "Sal",
        role: "Database admin",
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        name: "Melanie",
        role: "Dev",
        img: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
    ]);
  return (
    <div className="App">
      {em ?
        (
          <>
            <div className="flex flex-wrap justify-center">
              {employees.map((employee) => {
                console.log(uuidv4()); 
                return (
                  <Employee 
                    key = {uuidv4()}
                    name={employee.name} 
                    role={employee.role} 
                    img={employee.img} 
                  />
                );
              })}
            </div>
          </> 
        )
        : 
        ( <p> Unable to see</p> )
      }
    </div>
  );
}

export default App;
