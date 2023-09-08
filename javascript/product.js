fetch(
  "https://uutiizppilsesjcptglo.supabase.co/rest/v1/vildmad_database?id=eq.2",
  {
    method: "GET",
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1dGlpenBwaWxzZXNqY3B0Z2xvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzQ0MTgsImV4cCI6MjAwOTY1MDQxOH0.NUGKP51o37ORWFiRq3CrUp7oImAREwLfwuA5LWPaK2I",
    },
  }
)
  .then((res) => res.json())
  .then(showProduct);

function showProduct(data) {
  console.log(data);

  document.querySelector(".title h2").textContent = product[0].title;
  document.querySelector(".sankelandskaber/0/title h3").textContent =
    product.sankelandskaber / 01 / title;
  document.querySelector("p.categories/0/name").textContent =
    product.categories;

  document.querySelector("p.season/0").textContent = product[0].season / 0;
  document.querySelector("p.season/1").textContent = product[0].season / 1;
  document.querySelector("p.season/2").textContent = product[0].season / 2;
  document.querySelector("p.season/03").textContent = product.season / 3;

  document.querySelector("img").src = ``;
}
