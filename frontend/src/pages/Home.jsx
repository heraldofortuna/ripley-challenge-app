import React, { useState, useEffect } from "react";
import { getClients } from "../services/index";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const loadClients = async () => {
      const response = await getClients();
      if (response.status === 200) {
        setClients(response.data);
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
      <h2>Lista de clientes</h2>
      <Dashboard data={clients} />
    </>
  )
}

export default Home;