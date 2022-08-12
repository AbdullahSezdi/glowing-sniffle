// updateUserBasket(): Updating user basket.
// getUserBasket(): Return user basket data.
// deleteBasket(): Deleting user basket by userId.
// checkoutBasket(): User basket to user order.

import axios from "axios"
import { basketServiceUrl } from "./constants"

const axiosInstance = axios.create({
  baseURL: basketServiceUrl,
  headers: {
    "Content-Type": "application/json",
    "accept": "application/json"
  }
})

export const updateUserBasket = (basket) => {
  axiosInstance.put("api/Basket/updateBasket", basket)
    .then(res => console.log(res.data.isSuccess))
    .catch(error => console.log(error))
}

export const getUserBasket = (userId) => {
  axiosInstance.post("/api/Basket/getBasket")
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
}

export const deleteBasket = (userId) => {
  axiosInstance.delete("api/Basket/deleteBasket")
    .then(res => console.log(res.data))
}

export const checkoutBasket = (userOrderComment) => {
  axiosInstance.post("api/Checkout/checkoutBasket", {
    "orderMessage": userOrderComment
  })
    .then(res => console.log(res.data))
}