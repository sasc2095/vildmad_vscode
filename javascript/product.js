//https://uutiizppilsesjcptglo.supabase.co/rest/v1/vildmad_database

const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1dGlpenBwaWxzZXNqY3B0Z2xvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzQ0MTgsImV4cCI6MjAwOTY1MDQxOH0.NUGKP51o37ORWFiRq3CrUp7oImAREwLfwuA5LWPaK2I";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch(
  "https://uutiizppilsesjcptglo.supabase.co/rest/v1/vildmad_database?id=eq." +
    id,
  {
    method: "GET",
    headers: {
      apikey: key,
    },
  }
)
  .then((response) => response.json())
  .then((data) => showStrand(data));

function showStrand(strand) {
  const data = strand[0];
  document.querySelector("p.id").textContent = data.id;
  document.querySelector(".productBox h2").textContent = data.title;
  document.querySelector(".productBox h3").textContent =
    data.sankelandskaber_title;

  document.querySelector(".imageprodukt").src = data.profile_image;

  //document.querySelector(".grid_product".appendChild(clone);
}

const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});
