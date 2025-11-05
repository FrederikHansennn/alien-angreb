console.log("instruction.js loaded");

/* JS TIL JYLLAND HOTSPOT */
document.querySelector("#Jylland").onclick = function () {
  console.log("Jylland clicked");
  document.querySelector("#Hotspot-jylland circle").style.fill = "red";
document.querySelector(".info-text h2").textContent = "Angeb på Jylland";
document.querySelector(".placeholder"). textContent = "Sikkerhedsanbefalinger for Jylland";
document.querySelector("#efficiency"). textContent = "Er Jylland angrbet søg straks så langt væk fra Herning som muligt, Aliens vil tro Elia skulpturen er noget for dem og angribe der først.";
document.querySelector("#requirement"). textContent ="Er det muligt at komme væk fra Herning, søg mod sydvest mod Esbjerg, Aliens angriber sjældent byer med havne.";
};

/* JS TIL FYN HOTSPOT */
document.querySelector("#Fyn").onclick = function () {
  console.log("Fyn clicked");
  document.querySelector("#Hotspot-Fyn ellipse").style.fill = "red";
  document.querySelector(".info-text h2").textContent = "Angreb på Fyn";
  document.querySelector(".placeholder"). textContent = "Sikkerhedsanbefalinger for Fyn";
document.querySelector("#efficiency"). textContent = "Er Fyn angrebet søg straks mod Langeland, Aliens har svært ved at navigere på øer og vil ofte overse dem.";
document.querySelector("#requirement"). textContent ="I tilfælde af et angreb på Fyn, pas på de ikke får fat i Brunsviger, vi ved stadig ikke hvad det gør ved dem.";
};
/* JS TIL SJÆLLAND HOTSPOT */
document.querySelector("#Sjaelland").onclick = function () {
  console.log("Sjælland clicked");
  document.querySelector("#Hotspot-Sjaelland circle").style.fill = "red";
  document.querySelector(".info-text h2").textContent = "Angreb på Sjælland";
  document.querySelector(".placeholder"). textContent = "Sikkerhedsanbefalinger for Sjælland";
document.querySelector("#efficiency"). textContent = "Er Sjælland angrebet er det straks mere kritisk, hjemmeværnet må sættes ind for at beskytte alt værdifuldt";
document.querySelector("#requirement"). textContent ="Med alt værdifuldt menes der statsarv, bla kronjuvelerne og andet af særlig høj værdi. Nej din surdej er ikke inkluderet.";
};

/* JS TIL RESET KNAPPEN */
document.querySelector("#Reset").onclick = function () {
  console.log("Reset clicked");

  // Nulstil farver på kortet
  document.querySelector("#Hotspot-jylland circle").style.fill = "#a1cf6e";
  document.querySelector("#Hotspot-Fyn ellipse").style.fill = "#a1cf6e";
  document.querySelector("#Hotspot-Sjaelland circle").style.fill = "#a1cf6e";

  // Standardtekster
  document.querySelector(".info-text h2").textContent = "Sikkerhedanbefalinger for potentielle alien angreb I Danmark";
  document.querySelector(".placeholder").textContent = "Klik på en knap til et område, for at se sikkerhedsanbefalinger for dit område.";
  document.querySelector("#efficiency").textContent = "Generelle sikkerhedsanbefalinger vil blive vist her.";
  document.querySelector("#requirement").textContent = "Krav til sikkerhedsanbefalinger vil blive vist her." };
