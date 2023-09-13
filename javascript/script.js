fetch("https://uutiizppilsesjcptglo.supabase.co/rest/v1/vildmadDatabase?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1dGlpenBwaWxzZXNqY3B0Z2xvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzQ0MTgsImV4cCI6MjAwOTY1MDQxOH0.NUGKP51o37ORWFiRq3CrUp7oImAREwLfwuA5LWPaK2I")
    .then(res => res.json())
    .then(showArstid)

function showArstid(cats) {
    //looper og kalder showProduct
    cats.forEach(showArstid);
}

function showArstid(cat) {
    //fanger vores template
    const template = document.querySelector("template").content;
    //cloner
    const clone = template.cloneNode(true);
    //ændre indhold
    clone.querySelector("a").textContent = cat.Arstid1=Arstid2Arstid3Arstid4;
    clone.querySelector("a").href = `productlist.html?Arstid1=${cat.Arstid1Arstid2Arstid3Arstid4}`;

    //apennder
    document.querySelector("main").appendChild(clone);

}






//uutiizppilsesjcptglo.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1dGlpenBwaWxzZXNqY3B0Z2xvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzQ0MTgsImV4cCI6MjAwOTY1MDQxOH0
//   .NUGKP51o37ORWFiRq3CrUp7oImAREwLfwuA5LWPaK2I;

// fetch("https://uutiizppilsesjcptglo.supabase.co/rest/v1/vildmad_database", {
//   method: "GET",
//   headers: {
//     apikey:
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1dGlpenBwaWxzZXNqY3B0Z2xvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzQ0MTgsImV4cCI6MjAwOTY1MDQxOH0.NUGKP51o37ORWFiRq3CrUp7oImAREwLfwuA5LWPaK2I",
//   },
// })
//   .then((res) => res.json())
//   .then(showData);

// function showData(database) {
//   console.log(database);
//   //   items.forEach();
// }

// let filterWinter = arrayWinter.filter((winter - button, frontpage, array) => { return database.season == 11,0,1 == 'winter' });

const winter = document.querySelector("#winter-button").textContent;
// const spring = document.querySelector("#spring-button").content;
// const summer = document.querySelector("#summer-button").content;
// const fall = document.querySelector("#fall-button").content;

// burger menu
// Lav variablen "btn", der henviser til ".toggle-btn"
const btn = document.querySelector(".toggle-btn");
// Lav variablen "menu", der henviser til ".main-menu"
const menu = document.querySelector(".main-menu");

// Lav funktionen "toggleMenu()" med følgende funktionalitet
function toggleMenu() {
  // a) toggle klassen "shown" på menu vha. classList.toggle
  menu.classList.toggle("shown");

  // b) lav variablen "menuShown", som siger, at menu-variablen indeholder klassen "shown" via classList.contains("")
  const menuShown = menu.classList.contains("shown");

  // c) spørg om "menuShown" i if-sætningen nedenfor (=> if (menuShown)), og udskift teksten
  if (menuShown) {
    console.log(menuShown); // se i konsollen
    // sæt btn.textContent til "Luk", hvis menuShown er "true"
    btn.textContent = "Luk";
  } else {
    console.log(menuShown); // se i konsollen
    // sæt btn.textContent til "Menu", hvis menuShown er "false"
    btn.textContent = "Menu";
  }
}

// Tilføj et klik-event til "btn", der sætter toggleMenu-funktionen i gang
btn.addEventListener("click", toggleMenu);

