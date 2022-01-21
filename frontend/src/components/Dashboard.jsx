import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
    & th {
      padding: 10px 0 20px 0;
      border-bottom: 1px solid var(--color-dark);
    }
    & td {
      text-align: center;
      padding: 10px 0;
    }
`;

const Dashboard = ({ data }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Fecha de nacimiento</th>
        </tr>
      </thead>
      <tbody>
        {data.map(client => (
          <tr key={client.id}>
            <td>{client.name}</td>
            <td>{client.lastname}</td>
            <td>{client.birthday}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  )
}

export default Dashboard;