import tripr from "../img/TripThumb.png";
import pd from "../img/PhotoThumb.png";
import gitmusic from "../img/GitmusicThumb.png";
import mern from "../img/mernstore1.png";
import crowlers from "../img/VineThumb.png";
import cards from "../img/CardThumb.png";
import records from "../img/RecordThumb.png";
import recovery from "../img/RecoveryThumb.png";
import searsucker from "../img/SearThumb.png";

export const webData = [
  {
    id: 1,
    img: mern,
    alt: "mern shop",
    title: "MERN SHOP",
    date: "2021",
    desc: "E-Comm Store is a full stack e-commerce site, allowing users to login with authorization, add items to a cart, and checkout with Stripe. Items can be filtered and sorted.",
    tech: "React / MongoDB / Mongoose / Styled Components / NodeJS / Express",
    link: "https://ecomm-store-mern.herokuapp.com/",
    github: "https://github.com/MatteoThomas/mern-store",
  },
  {
    id: 2,
    img: tripr,
    alt: "tripper",
    title: "TRIPR.",
    date: "2021",
    desc: "tripr. is an an adventure logging app utilizing Node.js, Express, and Handlebars.tripr. is an an adventure logging app utilizing Node.js, Express, and Handlebars.",
    tech: "Handlebars / Sequelize / MySQL / NodeJS / Express",
    link: "https://tripr-travel-app.herokuapp.com/",
    github: "https://github.com/MatteoThomas/tripr",
  },
  {
    id: 3,
    img: pd,
    alt: "photo drop",
    title: "PHOTO DROP",
    date: "2021",
    desc: "Photo Drop is a photo sharing project using React, Express, and Cloudinary. Photo Drop is a photo sharing project using React, Express, and Cloudinary.",
    tech: "React / MongoDB / Mongoose / GraphQL / Cloudinary API / NodeJS / Express",
    link: "https://photo-drop2.herokuapp.com/",
    github: "https://github.com/MatteoThomas/photo-drop",
  },
  {
    id: 4,
    img: gitmusic,
    alt: "git music",
    title: "GIT. MUSIC",
    date: "2021",
    desc: "git MUSIC is a music finding app that relies on the Discogs API for artist information. git MUSIC is a music finding app that relies on the Discogs API for artist information.",
    tech: "JavaScript / APIs",
    link: "https://matteothomas.github.io/git.Music/",
    github: "https://github.com/MatteoThomas/git.Music",
  },
];

export const graphicData = [
  {
    name: "VINE ST.",
    img: crowlers,
    alt: "Vine Street crowler label",
    desc: "Vine St. bottle shop. Seattle WA / 2015, ",
    link: "https://matteoelliott.myportfolio.com/gd",
  },
  {
    name: "WHISKEY PICKLE RECORDS",
    img: records,
    alt: "Whiskey Pickle Records labels",
    desc: "Whiskey Pickle Records. Austin TX / 2014 - Current",
    link: "https://matteoelliott.myportfolio.com/whiskey-pickle",
  },
  {
    name: "RECOVERY",
    img: recovery,
    alt: "Recovery banner",
    desc: "Recovery Event Austin TX / 2013",
    link: "https://matteoelliott.myportfolio.com/recovery",
  },
  {
    name: "LOFT718",
    img: cards,
    alt: "Loft718 business cards",
    desc: "LOFT 718 Nightclub Austin TX / 2010-2014",
    link: "https://matteoelliott.myportfolio.com/loft-718",
  },
  {
    name: "SEARSUCKER",
    img: searsucker,
    alt: "Searsucker south by south west flyer",
    desc: "Searsucker SXSW Austin TX / 2013",
    link: "https://matteoelliott.myportfolio.com/searsucker",
  },
];
