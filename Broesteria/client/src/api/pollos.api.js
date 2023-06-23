import axios from "axios";

export const pollerias = async (value) =>
  await axios.get("http://localhost:4000/pollos", value);

