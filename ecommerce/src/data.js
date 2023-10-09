export const sliderItems = [
  {
    id: 1,
    img: "/public/fokharwithout background.png",
    title: "VENTE D'ÉTÉ",
    desc: "NE COMPROMETTEZ PAS LE STYLE ! OBTENEZ 30 % DE RÉDUCTION SUR LES NOUVELLES ARRIVÉES.",
    bg: "f5fafd",
  },
  {
    id: 2,
    img: "https://i.ibb.co/DG69bQ4/2.png",
    title: "COLLECTION D'AUTOMNE",
    desc: "NE COMPROMETTEZ PAS LE STYLE ! OBTENEZ 30 % DE RÉDUCTION SUR LES NOUVELLES ARRIVÉES.",
    bg: "fcf1ed",
  },
  {
    id: 3,
    img: "https://i.ibb.co/cXFnLLV/3.png",
    title: "LES SOUVENIRS DJERBIENNE",
    desc: "NE COMPROMETTEZ PAS LE STYLE ! OBTENEZ 30 % DE RÉDUCTION SUR LES NOUVELLES ARRIVÉES.",
    bg: "fbf0f4",
  },
  
  ];

  export const categories = [
    {
      id: 1,
      img: "#B8860B",
      title: "HOMMME",
      cat: "homme"
    },
    {
      id: 2,
      img: "#FF7F50",
      title: "FEMME",
      cat: "femme"
    },
    {
      id: 3,
      img: "#6495ED",
      title: "ENFANT",
      cat: "enfant"
    },
  ];

  export const popularProducts = [
    {
      id:1,
      img:"https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    },
    {
      id:2,
      img:"https://cdn.shopify.com/s/files/1/0101/4832/products/Angela_Natural_Tee.png?v=1606780388",
    },
    {
      id:3,
      img:"https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    },
    {
      id:4,
      img:"https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
    },
    {
      id:5,
      img:"https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    },
    {
      id:6,
      img:"https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    },
    {
      id:7,
      img:"https://www.vintageindustries.nl/download_front/qympzk1762/2217_Arrow_Jacket_Forest.png",
    },
    {
      id:8,
      img:"https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
    },
  ]





  import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});