import { variables } from "./Variables";
import { useNavigate } from "react-router-dom";
let Id = 0;
let Name = "";
let Age = 0;
let City = "";

export const Add = () => {
  let history = useNavigate();

  function changeEmployeeId(e) {
    Id = e.target.value;
  }

  function changeEmployeeName(e) {
    Name = e.target.value;
  }

  function changeEmployeeAge(e) {
    Age = e.target.value;
  }

  function changeEmployeeCity(e) {
    City = e.target.value;
  }

  function createClick() {
    fetch(variables.API_URL, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Id: Id,
        Name: Name,
        Age: Age,
        City: City,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {},
        (error) => {
          alert("Record is already exist");
        }
      );
    history("/home");
  }
  function updateClick(em) {
    fetch(variables.API_URL, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Id: Id,
        Name: Name,
        Age: Age,
        City: City,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {},
        (error) => {
          alert("Failed");
        }
      );
    history("/home");
  }
  return (
    <div>
      <h3> Add / Update Employee Details </h3>{" "}
      <form>
        <label>
          Id:
          <input type="text" name="Id" placeholder="Id" onChange={changeEmployeeId}/>
        </label>
        <br />
        <label>
          Name:
          <input type="text" name="Name" placeholder="Name" onChange={changeEmployeeName}/>
        </label>
        <br />
        <label>
          Age:
          <input type="text" name="Age" placeholder="Age" onChange={changeEmployeeAge}/>
        </label>
        <br />
        <label>
          City:
          <input type="text" name="City" placeholder="City" onChange={changeEmployeeCity}/>
        </label>
        <br />
        <button className="marginbutton" type="submit" onClick={() => createClick()}>Add</button>
        <button className="marginbutton" type="submit" onClick={() => updateClick()}>Update</button>
      </form>
      <div>
        <button onClick={() => {history("/home");}}>Home</button>
      </div>
    </div>
  );
};
export default Add;