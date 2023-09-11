//

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
  document.querySelector(".title").textContent = data.title;
  document.querySelector("sankelandskaber/0/title").textContent =
    data.sankelandskaber;

  //document.querySelector(".grid_product".appendChild(clone);
}
