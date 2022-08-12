import axios from "axios"
import { customerServiceUrl } from "./constants"

const axiosInstance = axios.create({
  baseURL: customerServiceUrl,
  headers: {
    "Content-Type": "application/json",
    "accept": "application/json"
  }
})