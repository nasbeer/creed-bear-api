import React, { useEffect, useState } from "react";
import userService from "../services/userService";

export default function Users() {
  const [users, setusers] = useState([]);
  const [selectedusers, setselectedusers] = useState();

  useEffect(() => {
    retriveusers();
  }, []);

  const retriveusers = async () => {
    const response = await userService.getAll();
    console.log("User List: ", response);
    setusers(response.data);
  };
//   const update = async(id)=>{
//     const updatedusers = users.filter((users) => users.id === id);
//     console.log("updatedusers", updatedusers);
//     setusers(updatedusers);
//     const response = await userService.update(id);
//    alert("Updated Details:", response);

//   }
  const removeAll = async (id) => {
    const updatedusers = users.filter((users) => users.id === id);
    console.log("updatedusers", updatedusers);
    setusers(updatedusers);
   
    const response = await userService.remove(id);

    console.log("Deleted User: ", id, response);
  };

 

  return (
    <div className=" row">
      
      <div className="col-md-6 pt-2">
        <h4>User List</h4>

        <ul className="list-group">
       

          {users?.map((user) => (
            <>
              <li
                key={user.id}
                onClick={() => setselectedusers(user)}
                className={"list-group-item "}
              >
                {user.name}
              </li>
            
            </>
          ))}
        </ul>
      </div>
      <div className="col-md-6">
        {selectedusers ? (
          <div className="pt-3">
            <h4>Details of {selectedusers.name}</h4>
            <div>
              <label>
                <strong>ID:</strong>
              </label>{" "}
              {selectedusers.id}
            </div>
            
            <div>
              <label>
                <strong>Name:</strong>
              </label>{" "}
              {selectedusers.name}
            </div>
            <div>
              <label>
                <strong>Email:</strong>
              </label>{" "}
           <a href="mailto://{selectedusers.email}" className="text-lowercase">   {selectedusers.email}</a>
            </div>
           
            <div>
              <label>
                <strong>Address:</strong>
              </label>{" "}
              {selectedusers.address.city}
            </div>
            <div>
              <label>
                <strong>Completed:</strong>
              </label>{" "}
              {selectedusers.completed ? "Pending" : "Published"}
            </div>
            <button
              className=" btn btn-sm btn-danger "
              onClick={() => {removeAll(selectedusers.id);
                               setselectedusers(null)}}
            >
              Delete
            </button>
            <button
              className="m-3 btn btn-sm btn-warning d-none "
            //  onClick={() => update(selectedusers.id)}
            >
              Update
            </button>
      
          </div>
        ) : (
          <div>
            
            <p className="pt-4">Please select any of the User</p>
          </div>
        )}
      </div>
    </div>
  );
}
