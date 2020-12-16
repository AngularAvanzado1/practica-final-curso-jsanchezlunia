/* Este es un pequeño JavaScript para darle vida a la aplicación estándar para que permita cambiar de país */

initCountryByURLParam();

function initCountryByURLParam() {
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var countryId = urlParams.get('id');

  if (countryId) {
    var webComponent = document.querySelector("wbde-country");
    webComponent.setAttribute("id", countryId);
    var input = document.getElementById("country_id");
    input.value = countryId;
  }
}

function changeCountry() {
  const countryId = document.getElementById("country_id").value;
  addUrlParameter('id',countryId);
}

function addUrlParameter(name, value) {
  var searchParams = new URLSearchParams(window.location.search)
  searchParams.set(name, value)
  window.location.search = searchParams.toString()
}
