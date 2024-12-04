const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "HOODIE JACKET",
    price: 250,
    colors: [
      {
        code: "blue",
        img: "./section/coat1.png",
      },
      {
        code: "black",
        img: "./section/coat2.png",
      },
    ],
  },
  {
    id: 2,
    title: "SWEATER",
    price: 150,
    colors: [
      {
        code: "gray",
        img: "./section/sweter1-removebg-preview.png",
      },
      {
        code: "black",
        img: "./section/sweter2-removebg-preview.png",
      },
    ],
  },
  {
    id: 3,
    title: "DANIM",
    price: 200,
    colors: [
      {
        code: "darkblue",
        img: "./section/denm1.png",
      },
      {
        code: "lightblue",
        img: "./section/denim2lightblue.-removebg-preview.png",
      },
    ],
  },
  {
    id: 4,
    title: "PUFFER",
    price: 150,
    colors: [
      {
        code: "red",
        img: "./section/puff1.png",
      },
      {
        code: "blue",
        img: "./section/pufferblue2.png",
      },
    ],
  },
  {
    id: 5,
    title: "MILITARY JACKET",
    price: 180,
    colors: [
      {
        code: "green",
        img: "./section/coat4.png",
      },
      {
        code: "darkgreen",
        img: "./section/miltry 2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index]?.img;
  });
});

currentProductSizes.forEach((size) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((s) => {
      s.style.backgroundColor = "white";
      s.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productBtn");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});