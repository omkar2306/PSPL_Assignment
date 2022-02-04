import react, { useState } from "react";
import { variables } from "./Variables";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const [employees, setEmployee] = useState([]);
  let history = useNavigate();
  function refreshList() {
    fetch(variables.API_URL)
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data);
      });
  }
  function deleteClick(id) {
    if (window.confirm("Are you sure?")) {
      fetch(variables.API_URL + id, {
        method: "delete",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      fetch(variables.API_URL)
        .then((res) => res.json())
        .then(
          (result) => {
            refreshList();
          },
          (error) => {
            alert("Failed");
          }
        );
    }
  }
  return (
    <div>
      {refreshList()} <h1> Employee Details </h1>
      <table border="1">
        <thead>
          <tr>
            <th> EmployeeId </th> 
			<th> EmployeeName </th> 
			<th> Age </th>
            <th> City </th> 
			<th> Delete </th> 
          </tr>
        </thead>
        <tbody>
          {employees.map((em) => (
            <tr key={em.Id}>
              <td> {em.Id} </td> 
			  <td> {em.Name} </td> 
			  <td> {em.Age} </td>
              <td> {em.City} </td>
              <td>
                <button type="button" onClick={() => deleteClick(em.Id)}>DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Home;