import React, { useState, useEffect } from "react";
import { getClients, averageClients } from "../services/index";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import Average from "../components/Average";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [clients, setClients] = useState([]);
  const [average, setAverage] = useState("");

  useEffect(() => {
    const loadClients = async () => {
      const response = await getClients();
      const averageOfClients = await averageClients();
      if (response.status === 200) {
        setClients(response.data);
        setAverage(averageOfClients.data);
      }
      setIsLoading(false);
    }
    loadClients();
  }, []);

  if (isLoading) {
    return <p>Is Loading</p>
  }

  if (!clients.length) {
    return <p>You don't have clients</p>
  }

  return (
    <>
      <Header />
      <main>
        <div className="wrapper">
          <h2 className="subtitle" >Lista de clientes</h2>
          <Dashboard data={clients} />
          <Average average={average} />
        </div>
      </main>
    </>
  )
}

export default Home;