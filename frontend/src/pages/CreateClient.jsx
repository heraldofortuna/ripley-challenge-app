import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";

const CreateClient = () => {
  return (
    <>
      <Header />
      <main>
        <div className="wrapper">
          <h2>Añadir un cliente nuevo</h2>
          <Form />
        </div>
      </main>
    </>
  )
}

export default CreateClient;