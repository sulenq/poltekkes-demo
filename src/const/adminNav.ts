import { Layout, Package, Receipt, UsersThree } from "@phosphor-icons/react";

const adminNav = [
  {
    name: "Dashboards",
    icon: Layout,
    nested: false,
    link: "/admin",
  },
  {
    name: "Transaksi",
    icon: Receipt,
    nested: false,
    link: "/admin/transaksi",
  },
  {
    name: "Produk",
    icon: Package,
    nested: true,
    subNav: [
      {
        name: "Kategori Produk",
        link: "/admin/kategori-produk",
      },
      {
        name: "Kelola Produk",
        link: "/admin/kelola-produk",
      },
    ],
  },
  {
    name: "Pengguna",
    icon: UsersThree,
    nested: true,
    subNav: [
      {
        name: "Customer",
        link: "/admin/pengguna-customer",
      },
    ],
  },
];

export default adminNav;
