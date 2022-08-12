import React, { useState, useSyncExternalStore } from "react";
import styled from "styled-components";


const NavRow = styled.tr`
  display:flex;
  background-color:yellow;
  
`;


const Image = styled.img`
  width:40px;
  
`;




function Product( { products }){
  const [stok, setStok] = useState(0);
  const [inputValue, setInputValue] = useState(0);


  const inputValues = (event) =>{
      let valueInput=event.target.value;
      
    setInputValue(valueInput)
  }

  const increaseSupply = (valueInput) => {
    console.log(valueInput)
    setStok(
      stok + Number(inputValue)
      );

  };



  const decreaseSupply = () => {
    if (
      (stok - Number(inputValue)) >=0
    ) {
      setStok(
        stok - Number(inputValue)
      );
    } else { // component'e çevir
      var uyarı = document.createElement("p");
      uyarı.innerHTML = "Yeterli stogunuz yok";
      uyarı.className = "alert alert-danger";
      uyarı.id = "error";
      document
        .getElementsByClassName("actions")
        [products.id - 1].appendChild(uyarı);
        
      setTimeout(() => {
        document.getElementById("error").remove();
      }, "2000");
    }
  };

  return (
    <div className="product">
      <table className="users-table">
        <thead>
          <NavRow>
            <td>Resim</td>
            <td>ID</td>
            <td>İsim</td>
            <td> Mevcut Miktar</td>
            <td>İşlem yapılacak miktar</td>
          </NavRow>
        </thead>
        <tbody>
          <tr className="table-row">
            <td className="product-img">
              <Image src={products.url} />
            </td>
            <td className="product-id">{products.id}</td>
            <td className="product-name">{products.name}</td>
            <td className="product-supply">{stok}</td>
            <td className="supply-input">
            <div className="actions">
                <input
                  class="btn btn-danger ekle"
                  type="submit"
                  onClick={decreaseSupply}
                  value="-"
                />
                <input onChange={inputValues} type="number" className="form-control" id="miktar"></input>
                <input
                  class="btn btn-success ekle"
                  type="submit"
                  onClick={increaseSupply}
                  value="+"
                />
              </div>
              
            </td>
            <td className="etkileşim"></td>
            <td>
              
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Product;
