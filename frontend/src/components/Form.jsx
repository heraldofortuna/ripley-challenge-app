import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addClient } from "../services/index";
import Button from "./Button";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  & > input {
    padding: 8px;
    border: 1px solid var(--color-dark);
    border-radius: 4px;
  }
`;

const StyledButtons = styled.div`
  display: flex;
  align-items: center;
`;

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
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput>
        <label>Nombre</label>
        <input type="text" name="name" onChange={handleChange} />
      </StyledInput>
      <StyledInput>
        <label>Apellido</label>
        <input type="text" name="lastname" onChange={handleChange} />
      </StyledInput>
      <StyledInput>
        <label>Fecha de nacimiento</label>
        <input type="date" name="birthday" onChange={handleChange} />
      </StyledInput>
      <StyledButtons>
        <Button text="Crear" type="submit" />
        <Link to="/"><Button text="Cancelar" /></Link>
      </StyledButtons>
    </StyledForm>
  )
}

export default Form;