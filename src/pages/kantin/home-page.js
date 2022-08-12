import CardProduct from "../../components/products-card"
import styled from "styled-components";


const PopularProduct = styled.div`
display:flex;
flex-direction:row;
flex-wrap: wrap;
max-width: 1000px;
margin: 0;
`

const CantinImg = styled.img`
margin-top:40px;
margin-bottom:40px;

`



export default function HomePage() {
  return (
    <div className="home"> 

      
        <CantinImg src="https://i0.wp.com/haber.im/wp-content/uploads/2021/07/1626177088_Okul-kantinleriyle-ilgili-abur-cubur-satisini-kisitlayan-Bilim-Kurulu-Karari.jpg?w=1120&ssl=1"></CantinImg>
      

      <h1>En Popüler Ürünler</h1>
      <PopularProduct>  
               
                <CardProduct name="Eti Çikolata" price="10" />
                <CardProduct name="Çay" price="5"  />
                <CardProduct name="Çay" price="5"  />
                <CardProduct name="Eti Çikolata" price="10" />
                <CardProduct name="Çay" price="5"  />
                
                

      </PopularProduct>





    
  
    
    </div>
    
  )
}