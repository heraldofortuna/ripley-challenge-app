import axios from "axios";

const baseUrl = "http://localhost:3001";

export const getClients = async () => {
  try {
    const response = await axios({
      url: `${baseUrl}/clients/`,
      // url: "/clients/",
      method: "GET",
    });

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const addClient = async (newClient) => {
  try {
    const response = await axios({
      url: `${baseUrl}/clients/create/`,
      // url: "/clients/create/",
      method: "POST",
      data: newClient,
    });

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const averageClients = async () => {
  try {
    const response = await axios({
      url: `${baseUrl}/clients/average/`,
      // url: "/clients/average/",
      method: "GET",
    });

    return response;
  } catch (err) {
    console.log(err);
  }
};
