import React, { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import { editEmpleyee, getEmployee } from "../services/empleados";

const Edit = () => {
  console.log(useParams());

  const navigate = useNavigate();
  const params = useParams();
  const [edit, setEdit] = useState({
    id: -1,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/795.jpg",
    name: "",
    email: "",
    title: "",
    status: "",
    age: "",
    role: "",
  });

  useEffect(() => {
    const getData = async () => {
      const empleyee = await getEmployee(params.id);
      if (empleyee.data) {
        setEdit(empleyee.data);
      } else {
        alert(empleyee.error);
      }
    };
    getData();
  }, []);

  const handleInputEdit = (e) => {
    setEdit({
      ...edit,
      [e.target.name]: e.target.value,
    });
  };

  const guardar = async (e) => {
    e.preventDefault();
    const data = await editEmpleyee(edit.id, edit);
    if (data.data) {
      navigate("/");
    } else {
      alert(data.error);
    }

    setEdit({
      id: -1,
    });
  };

  return (
    <form action="" method="post" onSubmit={guardar}>
      <h1 className="text-center mt-10 text-2xl font-bold ">Editar Empleado</h1>
      <div className="w-full flex items-center justify-center mt-10 flex-col">
        <div className="flex flex-col mt-5">
          <label htmlFor="">Name:</label>
          <input
            className="px-6 py-2.5 border"
            type="text"
            placeholder="Ingresar"
            onChange={handleInputEdit}
            name="name"
            value={edit.name}
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="">Email:</label>
          <input
            className="px-6 py-2.5 border"
            type="email"
            placeholder="Ingresar"
            onChange={handleInputEdit}
            name="email"
            value={edit.email}
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="">Title:</label>
          <input
            className="px-6 py-2.5 border"
            type="text"
            placeholder="Ingresar"
            onChange={handleInputEdit}
            name="title"
            value={edit.title}
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="">Status:</label>
          <select
            name="status"
            className="px-6 py-2.5 border"
            onChange={handleInputEdit}
            value={edit.status}
          >
            <option value="">Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Offline">Offline</option>
          </select>
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="">Age:</label>
          <input
            className="px-6 py-2.5 border"
            type="number"
            placeholder="Ingresar"
            onChange={handleInputEdit}
            name="age"
            value={edit.age}
          />
        </div>

        <div className="flex flex-col mt-5">
          <label htmlFor="">Role:</label>
          <select
            name="role"
            className="px-6 py-2.5 border"
            onChange={handleInputEdit}
            value={edit.role}
          >
            <option value="">Status</option>
            <option value="Admin">Admin</option>
            <option value="Owner">Owner</option>
            <option value="Member">Member</option>
          </select>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <button className="mr-5 font-bold" type="submit">
          Aceptar
        </button>
        <Link className="font-bold" to="/">
          Cancelar
        </Link>
      </div>
    </form>
  );
};

export default Edit;
