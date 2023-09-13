//uutiizppilsesjcptglo.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1dGlpenBwaWxzZXNqY3B0Z2xvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzQ0MTgsImV4cCI6MjAwOTY1MDQxOH0
//   .NUGKP51o37ORWFiRq3CrUp7oImAREwLfwuA5LWPaK2I;

// const urlParams = new URLSearchParams(window.location.search);
// const arstid = urlParams.get("Arstid1 + Arstid2 + Artid3 + Arstid4");
// const springParam = arstid ? "?arstid=forår" + arstid : "";

const urlParams = new URLSearchParams(window.location.search);
const strand = urlParams.get("strand");
const categoryParam = strand ? "?strand=" + strand : "";

fetch("https://uutiizppilsesjcptglo.supabase.co/rest/v1/vildmad_database", {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1dGlpenBwaWxzZXNqY3B0Z2xvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzQ0MTgsImV4cCI6MjAwOTY1MDQxOH0.NUGKP51o37ORWFiRq3CrUp7oImAREwLfwuA5LWPaK2I",
  },
})
.then((response) => response.json())
.then((data) => showProduct(data));

function showProducts(products){
  products.forEach(showProduct);
}

  function showProduct(product) {
    console.log(product);
    const dataer = product[0];

  const template = document.querySelector(".winter-button").content;
  // const copy = template.cloneNode(true);
  const filterWinter = dataer.filter((data) => data.Arstid1+Arstid2+Arstid3+Arstid4 === 'Vinter');
console.log(filterWinter)




copy
.querySelector(".menu_buttons").href=`productlist.html?id=${data.Arstid1+Arstid2+Arstid3+Arstid4}`;

  }
  


// function showData(data){
//   const template = document.querySelector(".winter-button").content;
//   // const copy = template.cloneNode(true);
//   const filterWinter = data.filter((data)=> data.Arstid1+Arstid2+Arstid3+Arstid4 === 'Vinter');
// console.log(filterWinter)


// copy
// .querySelector(".menu_buttons").href=`productlist.html?id=${data.Arstid1+Arstid2+Arstid3+Arstid4}`;
// }




// let filterWinter = {Arstid1: 'Vinter', Arstid2: 'Vinter', Arstid3: 'Vinter', Arstid4: 'Vinter'};

// function filterWinter(showData, filterWinter){

// }

// const winter = document.querySelector("#winter-button").textContent;
// // const spring = document.querySelector("#spring-button").content;
// // const summer = document.querySelector("#summer-button").content;
// // const fall = document.querySelector("#fall-button").content;

// function showWinterCategory(winterCategory) {
//   if ((database.season / 0, 1, 2, 3 === "11, 0, 1"));

//   console.log(winterCategory);
// }

// burgermenu

const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav')

menu_btn.addEventListener('click', function(){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');

});