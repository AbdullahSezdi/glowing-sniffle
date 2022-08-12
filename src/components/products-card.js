import React from "react";
import styled from "styled-components";



const CardContainer = styled.div`
margin:10px;
width:18%;
border:solid 2px a4a4a4;
border-radius:7.5px;
gap:10px;
background-color:white;
padding:10px;



`
const CardImg = styled.img`
width:150px;
border:solid 2px #f9eded;
text-align:center;

`
const CardBody = styled.div``

const ProductTitle = styled.div`
display:flex;
justify-content:space-between;
padding:10px;
`
const ProductDesc = styled.p``
const ProductPrice = styled.span`
padding-right:10px;
`






export default function CardProduct({name,price,img,desc}){


    return (



        <CardContainer>
            <CardImg src="https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/07167761/07167761-c603a5-1650x1650.jpg">
            </CardImg>
            <CardBody>
                <ProductTitle>
                    {name}
                    <ProductPrice>
                    {price+"₺"}

                    </ProductPrice>
                </ProductTitle>


                <ProductDesc>
                   <span> {desc}</span>

                </ProductDesc>

                
            
             </CardBody>
                    
               

                
            </CardContainer>

      



    )
} 