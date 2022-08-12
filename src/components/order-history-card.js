import styled from 'styled-components';


const HistoryCard = styled.div`
display: flex;
flex-direction: column;
width: 100%;
min-height: 180px;
background-color: #fff;
border-radius: 10px;
padding: 20px 20px;
gap: 10px;
`

const CardRow = styled.div`
display: flex;
flex-direction: row;
`

const OrderDate = styled.div`
font-size: 0.875rem;
color: #05153F;
font-weight: 500;
`

const ProductList = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
@media (max-width: 768px) {
  flex-direction: column;
  width: 100%
}
`

const Product = styled.div`
display: flex;
flex-direction: row;
background-color: #f7f7f7;
padding: 10px;
border-radius: 10px;
gap: 10px;
@media (max-width: 768px) {
  justify-content: space-between;
}
`

const ProductImg = styled.div`
background-color: #25D24B;
width: 4rem;
height: 4rem;
border-radius: 10px;
`
const OrderDetails = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`
const ProductName = styled.span`
color: #05153F;
font-weight: 500;
font-size: 1.125rem;
`
const ProductPayer = styled.span`
color: #05153F;
font-weight: 400;
font-size: 0.875rem;
`

const ProductQuantity = styled.span`
margin: 0 1rem;
color: #05153F;
font-weight: 400;
font-size: 0.875rem;
display: flex;
flex-direction: column;
justify-content: center;
`

const CardFooter = styled.div`
margin: 25px 0 0 0;  
display:flex;
flex-direction: column;
`
const OrderNote = styled.div`
color: #00000060;
font-weight: 500;
`

const OrderResult = styled.div`
font-weight: 500;
`

const Strong = styled.strong`
color: ${props => props.red ? '#F92727' : props.green ? "#25D24B" : '#00000060'};
font-weight: 600;
`

export default function OrderHistoryCard({
  orderDate,
  productImg,
  productName,
  productPayer,
  productQuantity,
  orderNote,
  orderResult,
  payedAmount,
}) {

  return (
    <HistoryCard>
      <CardRow>
        <OrderDate >{orderDate}</OrderDate>
      </CardRow>
      <CardRow>
        <ProductList>
          <Product>
            <ProductImg />
            <OrderDetails>
              <ProductName>{productName}</ProductName>
              <ProductPayer>{productPayer}</ProductPayer>
            </OrderDetails>
            <ProductQuantity>{productQuantity}</ProductQuantity>
          </Product>
          <Product>
            <ProductImg />
            <OrderDetails>
              <ProductName>{productName}</ProductName>
              <ProductPayer>{productPayer}</ProductPayer>
            </OrderDetails>
            <ProductQuantity>{productQuantity}</ProductQuantity>
          </Product>
          <Product>
            <ProductImg />
            <OrderDetails>
              <ProductName>{productName}</ProductName>
              <ProductPayer>{productPayer}</ProductPayer>
            </OrderDetails>
            <ProductQuantity>{productQuantity}</ProductQuantity>
          </Product>
        </ProductList>
      </CardRow>
      <CardRow>
        <CardFooter>
          <OrderNote>
            <Strong>Sipariş Notu:</Strong> {orderNote}
          </OrderNote>
          <OrderResult>
            {
              !orderResult
                ?
                <>
                  <Strong green>Sipariş Onaylandı:</Strong> Toplam <Strong green>{payedAmount}₺</Strong> ödeme yaptınız.
                </>
                :
                <>
                  <Strong red>Sipariş Reddeldi:</Strong> {orderResult}
                </>
            }
          </OrderResult>
        </CardFooter>
      </CardRow>
    </HistoryCard>
  )
};