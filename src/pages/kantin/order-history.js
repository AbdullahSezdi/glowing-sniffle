import styled from 'styled-components';
import OrderHistoryCard from "../../components/order-history-card";
import { History } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import Message from '../../components/message';
import Button from '../../components/button';

const OrderHistoryList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  max-width: 1024px;
  padding: 10px 20px;
  gap: 20px;
`
export default function OrderHistory() {
  const { t } = useTranslation()
  const orderHistory = null;
  if (orderHistory === null) {
    return (
      <Message
        icon={<History />}
        title="Geçmiş sipariş listeniz boş!"
        desc="Sipariş vermek için ürünler sayfasını ziyaret edin."
        button={
          <Link to="../urunler">
            <Button
              type={"normal"}
              text="Ürünlere gözat"
            />
          </Link>
        }
      />
    );
  }
  return (
    <OrderHistoryList>
      <OrderHistoryCard
        orderDate="12 Temmuz Perşembe 12:03"
        productImg="asd"
        productName="Çubuk Kraker"
        productPayer="Eren Saraç"
        productQuantity="x2"
        orderNote="20 dakika sonrasına getirirseniz sevinirim."
        orderResult="Üzgünüm, ürün bulunmamakta."
      />
      <OrderHistoryCard
        orderDate="12 Temmuz Perşembe 12:03"
        productImg="asd"
        productName="Çubuk Kraker"
        productPayer="Eren Saraç"
        productQuantity="x2"
        orderNote="20 dakika sonrasına getirirseniz sevinirim."
        payedAmount={20}
      />
    </OrderHistoryList>
  )
}