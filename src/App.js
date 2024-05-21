import './index.css';
import Employee from './components/Employee';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const em = true;
  const [role, setRole] = useState('dev');
  const [employees, setEmployees ] = useState(
    [
      {
        id: 1,
        name: "caleb",
        role: "Manager",
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: 2,
        name: "Zayn",
        role: "SDE",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: 3,
        name: "Sal",
        role: "Database admin",
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: 4,
        name: "Melanie",
        role: "Dev",
        img: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
    ]);
    function updateEmployee(id, newName, newRole) {
      const updatedEmployees = employees.map((employee) => {
          if (id == employee.id) {
              return { ...employee, name: newName, role: newRole };
          }

          return employee;
      });
      setEmployees(updatedEmployees);
  }
  return (
    <div className="App">
      {em ?
        (
          <>
            <input
              type="text"
              onChange={(e) => {
                  setRole(e.target.value);
              }}
            />
            <div className="flex flex-wrap justify center">
              {employees.map((employee) => {
                console.log(uuidv4()); 
                return (
                  <Employee 
                    key = {employee.id}
                    id={employee.id}
                    name={employee.name} 
                    role={employee.role} 
                    img={employee.img} 
                    updateEmployee = {updateEmployee}
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
