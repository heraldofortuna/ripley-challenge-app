import axios from "axios";

const baseUrl = "http://localhost:3001";

export const getClients = async () => {
  try {
    const response = await axios({
      url: `${baseUrl}/clients`,
      method: "GET",
    });

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const addClient = async (clientData) => {
  try {
    const response = await axios({
      url: `${baseUrl}/clients`,
      method: "POST",
      data: clientData,
    });

    return response;
  } catch (err) {
    console.log(err);
  }
};
