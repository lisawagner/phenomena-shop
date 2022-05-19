import {
  MdAdd,
  MdRemove,
  } from 'react-icons/md'


export const NAVLINKS = [
  {
    id: "01",
    name: "Home",
    url: "/",
    iconClose: <MdRemove />,
    iconOpen: <MdAdd />
    // submenu: [{}]
  },
  {
    id: "02",
    name: "Collections",
    url: "/favourites",
    iconClose: <MdRemove />,
    iconOpen: <MdAdd />,
    submenu: [
      {
        id: "02.01",
        title: "Essentials 2022",
        url: "/collections"
      },
      {
        id: "02.02",
        title: "Couture Cafe",
        url: "/collections"
      },
      {
        id: "02.03",
        title: "Pandemica",
        url: "/collections"
      },
      {
        id: "02.04",
        title: "Apoc",
        url: "/collections"
      },
    ]
  },
  {
    id: "03",
    name: "Clothing",
    url: "/products",
    iconClose: <MdRemove />,
    iconOpen: <MdAdd />,
    submenu: [
      {
        id: "03.01",
        title: "Tops",
        url: "/cart"
      },
      {
        id: "03.02",
        title: "Pants",
        url: "/cart"
      },
      {
        id: "03.03",
        title: "Sweaters",
        url: "/cart"
      },
      {
        id: "03.04",
        title: "Coats + Jackets",
        url: "/cart"
      },
      {
        id: "03.05",
        title: "Dresses",
        url: "/cart"
      },
      {
        id: "03.06",
        title: "Shirts",
        url: "/cart"
      },
      {
        id: "03.07",
        title: "Skirts",
        url: "/cart"
      },
    ]
  },
  {
    id: "04",
    name: "Accessories",
    url: "/products",
    iconClose: <MdRemove />,
    iconOpen: <MdAdd />,
    submenu: [
      {
        id: "04.01",
        title: "Bags",
        url: "/products"
      },
      {
        id: "04.02",
        title: "Hats",
        url: "/products"
      },
      {
        id: "04.03",
        title: "Belts",
        url: "/products"
      },
      {
        id: "04.04",
        title: "Scarves",
        url: "/products"
      },
      {
        id: "04.05",
        title: "Jewelry",
        url: "/products"
      },
      {
        id: "04.06",
        title: "Watches",
        url: "/products"
      },
      {
        id: "04.07",
        title: "Wallets",
        url: "/products"
      },
      {
        id: "04.08",
        title: "Shoes",
        url: "/products"
      },
      {
        id: "04.08",
        title: "Socks",
        url: "/products"
      },
    ]
  },
  {
    id: "05",
    name: "Essence of Phenomena",
    url: "/phenomena",
    iconClose: <MdRemove />,
    iconOpen: <MdAdd />,
    submenu: [
      {
        id: "05.01",
        title: "Storybook",
        url: "/phenomena"
      },
      {
        id: "05.02",
        title: "The World of Phenomena",
        url: "/phenomena"
      },
      {
        id: "05.03",
        title: "Circle of Life",
        url: "/phenomena"
      },
      {
        id: "05.04",
        title: "Manifesto",
        url: "/phenomena"
      },
    ]
  },
  {
    id: "06",
    name: "Contact",
    url: "#contact",
    iconClose: <MdRemove />,
    iconOpen: <MdAdd />
    // submenu: [{}]
  },
]
