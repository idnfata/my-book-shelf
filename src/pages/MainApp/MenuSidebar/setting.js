import {
  IconProduct,
  IconDocument,
  IconImage,
  IconTwoPeople,
  IconUserSetting, 
  IconRightTriangle,
  IconShip,
  IconSetting,
  IconTransaction,
  IconAbout,
  IconHome,
  IconBookShelf,
  IconGiveGift,
  IconSearch,
  IconHomeSolid,
} from "@assets";


export const navAdmin = [
  {
    title: "Products",
    path: '/product/list',
    icon: IconProduct,
    subMenu: [
      { title: "Product List", path: "/product/list", icon: IconRightTriangle },
      { title: "Categories", path: "/product/category", icon: IconRightTriangle },
    ],
  },
  { title: "Blogs", path: "/blog", icon: IconDocument },
  { title: "Banner", path: "/banner", icon: IconImage },
  { title: "Clients", path: "/client", icon: IconTwoPeople },
  {
    title: "Principal & Partners",
    path: "/principal-partner",
    icon: IconTwoPeople,
  },
  { title: "User Management", path: "/user", icon: IconUserSetting },
  { title: "About", path: "/about", icon: IconAbout },
];


export const navAgent = [
  {
    title: "Home",
    path: '/',
    icon: IconHomeSolid,
  },
  { title: "Search", path: "/search", icon: IconSearch },
  { title: "My Shelf", path: "/my-shelf", icon: IconBookShelf },
  { title: "Contribute", path: "/contribute", icon: IconGiveGift },

  // {
  //   title: "Kapal",
  //   path: "/vessels/ship",
  //   icon: IconShip,
  //   subMenu: [
  //     { title: "Kapal", path: "/vessels/ship", icon: IconRightTriangle },
  //     { title: "Tongkang", path: "/vessels/barge", icon: IconRightTriangle },
  //   ],
  // },
];

