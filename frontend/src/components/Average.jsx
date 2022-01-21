import React, { useState, useEffect } from "react";
import { averageClients } from "../services/index";

const Average = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [average, setAverage] = useState([]);

  useEffect(() => {
    const loadAverage = async () => {
      const response = await averageClients();
      console.log(response);
      if (response.status === 200) {
        setAverage(response.data);
      }
      setIsLoading(false);
    }
    loadAverage();
  }, []);

  return (
    <div>
      <h2 className="subtitle" >Edad promedio de los clientes</h2>
      {isLoading ? (
        <p>Is Loading</p>
      ) : (
        <p>{average}</p>
      )}
    </div>
  )
}

export default Average;
