import { useState } from "react";
import SwitchTab from "../../../components/switch-tab";
import CreateProduct from "./create-product";
import EditProduct from "./edit-product";
import UpdateStock from "./update-stock";

import { Outlet } from "react-router-dom";

export default function ManageProducts() {
  const [currentTab, setCurrentTab] = useState("editProduct");
  const tabs = [
    { tabName: "Ürün Güncelleme", tabUrl: "guncelleme" },
    { tabName: "Stok Güncelleme", tabUrl: "stok-durumu"  },
    { tabName: "Yeni Ürün Ekleme", tabUrl: "ekleme"  }
  ]
  return (
    <>
      <SwitchTab currentTab={currentTab} setCurrentTab={setCurrentTab} tabs={tabs} />
      <Outlet />
    </>
  );
}
