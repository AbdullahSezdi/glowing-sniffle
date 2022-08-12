import React, { useState } from "react";

export default function UpdateStock() {
  const products = []
  const [stok, setStok] = useState(0);

  const increaseSupply = (event) => {
    setStok(
      stok + event.target.value

    );
  };
  const decreaseSupply = (event) => {
    if (
      (stok - event.target.value) >= 0
    ) {
      setStok(
        stok - event.target.value
      );
    } else { // component'e çevir
      var uyarı = document.createElement("p");
      uyarı.innerHTML = "Yeterli Stogunuz yok";
      uyarı.className = "alert alert-danger";
      uyarı.id = "error";
      document
        .getElementsByClassName("actions")
      [products.id - 1].appendChild(uyarı);

      setTimeout(() => {
        document.getElementById("error").remove();
      }, "3500");
    }
  };


  if (products === [] || products === undefined || products.length < 1 || products === null) {
    return (
      <div className="table-is-empty">Stok durumu güncellenecek ürün bulunamadı!</div>
    );
  }

  return (
    <table className="table">
      <thead>
        <tr className="table-row">
          <td>Ürün</td>
          <td>İsim</td>
          <td>Uygunluk</td>
          <td>Mevcut Miktar</td>
        </tr>
      </thead>
      <tbody>
        {
          products.map((product, index) => {
            return (
              <tr key={index}>
                <td data-label="Ürün">{product.productImage}</td>
                <td data-label="İsim">{product.productName}</td>
                <td data-label="Uygunluk">{product.availability ? "Mevcut" : "Mevcut değil"}</td>
                <td data-label="Mevcut Miktar">{product.stockCount}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
}