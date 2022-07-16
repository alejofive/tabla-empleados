import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { postEmployees } from "../services/empleados";

const Crear = () => {
  const navigate = useNavigate();

  const [newEmployees, setNewEmployees] = useState({
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/795.jpg",
    name: "",
    email: "",
    title: "",
    status: "",
    age: "",
    role: "",
  });

  const handleInput = (e) => {
    setNewEmployees({
      ...newEmployees,
      [e.target.name]: e.target.value,
    });
  };

  const guardarEmployees = async (e) => {
    e.preventDefault();
    const data = await postEmployees(newEmployees);
    if (data.data) {
      navigate("/");
    } else {
      alert(data.error);
    }
  };

  return (
    <form action="" method="post" onSubmit={guardarEmployees}>
      <h1 className="text-center mt-10 text-2xl font-bold ">
        Ingresa el nuevo Empleado
      </h1>
      <div className="w-full flex items-center justify-center mt-10 flex-col">
        <div className="flex flex-col mt-5">
          <label htmlFor="">Name:</label>
          <input
            className="px-6 py-2.5 border"
            type="text"
            placeholder="Ingresar"
            onChange={handleInput}
            name="name"
            value={newEmployees.name}
            required
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="">Email:</label>
          <input
            className="px-6 py-2.5 border"
            type="email"
            placeholder="Ingresar"
            onChange={handleInput}
            name="email"
            value={newEmployees.email}
            required
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="">Title:</label>
          <input
            className="px-6 py-2.5 border"
            type="text"
            placeholder="Ingresar"
            onChange={handleInput}
            name="title"
            value={newEmployees.title}
            required
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="">Status:</label>
          <select
            name="status"
            className="px-6 py-2.5 border"
            onChange={handleInput}
            value={newEmployees.status}
            required
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
            onChange={handleInput}
            name="age"
            value={newEmployees.age}
            required
          />
        </div>

        <div className="flex flex-col mt-5">
          <label htmlFor="">Role:</label>
          <select
            name="role"
            className="px-6 py-2.5 border"
            onChange={handleInput}
            value={newEmployees.role}
            required
          >
            <option value="">Status</option>
            <option value="admin">Admin</option>
            <option value="owner">Owner</option>
            <option value="member">Member</option>
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

export default Crear;
