const urlParams = new URLSearchParams(window.location.search);
const strand = urlParams.get("strand");
const categoryParam = strand ? "?strand=" + strand : "";

//https://uutiizppilsesjcptglo.supabase.co
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1dGlpenBwaWxzZXNqY3B0Z2xvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzQ0MTgsImV4cCI6MjAwOTY1MDQxOH0.NUGKP51o37ORWFiRq3CrUp7oImAREwLfwuA5LWPaK2I";

fetch("https://uutiizppilsesjcptglo.supabase.co/rest/v1/vildmadDatabase", {
  method: "GET",
  headers: {
    apikey: key,
  },
})
  .then((res) => res.json())
  .then(showStrande);

function showStrande(strande) {
  strande.forEach(showStrand);
}

function showStrand(strand) {
  console.log(strand);
  const template = document.querySelector("#productListTemplate").content;
  const copy = template.cloneNode(true);

  copy.querySelector(".title").textContent = strand.title;
  copy.querySelector("img").src = strand.profileImage;

  copy
    .querySelector(".imageProductlist")
    .setAttribute("href", `product.html?id=${strand.id}`);
  document.querySelector(".gridProductlist").appendChild(copy);
}
