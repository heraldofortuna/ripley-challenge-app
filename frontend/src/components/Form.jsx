import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addClient } from "../services/index";
import Button from "./Button";

const Form = () => {
  const [formValues, setFormValues] = useState({
    id: 0,
    name: '',
    lastname: '',
    birthday: '',
  })

  const navigate = useNavigate();
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addClient(formValues);
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre</label>
        <input type="text" name="name" onChange={handleChange} />
      </div>
      <div>
        <label>Apellido</label>
        <input type="text" name="lastname" onChange={handleChange} />
      </div>
      <div>
        <label>Fecha de nacimiento</label>
        <input type="date" name="birthday" onChange={handleChange} />
      </div>
      <div>
        <Button text="Crear" type="submit" />
        <Link to="/"><Button text="Cancelar" /></Link>
      </div>
    </form>
  )
}

export default Form;