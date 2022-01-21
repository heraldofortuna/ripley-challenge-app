import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";

const CreateClient = () => {
  return (
    <>
      <Header />
      <main>
        <h2>Añadir un cliente nuevo</h2>
        <Form />
      </main>
    </>
  )
}

export default CreateClient;