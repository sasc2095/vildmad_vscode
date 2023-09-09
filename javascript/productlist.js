const urlParams = new URLSearchParams(window.location.search);
const categories = urlParams.get("categories");

if (category) {
  fetch(
    "https://uutiizppilsesjcptglo.supabase.co/rest/v1/vildmad_database?categories/0/name=" +
      categories
  )
    .then((res) => res.json())
    .then(showProducts);
} else {
  fetch("https://uutiizppilsesjcptglo.supabase.co/rest/v1/vildmad_database")
    .then((res) => res.json())
    .then(showProducts);
}

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //fang template
  const template = document.querySelector("#productListTemplate").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;

  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  copy
    .querySelector(".readMore")
    .setAttribute("href", `produkt.html?id=${product.id}`);

  //appende
  document.querySelector(".grid").appendChild(copy);
}
