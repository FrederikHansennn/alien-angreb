console.log("JS er forbundet korrekt");

// --- OUTPUTS (hvor data skal vises) ---
const firstNameOutput = document.querySelector("#fulde_navn_output");
const ageOutput = document.querySelector("#din_alder_output");
const phoneOutput = document.querySelector("#phone_output");
const cprOutput = document.querySelector("#cpr_output");
const antalAliensOutput = document.querySelector("#antal_aliens_output");
const farveOutput = document.querySelector("#farve_output");
const antalOjneOutput = document.querySelector("#antal_ojne_output");
const antalArmeOutput = document.querySelector("#antal_arme_output");
const landsdelOutput = document.querySelector("#landsdel_output");
const byOutput = document.querySelector("#by_output");
const datoOutput = document.querySelector("#dato_output");
const afstandOutput = document.querySelector("#afstand_output");
const bevaebnetOutput = document.querySelector("#bevaebnet_output");
const vabenTypeOutput = document.querySelector("#vaben_type_output");

// --- FORM ---
const form = document.querySelector("#form-section form");

// --- FUNKTION NÅR DU TRYKKER INDSEND ---
// --- SUBMIT FUNKTION ---
form.addEventListener("submit", function (event) {
  event.preventDefault();


  // HENTER INPUT FRA FORMULAR
  const fullNameInput = document.querySelector("#full-name").value;
  const ageInput = document.querySelector("#age").value;
  const phoneInput = document.querySelector("#phone").value;
  const cprInput = document.querySelector("#cpr").value;
  const antalAliensInput = document.querySelector("#antal-aliens").value;
  const farveInput = document.querySelector("#farve").value;
  const antalOjneInput = document.querySelector("#antal-ojne").value;
  const antalArmeInput = document.querySelector("#antal-arme").value;
  const landsdelInput = document.querySelector("#landsdel").value;
  const byInput = document.querySelector("#by").value;
  const datoInput = document.querySelector("#dato").value;
  const afstandInput = document.querySelector("#afstand").value;
  const bevaebnetInput = document.querySelector('input[name="bevaebnet"]:checked').value;
  const vabenTypeInput = document.querySelector("#vaben-type").value;

  


  // SÆTTER DATA IND I SUMMARY
  firstNameOutput.textContent = fullNameInput;
  ageOutput.textContent = ageInput;
  phoneOutput.textContent = phoneInput;
  cprOutput.textContent = cprInput;
  antalAliensOutput.textContent = antalAliensInput;
  farveOutput.textContent = farveInput;
  antalOjneOutput.textContent = antalOjneInput;
  antalArmeOutput.textContent = antalArmeInput;
  landsdelOutput.textContent = landsdelInput;
  byOutput.textContent = byInput;
  datoOutput.textContent = datoInput;
  afstandOutput.textContent = afstandInput;
  bevaebnetOutput.textContent = bevaebnetInput;
  vabenTypeOutput.textContent = vabenTypeInput;

  // VISER DET SAMME I KONSOLE (tjek)
  console.log("Fulde navn:", fullNameInput);
  console.log("Alder:", ageInput);
  console.log("Telefon:", phoneInput);
  console.log("CPR:", cprInput);
  console.log("Antal aliens:", antalAliensInput);
  console.log("Farve:", farveInput);
  console.log("Antal øjne:", antalOjneInput);
  console.log("Antal arme:", antalArmeInput);
  console.log("Landsdel:", landsdelInput);
  console.log("By:", byInput);
  console.log("Dato:", datoInput);
  console.log("Afstand:", afstandInput);
  console.log("Bevæbnet:", bevaebnetInput);
  console.log("Våben type:", vabenTypeInput);
});
