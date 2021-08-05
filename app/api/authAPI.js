import api from "./api";

const login = ({ email, password }) => api.post("auth", { email, password });

export default { login };
