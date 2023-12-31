import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "../middleware/RequireAuth";
import MissingPage from "../pages/MissingPage";
import AdminDashboards from "../pages/admin/AdminDashboards";
import AdminKelolaProduk from "../pages/admin/AdminKelolaProduk";
import AdminTransaksi from "../pages/admin/AdminTransaksi";
import AdminKategoriProduk from "../pages/admin/AdminKategoriProduk";
import AdminCustomer from "../pages/admin/AdminCustomer";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <AdminDashboards />
          </RequireAuth>
        }
      />

      <Route
        path="/transaksi"
        element={
          <RequireAuth>
            <AdminTransaksi />
          </RequireAuth>
        }
      />

      <Route
        path="/kategori-produk"
        element={
          <RequireAuth>
            <AdminKategoriProduk />
          </RequireAuth>
        }
      />

      <Route
        path="/kelola-produk"
        element={
          <RequireAuth>
            <AdminKelolaProduk />
          </RequireAuth>
        }
      />

      <Route
        path="/pengguna-customer"
        element={
          <RequireAuth>
            <AdminCustomer />
          </RequireAuth>
        }
      />

      <Route
        path="*"
        element={<MissingPage />}
      />
    </Routes>
  );
}
