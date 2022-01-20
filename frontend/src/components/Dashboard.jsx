import React from "react";

const Dashboard = ({ data }) => {
  return (
    <table>
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
    </table>
  )
}

export default Dashboard;