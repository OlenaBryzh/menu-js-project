const menuArray = [
  {
    id: 1,
    title: "Softest pancakes",
    category: "breakfast",
    price: 13.99,
    img: "./img/item-1.jpeg",
    description: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "Double diner",
    category: "lunch",
    price: 15.99,
    img: "./img/item-2.jpeg",
    description: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing.`,
  },
  {
    id: 3,
    title: "Strawberry milkshake",
    category: "shakes",
    price: 7.99,
    img: "./img/item-3.jpeg",
    description: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "Cheesy egg toast",
    category: "breakfast",
    price: 17.99,
    img: "./img/item-4.jpeg",
    description: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "Kingsize burger",
    category: "lunch",
    price: 22.99,
    img: "./img/item-5.jpeg",
    description: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "Chocolate milkshake",
    category: "shakes",
    price: 8.99,
    img: "./img/item-6.jpeg",
    description: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "Bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./img/item-7.jpeg",
    description: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "American classic",
    category: "lunch",
    price: 12.99,
    img: "./img/item-8.jpeg",
    description: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  }
];
// define all required consts
const menuContainer = document.querySelector(".menu-container");
const allBtn = document.getElementById("all");
const breakfastBtn = document.getElementById("breakfast");
const lunchBtn = document.getElementById("lunch");
const shakesBtn = document.getElementById("shakes");
//render menu on the screen
window.addEventListener("DOMContentLoaded", function () {
  displayMenu(menuArray);
});
//create function for rendering menu items on the screen
function displayMenu (array) {
  let showMenuItems = array.map(function (item) {
    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="item-image" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.description}
            </p>
          </div>
        </article>`;
  });
  showMenuItems = showMenuItems.join(""); 
  menuContainer.innerHTML = showMenuItems;
}
//listen to all buttons
allBtn.addEventListener("click", showAll);
breakfastBtn.addEventListener("click", showBreakfast);
lunchBtn.addEventListener("click", showLanch);
shakesBtn.addEventListener("click", showShakes);
//show all menu items
function showAll() {
  displayMenu(menuArray);
}
//show breakfast items
function showBreakfast() {
  let breakfastItem = menuArray.filter(function(el){
    if(el.category === "breakfast"){
      return el
    }
    });
    return displayMenu(breakfastItem);
}
//show lunch items
function showLanch() {
  let lunchItem = menuArray.filter(function(el){
    if(el.category === "lunch"){
      return el
    }
    });
    return displayMenu(lunchItem);
}
//show shakes items
function showShakes() {
  let shakesItem = menuArray.filter(function(el){
    if(el.category === "shakes"){
      return el
    }
    });
    return displayMenu(shakesItem);
}
