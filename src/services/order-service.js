// getCurrentUserOrders() : Return user orders.
// getCurrentUserOrdersToEmployee() : Return all user orders for manage orders. (Admin, Incoming Orders)
// approveOrderByEmployee(): Approve one order. (Admin, Incoming Orders)
// approveAllOrdersByEmployee(): Approve all orders. (Admin, Incoming Orders)
// getPastUserOrders(): Get all user orders in past. (Kantin, Order History)
// getPastUserOrdersToEmployee(): Get all users orders in past for admin.

import axios from "axios"
import { orderServiceUrl } from "./constants"

const axiosInstance = axios.create({
  baseURL: orderServiceUrl
})

export const getCurrentUserOrders = () => {
  axiosInstance.post("api/Order/CurrentOrders/getCurrentOrdersOfUser")
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}

export const getCurrentUserOrdersToEmployee = () => {
  axiosInstance.post("api/Order/CurrentOrders/getCurrentOrdersToEmployee")
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}

export const approveOrderByEmployee = () => {
  axiosInstance.post("api/Order/CurrentOrders/approveOrderByEmployee")
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}

export const approveAllOrdersByEmployee = () => {
  axiosInstance.post("api/Order/CurrentOrders/approveOrdersByEmployee")
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}

export const getPastUserOrders = () => {
  axiosInstance.post("api/Order/PastOrders/getPastOrdersOfUser")
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}

export const getPastUserOrdersToEmployee = () => {
  axiosInstance.post("api/Order/PastOrders/getPastOrdersToEmployee")
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}