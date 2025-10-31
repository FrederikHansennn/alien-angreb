console.log("instruction.js loaded");

// Klik på knapper
document.querySelector("#Jylland").onclick = function () {
  console.log("Jylland clicked");
  document.querySelector("#Hotspot-jylland circle").style.fill = "red";
};

document.querySelector("#Fyn").onclick = function () {
  console.log("Fyn clicked");
  document.querySelector("#Hotspot-Fyn ellipse").style.fill = "red";
};

document.querySelector("#Sjaelland").onclick = function () {
  console.log("Sjælland clicked");
  document.querySelector("#Hotspot-Sjaelland circle").style.fill = "red";
};
