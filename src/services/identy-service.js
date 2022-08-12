import axios from "axios"
import { identyServiceUrl } from "./constants"

const axiosInstance = axios.create({
  baseURL: identyServiceUrl,
  headers: {
    "Content-Type": "application/json",
    "accept": "application/json",
  }
})

export const getUserIdenty = (jwtToken) => {
  // User Information Request
}