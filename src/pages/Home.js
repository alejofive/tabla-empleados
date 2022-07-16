import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteEmployees, getEmployees } from "../services/empleados";

function Home() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const listResponse = await getEmployees();
      if (listResponse.error) {
        alert(listResponse.error);
      } else {
        console.log(listResponse);
        setEmployees(listResponse.data);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    console.log(employees);
  }, [employees]);

  //filtrar

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const roleSelect = (e) => {
    setStatus(e.target.value);
  };

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const employeesFiltered = () => {
    let results = employees.filter((employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase())
    );
    results = results.filter((employee) =>
      employee.role.toLowerCase().includes(status.toLowerCase())
    );

    return results;
  };

  const eliminarEmployees = async (id) => {
    let opcion = window.confirm("realmente desea Eliminar ");
    if (opcion) {
      const data = await deleteEmployees(id);
      if (data.data) {
        setEmployees([...employees.filter((employee) => employee.id !== id)]);
      } else {
        alert("No se pudo eliminar la tarea");
      }
    }
  };
  return (
    <div className="container bg-purple-50 ">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center ">
          <div className="flex justify-items-center mr-20">
            <h4 className="mr-5">Search:</h4>
            <input
              className="px-6 py-2.5"
              type="text"
              placeholder="18 Records..."
              value={search}
              onChange={searcher}
            />
          </div>
          <div>
            <div className="flex justify-items-center ">
              <h4 className="mr-5">Role:</h4>
              <select
                name="role"
                className="px-6 py-2.5 border"
                onChange={roleSelect}
                value={status}
                required
              >
                <option value="">All</option>
                <option value="admin">Admin</option>
                <option value="owner">Owner</option>
                <option value="member">Member</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <Link
            to="crear"
            className="py-2.5 px-10 bg-green-200 font-bold rounded-full text-green-600"
            href=""
          >
            Crear
          </Link>
        </div>
      </div>

      <table className="w-full mt-10 table-auto bg-white">
        <thead>
          <tr className="text-left px-5 border-b-4 h-10 py-5 px-5">
            <th>NAME</th>
            <th>TITLE</th>
            <th>Status</th>
            <th>AGE</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody className="">
          {employeesFiltered().map((employee) => {
            return (
              <tr className="border-b-4">
                <td className="flex items-center py-5 px-5">
                  <img
                    className="w-12 h-12 rounded-full mr-5"
                    src={employee.image}
                    alt=""
                  />
                  <div>
                    <h3 className="font-bold">{employee.name}</h3>
                    <p className="text-stone-600">{employee.email}</p>
                  </div>
                </td>
                <td>{employee.title}</td>
                <td>
                  <span
                    className={`status ${
                      employee.status === "Active" && "active"
                    } ${employee.status === "Inactive" && "inactive"} ${
                      employee.status === "Offline" && "offline"
                    } `}
                  >
                    {employee.status}
                  </span>
                </td>
                <td>{employee.age}</td>
                <td>{employee.role}</td>
                <td>
                  <Link to={`/edit/${employee.id}`} className="mr-5">
                    <i class="fa-solid fa-pen"></i>
                  </Link>
                  <button onClick={() => eliminarEmployees(employee.id)}>
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
