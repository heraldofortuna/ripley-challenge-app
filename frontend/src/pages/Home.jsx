import React, { useState, useEffect } from "react";
import { getClients, averageClients } from "../services/index";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import Average from "../components/Average";
import Loading from "../components/Loading";

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

  return (
    <>
      <Header />
      <main>
        <div className="wrapper">
          { isLoading ? (
            <Loading />
          ) : !clients.length ? (
            <h2 className="subtitle">You don't have clients</h2>
          ) : (
            <>
              <h2 className="subtitle" >Lista de clientes</h2>
              <Dashboard data={clients} />
              <Average average={average} />
            </>
          )}
        </div>
      </main>
    </>
  )
}

export default Home;