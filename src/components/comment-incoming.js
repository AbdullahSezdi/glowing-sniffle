import {useState} from "react";
import { X } from "lucide-react";
import styled from "styled-components";
import Button from "./button";

const ModalBackground= styled.div`
  position: fixed;
  z-index: 9999;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background-color: #00000050;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonClose  = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
  margin-right:15px;
  margin-bottom:40px;
  margin-top:10px;
`

const ModalContainer= styled.div`
  background-color:white;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 25px;
  border:2px solid #0000020;
  border-radius:10px;
  
`

const title= styled.div`

  display: inline-block;
  text-align: center;
  margin-top: 10px;
`

const Body= styled.div`
  width:600px;
  height:600px;
  flex: 50%;
  font-size: 1.7rem;
  text-align: center;
  
  padding-top:10px;
  padding-right:10px;
  background-color:white;
  border:2px solid grey;
  border-radius:20px;
 
  
`

const Header= styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: space-between;
  align-items: center;
  
`

const ButonDiv= styled.div`
  display:flex;
  justify-content:right;
  
  

`

const Input= styled.input`
font-size: 1.15rem;
font-weight: 300;
  padding:10px 20px;
  width:100%;
  &:focus {
    border: 1px solid #25d24b;
  }
`


function cancelButon(setShowModal,setCancel){

  setCancel(true)
  setShowModal(false)
  
  
}


export default function Modal({ showModal, setShowModal,cancel,setCancel}){
  const [comment, setComment] = useState('')
  const saveComment = () => {
    

    if (comment === ""){
      alert("burasi bos olamaz");
    } else {
      setShowModal(false);
      console.log(comment);
    }
  }

  return (
    <ModalBackground>
      <ModalContainer>
        <Header>
          <h1>Sipariş Ret Sebebi</h1>
          
          <X cursor="pointer" color='#212121' size={32}  onClick={() => setShowModal(false)} />
        </Header>
        <Input placeholder="Siparişin iptal nedeni nedir ?" onChange={(e)=> setComment(e.target.value)}  value={comment} />
        <div className="btn-group">
          <Button type="normal link" text="Iptal Et" onClick={() => cancelButon(setShowModal,setCancel)}  />
          <Button type="normal" text="Kaydet" onClick={() => saveComment()} />
        </div>
      </ModalContainer>
    </ModalBackground>
  );
}