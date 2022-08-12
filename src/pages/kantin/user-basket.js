import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { PackageOpen, Send } from "lucide-react";
import { Link } from "react-router-dom";

import { BasketContext } from "../../contexts/basket-context";
import { checkoutBasket } from "../../services/basket-service";
import { getAvaibleProducts } from "../../services/product-list-service";

import Button from "../../components/button";
import Message from "../../components/message";

import { useTranslation } from "react-i18next";

const CartPage = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
  width: 100%;
  max-width: 1024px;
  min-height: 90vh;
`
const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  background-color: #fff;
`
const SelectedRoom = styled.div`
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const SelectedRoomName = styled.span`
  color: #25d24b;
  font-weight: 600;
  font-size: 1.75em;
`
const ProductsInCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px 20px;
`
const UserOrderComment = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
`
const TextArea = styled.textarea`
  overflow: hidden;
  resize: none;
  height: 100px;
  font-size: 1em;
  font-family: inherit;
  background-color: #f7f7f7;
  border-radius: 5px;
  margin-top: 10px;
  padding: 10px 10px;
  font-weight: 400;
  outline: 0;
  border: 1px solid rgba(5, 21, 63, 0.2509803922);
  vertical-align: none;
`
const OrderOverview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 15px;
  border-radius: 5px;
  background-color: #fff;
  width: 40%;
  height: 100%;
`
const Overview = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`
const PriceSummary = styled.div`
  padding: 10px 0;
  color: #6e6e6e;
  font-weight: 400;
`
const TotalPayment = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  padding-top: 10px;
  border-top: 1px dashed #05153f80;
  justify-content: space-between;
`
const PaymentRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const PaymentPrice = styled.strong`
  color: #05153f;
  font-weight: 500;
`
const Title = styled.h1`
  color: #05153f;
  font-size: 1.75em;
`
const OrdersList = styled.div`
  margin-top: 10px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
`
const OrderRow = styled.div`
  font-size: 1em;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const ProductName = styled.span`
  font-weight: 500;
`
const ProductQuantity = styled.span`
  font-weight: 500;
  color: #25d24b;
`
const Product = styled.tr`
  padding: 5px 0;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
`
const ProductImg = styled.div`
  user-select: none;
  display: flex;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background-color: #25d24b;
  border-radius: 10px;
  position: relative;
`


export default function UserBasket() {
  const { t } = useTranslation();
  const {
    userBasket,
    setUserBasket,
    getTotalPrice,
    getTotalPriceByUserName,
    getAllProductQuantitys,
  } = useContext(BasketContext);
  const [userOrderSent, setUserOrderSent] = useState(false);
  const [userOrderNote, setUserOrderNote] = useState({ orderMessage: "" });

  useEffect(() => {
    setUserOrderSent(false);
  }, []);

  if (userBasket === "") {
    return (
      <Message icon={<PackageOpen />} title={t("components.msg.empty_basket.title")} desc={t("components.msg.empty_basket.desc")}
        button={
          <Link to="../urunler">
            <Button type={"normal"} text={t("components.msg.empty_basket.btn_text")}/>
          </Link>
        }/>
    );
  }
  else if (userOrderSent) {
    return (
      <Message icon={<Send />} title={t("components.msg.approve_basket.title")} desc={t("components.msg.approve_basket.desc")}
        button={
          <Link to="../urunler">
            <Button type={"normal"} text={t("components.msg.approve_basket.btn_text")}/>
          </Link>
        }/>
    );
  }

  return (
    <CartPage>
      <OrderInfo>
        <SelectedRoom>
          <Title>{t("kantin.basket.title.selected_room")}</Title>
          <SelectedRoomName>{userBasket.data.roomName}</SelectedRoomName>
        </SelectedRoom>
        <ProductsInCart>
          <Title>{t("kantin.basket.title.products_in_basket")}</Title>
          <table className="basket-product-list">
            <thead>
              <tr>
                <td>{t("kantin.basket.table.thead.product")}</td>
                <td>{t("kantin.basket.table.thead.product_name")}</td>
                <td>{t("kantin.basket.table.thead.product_payer")}</td>
                <td>{t("kantin.basket.table.thead.product_quantity")}</td>
              </tr>
            </thead>
            <tbody>
              {userBasket.data.users.map((user) => {
                return user.products.map((product, index) => {
                  return (
                    <Product key={index}>
                      <td>
                        <ProductImg />
                      </td>
                      <td>{product.productName}</td>
                      <td>{user.userName}</td>
                      <td>x{product.productQuantity}</td>
                    </Product>
                  );
                });
              })}
            </tbody>
          </table>
        </ProductsInCart>
        <UserOrderComment>
          <Title>{t("kantin.basket.title.order_note")}</Title>
          <TextArea
            maxLength={200}
            onChange={(e) => setUserOrderNote({ orderMessage: e.target.value })}
            value={userOrderNote.orderMessage}
            placeholder={t("kantin.basket.place_holder.add_order_note")}
            type="text"
          />
        </UserOrderComment>
      </OrderInfo>
      <OrderOverview>
        <Title>{t("kantin.basket.title.order_overview")}</Title>
        <Overview>
          <OrdersList>
            {
              getAllProductQuantitys(userBasket.data).map((product, index) => {
                return (
                  <OrderRow key={index}>
                    <ProductName>{product.productName}</ProductName>
                    <ProductQuantity>
                      {product.productQuantity} {t("kantin.basket.quantity")}
                    </ProductQuantity>
                  </OrderRow>
                );
              })
            }
          </OrdersList>
          <OrderSummary>
            <PriceSummary>
              {
                getTotalPriceByUserName(userBasket.data).map((user, index) => {
                  return (
                    <PaymentRow key={index}>
                      {Object.keys(user)} <PaymentPrice>{Object.values(user)}₺</PaymentPrice>
                    </PaymentRow>
                  );
                })
              }
              <TotalPayment>
                <PaymentRow>
                  {t("kantin.basket.total")}
                  <PaymentPrice>{getTotalPrice(userBasket.data)} ₺</PaymentPrice>
                </PaymentRow>
              </TotalPayment>
            </PriceSummary>
            <Button type={"large"} text={t("kantin.basket.btn.checkout_basket")} onClick={() => { console.log(userOrderNote); setUserOrderSent(true); }} />
            <Button type={"small link"} text={t("kantin.basket.btn.clear_basket")} onClick={() => { checkoutBasket(userOrderNote); setUserBasket(""); }} />
          </OrderSummary>
        </Overview>
      </OrderOverview>
    </CartPage>
  );
}
