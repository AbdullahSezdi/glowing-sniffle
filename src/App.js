import { Routes, Route } from "react-router-dom";

import Welcome from "./pages/welcome";

import KantinLayout from "./layouts/kantin-layout";
import AdminLayout from "./layouts/admin-layout";

import HomePage from "./pages/kantin/home-page";
import UserBasket from "./pages/kantin/user-basket";
import OrderHistory from "./pages/kantin/order-history";
import ProductList from "./pages/kantin/product-list";

import AdminHomePage from "./pages/admin/home-page";

import ManageProducts from "./pages/admin/manage-products/index";
import UpdateStock from "./pages/admin/manage-products/update-stock";
import CreateProduct from "./pages/admin/manage-products/create-product";
import EditProduct from "./pages/admin/manage-products/edit-product";

import ManageUsers from "./pages/admin/manage-users";
import UserDebts from "./pages/admin/user-debts";
import IncomingOrders from "./pages/admin/incoming-orders";

import Page401 from "./pages/page-401";
import Page404 from "./pages/page-404";

import { BasketProvider } from "./contexts/basket-context";
import { UserPrefProvider } from "./contexts/user-prefences";


import PrivateRoute from "./components/private-route";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={
        <UserPrefProvider>
          <Welcome />
        </UserPrefProvider>
      } />

      <Route path="kantin" element={
        <PrivateRoute>
          <KantinLayout />
        </PrivateRoute>
      }>
        <Route index element={<HomePage />} />
        <Route path="urunler" element={<ProductList />} />
        <Route path='siparis-gecmisi' element={<OrderHistory />} />
        <Route path='sepetim' element={
          <BasketProvider>
            <UserBasket />
          </BasketProvider >
        } />
      </Route>

      <Route path="admin" element={
        <PrivateRoute>
          <AdminLayout />
        </PrivateRoute>
      }>
        <Route index element={<AdminHomePage />} />
        <Route path='kullanicilar' element={<ManageUsers />} />
        <Route path='urunler' element={<ManageProducts />}>
          <Route index path="stok-durumu" element={<UpdateStock />}></Route>
          <Route path="guncelleme" element={<EditProduct />}></Route>
          <Route path="ekleme" element={<CreateProduct />}></Route>
        </Route>
        <Route path='gelen-siparisler' element={<IncomingOrders />} />
        <Route path='kullanici-borclari' element={<UserDebts />} />
      </Route>

      <Route path='erisim-engellendi' element={<Page401 />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  )
}