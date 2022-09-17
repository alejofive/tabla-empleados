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
    <div className="bg-neutral-200">
      <form
        action=""
        method="post"
        onSubmit={guardarEmployees}
        className="bg-white w-3/6 m-auto pt-10 pb-10"
      >
        <h1 className="text-center text-2xl font-bold ">Enter employee</h1>
        <div className="w-full flex items-center justify-center mt-4 flex-col pr-14 pl-14">
          <div className="flex flex-col mt-5 w-full">
            <label className="text-xs mb-3 font-bold" htmlFor="">
              Name:
            </label>
            <input
              className="px-6 py-2.5 border border-zinc-800 rounded-lg w-full"
              type="text"
              placeholder="Enter name"
              onChange={handleInput}
              name="name"
              value={newEmployees.name}
              required
            />
          </div>
          <div className="flex flex-col mt-5 w-full">
            <label className="text-xs mb-3 font-bold" htmlFor="">
              Email:
            </label>
            <input
              className="px-6 py-2.5 border w-full border-zinc-800 rounded-lg"
              type="email"
              placeholder="Example@gmail.com"
              onChange={handleInput}
              name="email"
              value={newEmployees.email}
              required
            />
          </div>
          <div className="flex flex-col mt-5 w-full ">
            <label className="text-xs mb-3 font-bold" htmlFor="">
              Title:
            </label>
            <input
              className="px-6 py-2.5 border w-full border-zinc-800 rounded-lg"
              type="text"
              placeholder="Enter title"
              onChange={handleInput}
              name="title"
              value={newEmployees.title}
              required
            />
          </div>
          <div className="flex flex-col mt-5 w-full">
            <label className="text-xs mb-3 font-bold " htmlFor="">
              Status:
            </label>
            <select
              name="status"
              className="px-6 py-2.5 border w-full border-zinc-800 rounded-lg"
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
          <div className="flex flex-col mt-5 w-full">
            <label className="text-xs mb-3 font-bold" htmlFor="">
              Age:
            </label>
            <input
              className="px-6 py-2.5 border w-full border-zinc-800 rounded-lg"
              type="number"
              placeholder="Enter"
              onChange={handleInput}
              name="age"
              value={newEmployees.age}
              required
            />
          </div>

          <div className="flex flex-col mt-5 w-full">
            <label className="text-xs mb-3 font-bold" htmlFor="">
              Role:
            </label>
            <select
              name="role"
              className="px-6 py-2.5 border w-full border-zinc-800 rounded-lg"
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
        <div className="mt-10 flex items-center justify-center ">
          <Link
            className=" mr-5 font-bold border border-zinc-800 px-5 py-2"
            to="/"
          >
            Cancel
          </Link>
          <button
            className="font-bold text-white bg-black border border-zinc-800 px-5 py-2"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Crear;
