//uutiizppilsesjcptglo.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1dGlpenBwaWxzZXNqY3B0Z2xvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzQ0MTgsImV4cCI6MjAwOTY1MDQxOH0
//   .NUGKP51o37ORWFiRq3CrUp7oImAREwLfwuA5LWPaK2I;

fetch("https://uutiizppilsesjcptglo.supabase.co/rest/v1/vildmad_database", {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1dGlpenBwaWxzZXNqY3B0Z2xvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzQ0MTgsImV4cCI6MjAwOTY1MDQxOH0.NUGKP51o37ORWFiRq3CrUp7oImAREwLfwuA5LWPaK2I",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(database) {
  console.log(database);
  //   items.forEach();
}

// let filterWinter = arrayWinter.filter((winter - button, frontpage, array) => { return database.season == 11,0,1 == 'winter' });

const winter = document.querySelector("#winter-button").textContent;
// const spring = document.querySelector("#spring-button").content;
// const summer = document.querySelector("#summer-button").content;
// const fall = document.querySelector("#fall-button").content;

function showWinterCategory(winterCategory) {
  if ((database.season / 0, 1, 2, 3 === "11, 0, 1"));

  console.log(winterCategory);
}
