import React, { useState, useEffect } from "react";
import { getClients } from "./services/index";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    console.log("useEffect un App.jsx");
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
    <Dashboard />
  )
};

export default App;
