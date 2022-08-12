// Developer Comments, remove after build!
// userBasket = User Basket Data.
// getTotalPrice(basket) = Getting total basket price.
// getTotalPriceByUserEmail = Getting total price each user.
// getAllProductQuantitys = Getting all product quantity.

import { createContext, useEffect, useState } from "react";
import { getUserBasket } from "../services/basket-service";

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  // userBasket = getUserBasket() (basket-service)
  const [userBasket, setUserBasket] = useState({
    isSuccess: true,
    messageCode: 0,
    data: {
      orderId: "string",
      orderMessage: "string",
      confirmedBasketUserEmail: "string",
      confirmedBasketUserName: "string",
      roomName: "101",
      users: [
        {
          userEmail: "esarac@outlook.com.tr",
          userName: "Erenkan Saraç",
          products: [
            {
              productId: "1",
              productName: "Su",
              productPrice: 2,
              productQuantity: 2,
            },
          ],
        },
        {
          userEmail: "mervetürk@gmail.com",
          userName: "Merve Türk",
          products: [
            {
              productId: "5",
              productName: "Çay",
              productPrice: 3,
              productQuantity: 1,
            },
          ],
        },
        {
          userEmail: "canersulusoglu@gmail.com",
          userName: "Caner Sülüşoğlu",
          products: [
            {
              productId: "2",
              productName: "Popkek",
              productPrice: 2,
              productQuantity: 1,
            },
          ],
        },
      ],
      orderDate: "2022-08-02T17:42:04.642Z",
    },
  });

  const getTotalPrice = (basket) => {
    if (basket === undefined) return "";
    return basket.users
      .map((x) => x.products.map((y) => y.productPrice * y.productQuantity))
      .reduce((a, b) => a.concat(b))
      .reduce((sum, a) => sum + a, 0);
  };

  const getTotalPriceByUserName = (basket) => {
    if (basket === undefined) return "";
    return basket.users.map((x) =>
      Object({
        [x.userName]: x.products
          .map((y) => y.productPrice * y.productQuantity)
          .reduce((sum, a) => sum + a, 0),
      })
    );
  };

  const getAllProductQuantitys = (basket) => {
    if (basket === undefined) return "";

    let result = [];
    let products = basket.users
      .map((user) => user.products)
      .reduce((a, b) => a.concat(b));

    products.forEach((product) => {
      var a = result.find((x) => x.productName === product.productName);
      if (a) {
        result = result.filter((x) => x.productName !== product.productName);
        result.push({
          productName: product.productName,
          productQuantity: product.productQuantity + a.productQuantity,
        });
      } else {
        result.push({
          productName: product.productName,
          productQuantity: product.productQuantity,
        });
      }
    });
    return result;
  };

  useEffect(() => {
    getTotalPrice(userBasket.data);
    getTotalPriceByUserName(userBasket.data);
    getAllProductQuantitys(userBasket.data);
  }, [userBasket]);

  const values = {
    userBasket,
    setUserBasket,
    getTotalPrice,
    getTotalPriceByUserName,
    getAllProductQuantitys,
  };

  return (
    <BasketContext.Provider value={values}>
      {children}
    </BasketContext.Provider>
  );
};

export { BasketProvider, BasketContext };
