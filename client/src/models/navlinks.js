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
    url: "/collections",
    iconClose: <MdRemove />,
    iconOpen: <MdAdd />,
    submenu: [
      {
        id: "02.01",
        title: "Spring",
        url: "/products/spring"
      },
      {
        id: "02.021",
        title: "Essentials 2022",
        url: "/essentials2022"
      },
      {
        id: "02.03",
        title: "Couture Cafe",
        url: "/couturecafe"
      },
      {
        id: "02.04",
        title: "Pandemica",
        url: "/pandemica"
      },
      {
        id: "02.05",
        title: "Apoc",
        url: "/apoc"
      },
    ]
  },
  {
    id: "03",
    name: "Clothing",
    url: "/products/clothing",
    iconClose: <MdRemove />,
    iconOpen: <MdAdd />,
    submenu: [
      {
        id: "03.01",
        title: "Tops",
        url: "/products/tops"
      },
      {
        id: "03.02",
        title: "Pants",
        url: "/products/pants"
      },
      {
        id: "03.03",
        title: "Sweaters",
        url: "/products/sweaters"
      },
      {
        id: "03.04",
        title: "Coats + Jackets",
        url: "/products/jackets"
      },
      {
        id: "03.05",
        title: "Dresses",
        url: "/products/dresses"
      },
      {
        id: "03.06",
        title: "Shirts",
        url: "/products/shirts"
      },
      {
        id: "03.07",
        title: "Skirts",
        url: "/products/skirts"
      },
    ]
  },
  {
    id: "04",
    name: "Accessories",
    url: "/products/accessories",
    iconClose: <MdRemove />,
    iconOpen: <MdAdd />,
    submenu: [
      {
        id: "04.01",
        title: "Bags",
        url: "/products/bags"
      },
      {
        id: "04.02",
        title: "Hats",
        url: "/products/hats"
      },
      {
        id: "04.03",
        title: "Belts",
        url: "/products/belts"
      },
      {
        id: "04.04",
        title: "Scarves",
        url: "/products/scarves"
      },
      {
        id: "04.05",
        title: "Jewelry",
        url: "/products/jewelry"
      },
      {
        id: "04.06",
        title: "Watches",
        url: "/products/watches"
      },
      {
        id: "04.07",
        title: "Wallets",
        url: "/products/wallets"
      },
      {
        id: "04.08",
        title: "Shoes",
        url: "/products/shoes"
      },
      {
        id: "04.09",
        title: "Socks",
        url: "/products/socks"
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
