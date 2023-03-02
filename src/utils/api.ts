import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:5000/api/v1",
  headers: {
    "Content-type": "application/json",
    "Allow-Control-Allow-Origin": "*",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const auth = localStorage.getItem("auth");
    if (!auth) return config;

    const { token } = JSON.parse(auth);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

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

export const getProfiles = async () => {
  try {
    const response = await apiClient.get("/profiles");
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
