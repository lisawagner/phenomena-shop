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
        title: "Essentials 2022",
        url: "/collections"
      },
      {
        title: "Couture Cafe",
        url: "/collections"
      },
      {
        title: "Pandemica",
        url: "/collections"
      },
      {
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
        title: "Tops",
        url: "/cart"
      },
      {
        title: "Pants",
        url: "/cart"
      },
      {
        title: "Sweaters",
        url: "/cart"
      },
      {
        title: "Coats + Jackets",
        url: "/cart"
      },
      {
        title: "Dresses",
        url: "/cart"
      },
      {
        title: "Shirts",
        url: "/cart"
      },
      {
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
        title: "Bags",
        url: "/products"
      },
      {
        title: "Hats",
        url: "/products"
      },
      {
        title: "Belts",
        url: "/products"
      },
      {
        title: "Scarves",
        url: "/products"
      },
      {
        title: "Jewelry",
        url: "/products"
      },
      {
        title: "Watches",
        url: "/products"
      },
      {
        title: "Wallets",
        url: "/products"
      },
      {
        title: "Shoes",
        url: "/products"
      },
      {
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
        title: "Storybook",
        url: "/phenomena"
      },
      {
        title: "The World of Phenomena",
        url: "/phenomena"
      },
      {
        title: "Circle of Life",
        url: "/phenomena"
      },
      {
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
