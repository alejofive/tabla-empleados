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
    <div className="bg-neutral-200">
      <form
        action=""
        method="post"
        onSubmit={guardar}
        className="bg-white w-3/6 m-auto pt-10 pb-10"
      >
        <h1 className="text-center mt-4 text-2xl font-bold ">Edit employee</h1>
        <div className="w-full flex items-center justify-center mt-4 flex-col  pr-14 pl-14">
          <div className="flex flex-col mt-5 w-full">
            <label className="text-xs mb-3 font-bold" htmlFor="">
              Name:
            </label>
            <input
              className="px-6 py-2.5 border border-zinc-800 rounded-lg w-full"
              type="text"
              placeholder="Ingresar"
              onChange={handleInputEdit}
              name="name"
              value={edit.name}
            />
          </div>
          <div className="flex flex-col mt-5 w-full">
            <label className="text-xs mb-3 font-bold" htmlFor="">
              Email:
            </label>
            <input
              className="px-6 py-2.5 border border-zinc-800 rounded-lg w-full"
              type="email"
              placeholder="Ingresar"
              onChange={handleInputEdit}
              name="email"
              value={edit.email}
            />
          </div>
          <div className="flex flex-col mt-5 w-full">
            <label className="text-xs mb-3 font-bold" htmlFor="">
              Title:
            </label>
            <input
              className="px-6 py-2.5 border border-zinc-800 rounded-lg w-full"
              type="text"
              placeholder="Ingresar"
              onChange={handleInputEdit}
              name="title"
              value={edit.title}
            />
          </div>
          <div className="flex flex-col mt-5 w-full">
            <label className="text-xs mb-3 font-bold" htmlFor="">
              Status:
            </label>
            <select
              name="status"
              className="px-6  py-2.5 border border-zinc-800 rounded-lg w-full"
              onChange={handleInputEdit}
              value={edit.status}
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
              className="px-6 py-2.5 border border-zinc-800 rounded-lg w-full"
              type="number"
              placeholder="Ingresar"
              onChange={handleInputEdit}
              name="age"
              value={edit.age}
            />
          </div>

          <div className="flex flex-col mt-5 w-full">
            <label className="text-xs mb-3 font-bold" htmlFor="">
              Role:
            </label>
            <select
              name="role"
              className="px-6 py-2.5 border border-zinc-800 rounded-lg w-full"
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

export default Edit;
