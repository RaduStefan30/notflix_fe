import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:5000/api/v1",
  headers: {
    "Content-type": "application/json",
    "Allow-Control-Allow-Origin": "*",
  },
});

export const auth = async (
  data: { email: string; password: string },
  action: string
) => {
  const { email, password } = data;
  try {
    const response = await apiClient.post(`/auth/${action}`, {
      email,
      password,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
