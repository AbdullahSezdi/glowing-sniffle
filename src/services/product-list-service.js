// getAvailableProductById(): Return avaible product with product id.
// getProductAvailableStatus(): Return product avaibility status with product id.
// createNewProduct(): New product create.
// deleteAllProducts(): Deleting all products in database.
// deleteProductById: Deleting product with product id in database.
// getAvaibleProducts(): Return all avaible products.
// getUnavaibleProducts(): Return all unavabile products.
// getAllProducts(): Return all products.
// sortProductByCategory(): Sorting products by category name. 
// sortProductByNameASC(): Sorting products by name A-Z.
// sortProductByNameDESC(): Sorting products by name Z-A.
// sortProductByPriceASC(): Sorting products by price A-Z.
// sortProductByPriceDESC(): Sorting products by price Z-A.
// sortProductByType(): Sorting products by product type.
// updateProduct(): Updating product.

import axios from "axios"
import { productListServiceUrl } from "./constants"

const axiosInstance = axios.create({
  baseURL: productListServiceUrl,
  headers: {
    "Content-Type": "application/json",
    "accept": "application/json",
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  }
})

export const testRequest = () => {
  axiosInstance.get("/posts")
  .then(res => console.log(res))
}

export const getAvailableProductById = (productId) => {
  axiosInstance.get(`api/Product/listAvaibleProducts/${productId}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const getProductAvailableStatus = (productId) => {
  axiosInstance.put(`api/Product/listAvaibleProducts/${productId}/availability`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const createNewProduct = (newProduct) => {
  axiosInstance.post("api/Product/createProduct", newProduct)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const deleteAllProducts = () => {
  axiosInstance.delete("api/Product/listAvailableProducts/deleteEveryProduct")
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const deleteProductById = (productId) => {
  axiosInstance.delete(`api/Product/deleteEveryProduct/${productId}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const getAvaibleProducts = () => {
  axiosInstance.get("api/Product/listAvailableProducts")
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const getUnavaibleProducts = () => {
  axiosInstance.get("api/Product/listNotAvaibleProducts")
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const getAllProducts = () => {
  axiosInstance.get("api/Product/listProducts")
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const sortProductByCategory = (productCategory) => {
  axiosInstance.get(`api/Product/listAvailableProducts/sortByCategory/${productCategory}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const sortProductByNameASC = () => {
  axiosInstance.get("api/Product/sortByNameAsc")
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const sortProductByNameDESC = () => {
  axiosInstance.get("api/Product/sortByNameDesc")
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const sortProductByPriceASC = () => {
  axiosInstance.get("api/Product/sortByPriceAsc")
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const sortProductByPriceDESC = () => {
  axiosInstance.get("api/Product/sortByPriceDesc")
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const sortProductByType = (productType) => {
  axiosInstance.get(`api/Product/sortByType/${productType}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const updateProduct = (productId) => {
  axiosInstance.get(`api/Product/updateProduct/${productId}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}


// getAvaibleProducts()
// getUnavaibleProducts()
// getAllProducts()
// sortProductByCategory()
// sortProductByNameASC()
// sortProductByNameDESC()
// sortProductByPriceASC()
// sortProductByPriceDESC()
// sortProductByType(productType)
// updateProduct(productId)