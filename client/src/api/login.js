import axios from "axios";
import { checkMockCredentials } from "./mockAuth";

const API_URL = "http://localhost:4000/api/login";

export async function attemptLogin(email, password) {
  try {
    const response = await axios.post(
      API_URL,
      { email, password },
      { timeout: 1500 }
    );
    return response.data;
  } catch (err) {
    return checkMockCredentials(email, password);
  }
}
