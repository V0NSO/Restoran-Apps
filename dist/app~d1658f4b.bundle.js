(()=>{"use strict";var n,A={756:(n,A,e)=>{e.d(A,{Z:()=>m});var i=e(537),o=e.n(i),r=e(645),a=e.n(r),t=e(667),p=e.n(t),l=new URL(e(678),e.b),s=a()(o());s.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap);"]);var d=p()(l);s.push([n.id,`* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Poppins", sans-serif;\n}\n\na {\n  display: inline-block;\n  min-width: 44px;\n  min-height: 44px;\n  color: white;\n  text-decoration: none;\n  cursor: pointer;\n}\nbody {\n  font-family: "Poppins", sans-serif;\n  background-color: #6c5f5b;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n/*HEADER*/\n.navbar {\n  width: 100%;\n  padding-left: 20px;\n  height: 55px;\n  display: flex;\n  position: relative;\n  align-items: center;\n  background-color: #e65b00;\n  justify-content: space-around;\n}\n/*HERO--------------------------------*/\n.hero {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  margin: 1rem 0 0 0;\n  background-image: url(${d});\n  min-height: 50vh;\n  text-align: center;\n  background-position: center;\n  background-size: cover;\n}\n.hero-inner {\n  background-color: #e65b00;\n  padding: 5px 10px;\n  border-radius: 7px;\n}\n\n.hero-title {\n  color: #ffffff;\n  font-weight: 800;\n  font-size: 3em;\n}\n\n.hero-description {\n  color: #ffffff;\n  font-size: 1em;\n  font-weight: 600;\n}\n\n.app-bar .app-bar__navigation {\n  position: absolute;\n  top: 50px;\n  left: -180px;\n  width: 150px;\n  transition: all 0.3s;\n  padding: 8px;\n  background-color: #e65b00;\n  overflow: hidden;\n}\n\n.app-bar .app-bar__navigation.open {\n  left: 0;\n}\n.app-bar .app-bar__navigation ul li a {\n  display: inline-block;\n  text-decoration: none;\n  color: white;\n  padding: 13px;\n  width: 100%;\n  transition: color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;\n}\n\n.app-bar .app-bar__navigation ul li a:hover {\n  color: black;\n  background-color: #e65b00;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 0 8px rgba(0, 0, 0, 0.4);\n}\n.hamburgerMenu {\n  display: none;\n}\n\n.links {\n  font-size: 18px;\n}\n\n.links a {\n  color: #fff;\n  text-decoration: none;\n  padding: 13px 10px 13px 10px;\n}\n\n.links a:hover {\n  background-color: #be5915;\n}\n\n#hamburgerButton {\n  padding: 5px;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.app-bar .app-bar__menu button i {\n  background-color: transparent;\n  border: none;\n  font-size: 18px;\n  padding: 10px;\n  cursor: pointer;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.movies {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 16px;\n  margin: 32px 0;\n}\n.movie-item {\n  width: 100%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.movie-item__header {\n  position: relative;\n}\n\n.movie-item .movie-item__header .movie-item__header__poster {\n  width: 100%;\n}\n\n.movie-item .movie-item__header .movie-item__header__rating {\n  position: absolute;\n  padding: 8px;\n  bottom: 20px;\n  left: 0;\n  display: inline-block;\n  background-color: black;\n  color: white;\n}\n\n.movie-item\n  .movie-item__header\n  .movie-item__header__rating\n  .movie-item__header__rating__score {\n  margin-left: 10px;\n}\n\n.movie-item .movie-item__content {\n  padding: 16px;\n}\n\n.movie-item .movie-item__content h3 {\n  margin: 0 0 10px 0;\n}\n\n.movie-item .movie-item__content h3 a {\n  display: inline-block;\n  color: #e65b00;\n  min-width: 44px;\n  min-height: 44px;\n  text-decoration: none;\n  font-size: 1.2em;\n  font-weight: bold;\n  margin-top: 10px;\n  transition: color 0.3s ease, transform 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n\n.movie-item .movie-item__content h3 a::before {\n  content: "";\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background-color: #e65b00;\n  bottom: 0;\n  transform: scaleX(0);\n  transition: transform 0.3s ease;\n}\n\n.movie-item .movie-item__content h3 a:hover {\n  color: #fc2947;\n  transform: translateY(-3px);\n}\n\n.movie-item .movie-item__content h3 a:hover::before {\n  transform: scaleX(1);\n}\n.movie-item .movie-item__content p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4; /* number of lines to show */\n  -webkit-box-orient: vertical;\n}\n/*MAIN*/\n.content {\n  background-color: #fff;\n  margin: 0 auto;\n  min-height: 100%;\n  margin: 1rem;\n  padding: 1rem;\n  border-radius: 1rem;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n\n\n\n.content .content__heading {\n  font-family: "Poppins", sans-serif;\n  display: flex;\n  font-weight: bold;\n  align-items: center;\n  justify-content: center;\n}\n/*MOVIEEEEEE*/\n\n/* Aturan media query untuk perangkat dengan lebar maksimum 600px (mobile) */\n@media (max-width: 600px) {\n  .navbar {\n    padding-left: 10px; /* Kurangi padding di kiri navbar */\n    justify-content: space-between;\n  }\n\n  .hamburgerMenu {\n    display: block;\n    margin-right: 20px;\n  }\n\n  .hamburgerMenu label:hover,\n  .navbar #hamburger:checked ~ .hamburgerMenu > label {\n    background-color: #be5915;\n  }\n\n  .app-bar__navigation {\n    position: absolute;\n    top: 50px;\n    left: -180px;\n    width: 150px;\n    transition: all 0.3s;\n    padding: 8px;\n    background-color: #e65b00;\n    overflow: hidden;\n  }\n\n  .app-bar__navigation.open {\n    left: 0;\n  }\n\n  .app-bar .app-bar__navigation ul li a {\n    display: inline-block;\n    text-decoration: none;\n    color: white;\n    padding: 13px;\n    width: 100%;\n    transition: color 0.3s ease, background-color 0.3s ease,\n      box-shadow 0.3s ease;\n  }\n\n  .app-bar .app-bar__navigation ul li a:hover {\n    color: black;\n    background-color: #e65b00;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 0 8px rgba(0, 0, 0, 0.4);\n  }\n\n  .restaurant-list {\n    width: 100%;\n    margin: 0;\n    padding: 5px 0 10px;\n    border-radius: 0;\n  }\n}\n/*SKIP TO CONTENT*/\n.skip-link {\n  position: absolute;\n  left: -9999px;\n  top: auto;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n}\n\n.skip-link:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  background-color: #007bff; /* Ganti dengan warna latar belakang yang Anda inginkan */\n  color: #fff; /* Ganti dengan warna teks yang Anda inginkan */\n  padding: 10px;\n  z-index: 999;\n}\n.movie {\n  margin: 0 auto;\n  width: 100%;\n  max-width: 800px;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 18px 16px;\n}\n\n.movie .movie__poster {\n  width: 100%;\n  max-width: 400px;\n}\n\n.movie .movie__info h4 {\n  margin: 8px 0;\n}\n.movie .movie__info h3 {\n  background-color: #e65b00;\n  color: white;\n  margin: 8px 0;\n}\n.movie__info {\n  background-color: #f2f2f2;\n  padding: 16px;\n  margin: 16px 0;\n}\n\n.movie_overview {\n  background-color: #f2f2f2;\n  padding: 16px;\n  margin: 16px 0;\n}\n/*\n  Like\n*/\n.like {\n  width: 44px;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #e65b00;\n\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n/*FOOTER*/\n.footer-section {\n  width: 100%;\n  display: flex;\n  color: white;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  padding: 1rem 0;\n  background-color: #201e1e;\n}\n.akhiran {\n  background-color: rgb(32, 30, 30);\n  align-items: center;\n  font: 500;\n}\n.footer-section h2 {\n  margin-bottom: 1rem;\n  position: relative;\n}\n\n.footer-section h2::after {\n  width: 4rem;\n  height: 0.2rem;\n  background: #e65b00;\n  position: absolute;\n  top: 2.5rem;\n  left: 0;\n}\n\n.footer-section p {\n  transition: all 0.2s linear;\n  margin-bottom: 0.6em;\n}\n\n.footer-section p:hover {\n  transition: all 0.2s linear;\n  transform: translateX(4px);\n}\n\n.footer-section a:hover {\n  color: #f46d13;\n}\n\n.footer-item {\n  margin: 1rem;\n}\n\n.footer-item ul {\n  display: flex;\n  justify-content: space-around;\n  list-style: none;\n}\n\n.footer-item li {\n  margin-right: 1rem;\n}\n\n.social ul li {\n  font-size: 1.2rem;\n  cursor: pointer;\n  transition: all 0.2s linear;\n}\n\n.social ul li:hover {\n  color: #e65b00;\n  transform: scale(1.1);\n  transition: all 0.2s linear;\n}\n\n@media screen and (max-width: 320px) {\n  .footer-section {\n    flex-direction: column;\n    justify-content: flex-start;\n    padding-left: 2rem;\n  }\n}\n`,"",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,kCAAkC;AACpC;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,qBAAqB;EACrB,eAAe;AACjB;AACA;EACE,kCAAkC;EAClC,yBAAyB;EACzB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;AACxB;;AAEA,SAAS;AACT;EACE,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,yBAAyB;EACzB,6BAA6B;AAC/B;AACA,uCAAuC;AACvC;EACE,aAAa;EACb,WAAW;EACX,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,yDAAoD;EACpD,gBAAgB;EAChB,kBAAkB;EAClB,2BAA2B;EAC3B,sBAAsB;AACxB;AACA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,YAAY;EACZ,YAAY;EACZ,oBAAoB;EACpB,YAAY;EACZ,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,OAAO;AACT;AACA;EACE,qBAAqB;EACrB,qBAAqB;EACrB,YAAY;EACZ,aAAa;EACb,WAAW;EACX,6EAA6E;AAC/E;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,oEAAoE;AACtE;AACA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,4BAA4B;AAC9B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EACf,aAAa;EACb,eAAe;EACf,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,SAAS;EACT,cAAc;AAChB;AACA;EACE,WAAW;EACX,0CAA0C;EAC1C,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,OAAO;EACP,qBAAqB;EACrB,uBAAuB;EACvB,YAAY;AACd;;AAEA;;;;EAIE,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,qBAAqB;EACrB,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,gDAAgD;EAChD,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,yBAAyB;EACzB,SAAS;EACT,oBAAoB;EACpB,+BAA+B;AACjC;;AAEA;EACE,cAAc;EACd,2BAA2B;AAC7B;;AAEA;EACE,oBAAoB;AACtB;AACA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,oBAAoB;EACpB,qBAAqB,EAAE,4BAA4B;EACnD,4BAA4B;AAC9B;AACA,OAAO;AACP;EACE,sBAAsB;EACtB,cAAc;EACd,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,yCAAyC;EACzC,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,mBAAmB;EACnB,uBAAuB;AACzB;;;;AAIA;EACE,kCAAkC;EAClC,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,uBAAuB;AACzB;AACA,aAAa;;AAEb,4EAA4E;AAC5E;EACE;IACE,kBAAkB,EAAE,mCAAmC;IACvD,8BAA8B;EAChC;;EAEA;IACE,cAAc;IACd,kBAAkB;EACpB;;EAEA;;IAEE,yBAAyB;EAC3B;;EAEA;IACE,kBAAkB;IAClB,SAAS;IACT,YAAY;IACZ,YAAY;IACZ,oBAAoB;IACpB,YAAY;IACZ,yBAAyB;IACzB,gBAAgB;EAClB;;EAEA;IACE,OAAO;EACT;;EAEA;IACE,qBAAqB;IACrB,qBAAqB;IACrB,YAAY;IACZ,aAAa;IACb,WAAW;IACX;0BACsB;EACxB;;EAEA;IACE,YAAY;IACZ,yBAAyB;IACzB,oEAAoE;EACtE;;EAEA;IACE,WAAW;IACX,SAAS;IACT,mBAAmB;IACnB,gBAAgB;EAClB;AACF;AACA,kBAAkB;AAClB;EACE,kBAAkB;EAClB,aAAa;EACb,SAAS;EACT,UAAU;EACV,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,yBAAyB,EAAE,yDAAyD;EACpF,WAAW,EAAE,+CAA+C;EAC5D,aAAa;EACb,YAAY;AACd;AACA;EACE,cAAc;EACd,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,0BAA0B;EAC1B,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,cAAc;AAChB;AACA;;CAEC;AACD;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;;EAEzB,eAAe;EACf,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,SAAS;;EAET,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;;AAEA,SAAS;AACT;EACE,WAAW;EACX,aAAa;EACb,YAAY;EACZ,6BAA6B;EAC7B,eAAe;EACf,eAAe;EACf,yBAAyB;AAC3B;AACA;EACE,iCAAiC;EACjC,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;EACX,OAAO;AACT;;AAEA;EACE,2BAA2B;EAC3B,oBAAoB;AACtB;;AAEA;EACE,2BAA2B;EAC3B,0BAA0B;AAC5B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,2BAA2B;AAC7B;;AAEA;EACE,cAAc;EACd,qBAAqB;EACrB,2BAA2B;AAC7B;;AAEA;EACE;IACE,sBAAsB;IACtB,2BAA2B;IAC3B,kBAAkB;EACpB;AACF",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Poppins", sans-serif;\n}\n\na {\n  display: inline-block;\n  min-width: 44px;\n  min-height: 44px;\n  color: white;\n  text-decoration: none;\n  cursor: pointer;\n}\nbody {\n  font-family: "Poppins", sans-serif;\n  background-color: #6c5f5b;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n/*HEADER*/\n.navbar {\n  width: 100%;\n  padding-left: 20px;\n  height: 55px;\n  display: flex;\n  position: relative;\n  align-items: center;\n  background-color: #e65b00;\n  justify-content: space-around;\n}\n/*HERO--------------------------------*/\n.hero {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  margin: 1rem 0 0 0;\n  background-image: url("../public/hero-image_2.jpeg");\n  min-height: 50vh;\n  text-align: center;\n  background-position: center;\n  background-size: cover;\n}\n.hero-inner {\n  background-color: #e65b00;\n  padding: 5px 10px;\n  border-radius: 7px;\n}\n\n.hero-title {\n  color: #ffffff;\n  font-weight: 800;\n  font-size: 3em;\n}\n\n.hero-description {\n  color: #ffffff;\n  font-size: 1em;\n  font-weight: 600;\n}\n\n.app-bar .app-bar__navigation {\n  position: absolute;\n  top: 50px;\n  left: -180px;\n  width: 150px;\n  transition: all 0.3s;\n  padding: 8px;\n  background-color: #e65b00;\n  overflow: hidden;\n}\n\n.app-bar .app-bar__navigation.open {\n  left: 0;\n}\n.app-bar .app-bar__navigation ul li a {\n  display: inline-block;\n  text-decoration: none;\n  color: white;\n  padding: 13px;\n  width: 100%;\n  transition: color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;\n}\n\n.app-bar .app-bar__navigation ul li a:hover {\n  color: black;\n  background-color: #e65b00;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 0 8px rgba(0, 0, 0, 0.4);\n}\n.hamburgerMenu {\n  display: none;\n}\n\n.links {\n  font-size: 18px;\n}\n\n.links a {\n  color: #fff;\n  text-decoration: none;\n  padding: 13px 10px 13px 10px;\n}\n\n.links a:hover {\n  background-color: #be5915;\n}\n\n#hamburgerButton {\n  padding: 5px;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.app-bar .app-bar__menu button i {\n  background-color: transparent;\n  border: none;\n  font-size: 18px;\n  padding: 10px;\n  cursor: pointer;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.movies {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 16px;\n  margin: 32px 0;\n}\n.movie-item {\n  width: 100%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.movie-item__header {\n  position: relative;\n}\n\n.movie-item .movie-item__header .movie-item__header__poster {\n  width: 100%;\n}\n\n.movie-item .movie-item__header .movie-item__header__rating {\n  position: absolute;\n  padding: 8px;\n  bottom: 20px;\n  left: 0;\n  display: inline-block;\n  background-color: black;\n  color: white;\n}\n\n.movie-item\n  .movie-item__header\n  .movie-item__header__rating\n  .movie-item__header__rating__score {\n  margin-left: 10px;\n}\n\n.movie-item .movie-item__content {\n  padding: 16px;\n}\n\n.movie-item .movie-item__content h3 {\n  margin: 0 0 10px 0;\n}\n\n.movie-item .movie-item__content h3 a {\n  display: inline-block;\n  color: #e65b00;\n  min-width: 44px;\n  min-height: 44px;\n  text-decoration: none;\n  font-size: 1.2em;\n  font-weight: bold;\n  margin-top: 10px;\n  transition: color 0.3s ease, transform 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n\n.movie-item .movie-item__content h3 a::before {\n  content: "";\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background-color: #e65b00;\n  bottom: 0;\n  transform: scaleX(0);\n  transition: transform 0.3s ease;\n}\n\n.movie-item .movie-item__content h3 a:hover {\n  color: #fc2947;\n  transform: translateY(-3px);\n}\n\n.movie-item .movie-item__content h3 a:hover::before {\n  transform: scaleX(1);\n}\n.movie-item .movie-item__content p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4; /* number of lines to show */\n  -webkit-box-orient: vertical;\n}\n/*MAIN*/\n.content {\n  background-color: #fff;\n  margin: 0 auto;\n  min-height: 100%;\n  margin: 1rem;\n  padding: 1rem;\n  border-radius: 1rem;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n\n\n\n.content .content__heading {\n  font-family: "Poppins", sans-serif;\n  display: flex;\n  font-weight: bold;\n  align-items: center;\n  justify-content: center;\n}\n/*MOVIEEEEEE*/\n\n/* Aturan media query untuk perangkat dengan lebar maksimum 600px (mobile) */\n@media (max-width: 600px) {\n  .navbar {\n    padding-left: 10px; /* Kurangi padding di kiri navbar */\n    justify-content: space-between;\n  }\n\n  .hamburgerMenu {\n    display: block;\n    margin-right: 20px;\n  }\n\n  .hamburgerMenu label:hover,\n  .navbar #hamburger:checked ~ .hamburgerMenu > label {\n    background-color: #be5915;\n  }\n\n  .app-bar__navigation {\n    position: absolute;\n    top: 50px;\n    left: -180px;\n    width: 150px;\n    transition: all 0.3s;\n    padding: 8px;\n    background-color: #e65b00;\n    overflow: hidden;\n  }\n\n  .app-bar__navigation.open {\n    left: 0;\n  }\n\n  .app-bar .app-bar__navigation ul li a {\n    display: inline-block;\n    text-decoration: none;\n    color: white;\n    padding: 13px;\n    width: 100%;\n    transition: color 0.3s ease, background-color 0.3s ease,\n      box-shadow 0.3s ease;\n  }\n\n  .app-bar .app-bar__navigation ul li a:hover {\n    color: black;\n    background-color: #e65b00;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 0 8px rgba(0, 0, 0, 0.4);\n  }\n\n  .restaurant-list {\n    width: 100%;\n    margin: 0;\n    padding: 5px 0 10px;\n    border-radius: 0;\n  }\n}\n/*SKIP TO CONTENT*/\n.skip-link {\n  position: absolute;\n  left: -9999px;\n  top: auto;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n}\n\n.skip-link:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  background-color: #007bff; /* Ganti dengan warna latar belakang yang Anda inginkan */\n  color: #fff; /* Ganti dengan warna teks yang Anda inginkan */\n  padding: 10px;\n  z-index: 999;\n}\n.movie {\n  margin: 0 auto;\n  width: 100%;\n  max-width: 800px;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 18px 16px;\n}\n\n.movie .movie__poster {\n  width: 100%;\n  max-width: 400px;\n}\n\n.movie .movie__info h4 {\n  margin: 8px 0;\n}\n.movie .movie__info h3 {\n  background-color: #e65b00;\n  color: white;\n  margin: 8px 0;\n}\n.movie__info {\n  background-color: #f2f2f2;\n  padding: 16px;\n  margin: 16px 0;\n}\n\n.movie_overview {\n  background-color: #f2f2f2;\n  padding: 16px;\n  margin: 16px 0;\n}\n/*\n  Like\n*/\n.like {\n  width: 44px;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #e65b00;\n\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n/*FOOTER*/\n.footer-section {\n  width: 100%;\n  display: flex;\n  color: white;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  padding: 1rem 0;\n  background-color: #201e1e;\n}\n.akhiran {\n  background-color: rgb(32, 30, 30);\n  align-items: center;\n  font: 500;\n}\n.footer-section h2 {\n  margin-bottom: 1rem;\n  position: relative;\n}\n\n.footer-section h2::after {\n  width: 4rem;\n  height: 0.2rem;\n  background: #e65b00;\n  position: absolute;\n  top: 2.5rem;\n  left: 0;\n}\n\n.footer-section p {\n  transition: all 0.2s linear;\n  margin-bottom: 0.6em;\n}\n\n.footer-section p:hover {\n  transition: all 0.2s linear;\n  transform: translateX(4px);\n}\n\n.footer-section a:hover {\n  color: #f46d13;\n}\n\n.footer-item {\n  margin: 1rem;\n}\n\n.footer-item ul {\n  display: flex;\n  justify-content: space-around;\n  list-style: none;\n}\n\n.footer-item li {\n  margin-right: 1rem;\n}\n\n.social ul li {\n  font-size: 1.2rem;\n  cursor: pointer;\n  transition: all 0.2s linear;\n}\n\n.social ul li:hover {\n  color: #e65b00;\n  transform: scale(1.1);\n  transition: all 0.2s linear;\n}\n\n@media screen and (max-width: 320px) {\n  .footer-section {\n    flex-direction: column;\n    justify-content: flex-start;\n    padding-left: 2rem;\n  }\n}\n'],sourceRoot:""}]);const m=s},948:(n,A,e)=>{e.d(A,{Z:()=>t});var i=e(537),o=e.n(i),r=e(645),a=e.n(r)()(o());a.push([n.id,"@media screen and (min-width: 650px) {\n    .app-bar {\n      grid-template-columns: 1fr auto;\n      padding: 8px 32px;\n    }\n  \n    .app-bar .app-bar__brand h1 {\n      font-size: 1.5em;\n    }\n  \n    .app-bar .app-bar__menu {\n      display: none;\n    }\n  \n    .app-bar .app-bar__navigation {\n      position: static;\n      width: 100%;\n    }\n  \n    .app-bar .app-bar__navigation ul li {\n      display: inline-block;\n    }\n  \n    .app-bar .app-bar__navigation ul li a {\n      display: inline-block;\n      width: 120px;\n      text-align: center;\n      margin: 0;\n    }\n  \n    .movies {\n      grid-template-columns: 1fr 1fr;\n    }\n  \n    .movie {\n      grid-template-columns: auto 1fr;\n    }\n  \n    .movie .movie__title {\n      grid-column-start: 1;\n      grid-column-end: 3;\n    }\n  \n    .movie .movie__overview {\n      grid-column-start: 1;\n      grid-column-end: 3;\n    }\n  }\n  \n  @media screen and (min-width: 800px) {\n    .app-bar .app-bar__brand h1 {\n      font-size: 2em;\n    }\n  }\n  \n  @media screen and (min-width: 850px) {\n    .movies {\n      grid-template-columns: repeat(3, 1fr);\n    }\n  }\n  \n  @media screen and (min-width: 1200px) {\n    .movies {\n      grid-template-columns: repeat(4, 1fr);\n    }\n  }\n  \n  @media screen and (min-width: 1600px) {\n    .movies {\n      grid-template-columns: repeat(5, 1fr);\n    }\n  }\n  ","",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA;IACI;MACE,+BAA+B;MAC/B,iBAAiB;IACnB;;IAEA;MACE,gBAAgB;IAClB;;IAEA;MACE,aAAa;IACf;;IAEA;MACE,gBAAgB;MAChB,WAAW;IACb;;IAEA;MACE,qBAAqB;IACvB;;IAEA;MACE,qBAAqB;MACrB,YAAY;MACZ,kBAAkB;MAClB,SAAS;IACX;;IAEA;MACE,8BAA8B;IAChC;;IAEA;MACE,+BAA+B;IACjC;;IAEA;MACE,oBAAoB;MACpB,kBAAkB;IACpB;;IAEA;MACE,oBAAoB;MACpB,kBAAkB;IACpB;EACF;;EAEA;IACE;MACE,cAAc;IAChB;EACF;;EAEA;IACE;MACE,qCAAqC;IACvC;EACF;;EAEA;IACE;MACE,qCAAqC;IACvC;EACF;;EAEA;IACE;MACE,qCAAqC;IACvC;EACF",sourcesContent:["@media screen and (min-width: 650px) {\r\n    .app-bar {\r\n      grid-template-columns: 1fr auto;\r\n      padding: 8px 32px;\r\n    }\r\n  \r\n    .app-bar .app-bar__brand h1 {\r\n      font-size: 1.5em;\r\n    }\r\n  \r\n    .app-bar .app-bar__menu {\r\n      display: none;\r\n    }\r\n  \r\n    .app-bar .app-bar__navigation {\r\n      position: static;\r\n      width: 100%;\r\n    }\r\n  \r\n    .app-bar .app-bar__navigation ul li {\r\n      display: inline-block;\r\n    }\r\n  \r\n    .app-bar .app-bar__navigation ul li a {\r\n      display: inline-block;\r\n      width: 120px;\r\n      text-align: center;\r\n      margin: 0;\r\n    }\r\n  \r\n    .movies {\r\n      grid-template-columns: 1fr 1fr;\r\n    }\r\n  \r\n    .movie {\r\n      grid-template-columns: auto 1fr;\r\n    }\r\n  \r\n    .movie .movie__title {\r\n      grid-column-start: 1;\r\n      grid-column-end: 3;\r\n    }\r\n  \r\n    .movie .movie__overview {\r\n      grid-column-start: 1;\r\n      grid-column-end: 3;\r\n    }\r\n  }\r\n  \r\n  @media screen and (min-width: 800px) {\r\n    .app-bar .app-bar__brand h1 {\r\n      font-size: 2em;\r\n    }\r\n  }\r\n  \r\n  @media screen and (min-width: 850px) {\r\n    .movies {\r\n      grid-template-columns: repeat(3, 1fr);\r\n    }\r\n  }\r\n  \r\n  @media screen and (min-width: 1200px) {\r\n    .movies {\r\n      grid-template-columns: repeat(4, 1fr);\r\n    }\r\n  }\r\n  \r\n  @media screen and (min-width: 1600px) {\r\n    .movies {\r\n      grid-template-columns: repeat(5, 1fr);\r\n    }\r\n  }\r\n  "],sourceRoot:""}]);const t=a},46:(n,A,e)=>{var i=e(379),o=e.n(i),r=e(795),a=e.n(r),t=e(569),p=e.n(t),l=e(565),s=e.n(l),d=e(216),m=e.n(d),E=e(589),c=e.n(E),C=e(756),B={};B.styleTagTransform=c(),B.setAttributes=s(),B.insert=p().bind(null,"head"),B.domAPI=a(),B.insertStyleElement=m(),o()(C.Z,B),C.Z&&C.Z.locals&&C.Z.locals},362:(n,A,e)=>{var i=e(379),o=e.n(i),r=e(795),a=e.n(r),t=e(569),p=e.n(t),l=e(565),s=e.n(l),d=e(216),m=e.n(d),E=e(589),c=e.n(E),C=e(948),B={};B.styleTagTransform=c(),B.setAttributes=s(),B.insert=p().bind(null,"head"),B.domAPI=a(),B.insertStyleElement=m(),o()(C.Z,B),C.Z&&C.Z.locals&&C.Z.locals}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var r=e[n]={id:n,exports:{}};return A[n](r,r.exports,i),r.exports}i.m=A,n=[],i.O=(A,e,o,r)=>{if(!e){var a=1/0;for(s=0;s<n.length;s++){for(var[e,o,r]=n[s],t=!0,p=0;p<e.length;p++)(!1&r||a>=r)&&Object.keys(i.O).every((n=>i.O[n](e[p])))?e.splice(p--,1):(t=!1,r<a&&(a=r));if(t){n.splice(s--,1);var l=o();void 0!==l&&(A=l)}}return A}r=r||0;for(var s=n.length;s>0&&n[s-1][2]>r;s--)n[s]=n[s-1];n[s]=[e,o,r]},i.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return i.d(A,{a:A}),A},i.d=(n,A)=>{for(var e in A)i.o(A,e)&&!i.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:A[e]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),i.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),(()=>{var n;i.g.importScripts&&(n=i.g.location+"");var A=i.g.document;if(!n&&A&&(A.currentScript&&(n=A.currentScript.src),!n)){var e=A.getElementsByTagName("script");if(e.length)for(var o=e.length-1;o>-1&&!n;)n=e[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=n})(),(()=>{i.b=document.baseURI||self.location.href;var n={954:0};i.O.j=A=>0===n[A];var A=(A,e)=>{var o,r,[a,t,p]=e,l=0;if(a.some((A=>0!==n[A]))){for(o in t)i.o(t,o)&&(i.m[o]=t[o]);if(p)var s=p(i)}for(A&&A(e);l<a.length;l++)r=a[l],i.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return i.O(s)},e=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];e.forEach(A.bind(null,0)),e.push=A.bind(null,e.push.bind(e))})(),i.nc=void 0;var o=i.O(void 0,[611,193,337,268],(()=>i(253)));o=i.O(o)})();
//# sourceMappingURL=app~d1658f4b.bundle.js.map