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
// const update = async(id)=>{
// const updatedusers = users.filter((users) => users.id === id);
// console.log("updatedusers", updatedusers);
// setusers(updatedusers);
// const response = await userService.update(id);
// alert("Updated Details:", response);

// }
const removeAll = async (id) => {
const updatedusers = users.filter((users) => users.id !== id);
console.log("updatedusers", updatedusers);
setusers(updatedusers);

const response = await userService.remove(id);

console.log("Deleted User: ", id, response);
};



return (
<div className=" row">

    <div className="col-md-6 pt-2 pl-0">
        <h4>User List</h4>

        <ul className="list-group">


            {users?.map((user) => (
            <>
                <li key={user.id} onClick={()=> setselectedusers(user)}
                    className={"list-group-item "}
                    >
                    {user.first_name} {user.last_name}
                </li>

            </>
            ))}
        </ul>
    </div>
    <div className="col-md-6 border rounded card p-0">
        {selectedusers ? (
        <div className="">
            <div className="d-flex justify-content-between align-items-center card-header">
                <h4 className="pull-left">Details of {selectedusers.first_name}</h4>
                    <span className="pull-right">
                        <img src={selectedusers.avatar} className="avatar" />
                    </span>
            </div>
            <div className="card-body p-3">
                <div className="d-flex justify-content-between align-items-center">
                    <label className="pull-left">
                        <strong>ID:</strong>
                    </label>{" "}
                    <span className="pull-right">{selectedusers.id}</span>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    <label className="pull-left">
                        <strong>Full Name:</strong>
                    </label>{" "}
                    <span className="pull-right">{selectedusers.first_name} {selectedusers.last_name}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <label className="pull-left">
                        <strong>Email:</strong>
                    </label>{" "}
                    <span className="pull-right"> <a href="mailto://{selectedusers.email}" className="text-lowercase">
                            {selectedusers.email}</a></span>
                </div>

            </div>
            <div className="card-footer pull-right">
                <button className=" btn btn-sm btn-danger " onClick={()=> {removeAll(selectedusers.id);
                    setselectedusers(null)}}>
                    Delete
                </button>
                <button className="m-3 btn btn-sm btn-warning d-none " >
                    {/* // onClick={()=> update(selectedusers.id)} */}
                    Update
                </button>
            </div>
        </div>

        ) : (
        <div>

            <p className="pt-2 text-center d-flex justify-content-center align-items-center vertical-middle">Please
                select any of the User</p>
        </div>
        )}

    </div>
</div>
);
}