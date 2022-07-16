const api = "http://localhost:4000/employees";

export const getEmployees = async () => {
  try {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    return {
      data: data,
      error: "",
    };
  } catch (error) {
    return {
      data: [],
      error: "Error en el endpoint",
    };
  }
};

export const getEmployee = async (id) => {
  try {
    const response = await fetch(`${api}/${id}`);
    const data = await response.json();
    console.log(data);
    return {
      data: data,
      error: "",
    };
  } catch (error) {
    return {
      data: [],
      error: "Error en el endpoint",
    };
  }
};

export const postEmployees = async (employee) => {
  try {
    const response = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });
    const data = await response.json();
    return {
      data: data,
      error: "",
    };
  } catch (error) {
    return {
      data: "",
      error: "Error al agregar",
    };
  }
};

export const deleteEmployees = async (id) => {
  try {
    const response = await fetch(`${api}/${id}`, {
      method: "DELETE",
    });
    if (response.status == 200)
      return {
        data: true,
        error: "",
      };

    throw "Error al eliminar";
  } catch (error) {
    return {
      data: "",
      error: error,
    };
  }
};

export const editEmpleyee = async (id, empleyee) => {
  try {
    const response = await fetch(`${api}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(empleyee),
    });
    const data = await response.json();
    return {
      data: data,
      error: "",
    };
  } catch (error) {
    return {
      data: "",
      error: "Error al editar",
    };
  }
};
